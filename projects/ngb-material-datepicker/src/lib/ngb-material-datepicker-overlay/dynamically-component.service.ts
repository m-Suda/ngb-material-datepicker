import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Injectable,
    Injector,
    Type,
} from '@angular/core';
import { NgbMaterialDatepickerInjector } from '../injector/ngb-material-datepicker-injector';
import { NgbMaterialDatepickerConfig } from '../injector/ngb-material-datepicker-config';
import { NgbMaterialDatepickerRef } from '../ngb-material-datepicker-ref';

@Injectable({
    providedIn: 'root',
})
export class DynamicallyComponentService<ComponentClassType> {
    private _dynamicComponentRef?: ComponentRef<ComponentClassType>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private applicationRef: ApplicationRef,
        private injector: Injector
    ) {}

    public get dynamicComponentRef(): ComponentRef<ComponentClassType> {
        if (!this._dynamicComponentRef) {
            throw new Error('Component has not been created');
        }
        return this._dynamicComponentRef;
    }

    /**
     * 動的コンポーネントをdocument.body配下に追加する。
     */
    public appendToApplication(
        type: Type<ComponentClassType>,
        config: NgbMaterialDatepickerConfig
    ): NgbMaterialDatepickerRef {
        const datepickerRef = new NgbMaterialDatepickerRef();
        const componentRef = this.createComponentRef(type, config, datepickerRef);
        this.applicationRef.attachView(componentRef.hostView);
        this._attachComponentToDocumentBody(componentRef);
        this._dynamicComponentRef = componentRef;

        // 様々な箇所で呼ばれるDatepickerRef.afterCloseを検知し、Datepickerを閉じて購読を解除する。
        const sub = datepickerRef.afterClose.subscribe(() => {
            this._removeFromApplication();
            sub.unsubscribe();
        });
        return datepickerRef;
    }

    /**
     * 動的コンポーネントをdocument.bodyから削除する。
     * @private
     */
    private _removeFromApplication() {
        if (!this._dynamicComponentRef) {
            throw new Error('Component has not been created');
        }
        this.applicationRef.detachView(this._dynamicComponentRef.hostView);
        this._dynamicComponentRef.destroy();
    }

    /**
     * ComponentRefを作成する。
     * @param componentType
     * @param config
     * @param datepickerRef
     * @private
     * @return {ComponentRef}
     */
    private createComponentRef(
        componentType: Type<ComponentClassType>,
        config: NgbMaterialDatepickerConfig,
        datepickerRef: NgbMaterialDatepickerRef
    ): ComponentRef<ComponentClassType> {
        const map = new WeakMap();
        map.set(NgbMaterialDatepickerConfig, config);
        map.set(NgbMaterialDatepickerRef, datepickerRef);

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory<ComponentClassType>(
            componentType
        );
        return componentFactory.create(new NgbMaterialDatepickerInjector(this.injector, map));
    }

    /**
     * ComponentRefをdocument.body配下に追加する。
     * @param componentRef
     * @private
     * @return {void}
     */
    private _attachComponentToDocumentBody(componentRef: ComponentRef<ComponentClassType>): void {
        const domElm = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElm);
    }
}
