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
    ) {
        const componentRef = this.createComponentRef(type, config);
        this.applicationRef.attachView(componentRef.hostView);
        this._attachComponentToDocumentBody(componentRef);
        this._dynamicComponentRef = componentRef;
    }

    /**
     * 動的コンポーネントをdocument.bodyから削除する。
     * @private
     */
    public removeFromApplication() {
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
     * @private
     * @return {ComponentRef<T>}
     */
    private createComponentRef(
        componentType: Type<ComponentClassType>,
        config: NgbMaterialDatepickerConfig
    ): ComponentRef<ComponentClassType> {
        const map = new WeakMap();
        map.set(NgbMaterialDatepickerConfig, config);

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
