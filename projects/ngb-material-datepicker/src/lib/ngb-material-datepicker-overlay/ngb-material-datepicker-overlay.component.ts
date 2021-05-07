import { AfterViewInit, Component, OnDestroy, Type } from '@angular/core';
import { DynamicallyComponentService } from './dynamically-component.service';
import { NgbMaterialDatepickerRef } from '../ngb-material-datepicker-ref';

@Component({
    selector: 'lib-ngb-material-datepicker-container',
    templateUrl: './ngb-material-datepicker-overlay.component.html',
    styleUrls: ['./ngb-material-datepicker-overlay.component.scss'],
})
export class NgbMaterialDatepickerOverlayComponent implements AfterViewInit, OnDestroy {
    constructor(
        private _dynamicallyComponent: DynamicallyComponentService<NgbMaterialDatepickerOverlayComponent>,
        private _datepickerRef: NgbMaterialDatepickerRef
    ) {}
    ngAfterViewInit(): void {}

    ngOnDestroy(): void {}

    /**
     * Overlayがクリックされた。
     * @param {MouseEvent} event
     */
    public onOverlayClick(event: MouseEvent) {
        this._datepickerRef.close();
    }

    /**
     * ダイアログがクリックされた。
     * ※ダイアログクリックでもOverlayのクリック扱いとなってしまうため、イベントを止める。
     * @param {MouseEvent} event
     */
    public onDialogClick(event: MouseEvent): void {
        event.stopPropagation();
    }
}
