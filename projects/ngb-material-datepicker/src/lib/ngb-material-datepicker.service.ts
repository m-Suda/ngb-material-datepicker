import { Injectable } from '@angular/core';
import { DynamicallyComponentService } from './ngb-material-datepicker-overlay/dynamically-component.service';
import { NgbMaterialDatepickerConfig } from './injector/ngb-material-datepicker-config';
import { NgbMaterialDatepickerOverlayComponent } from './ngb-material-datepicker-overlay/ngb-material-datepicker-overlay.component';
import { NgbMaterialDatepickerRef } from './ngb-material-datepicker-ref';

@Injectable({
    providedIn: 'root',
})
export class NgbMaterialDatepickerService {
    constructor(
        private _dynamicallyComponent: DynamicallyComponentService<NgbMaterialDatepickerOverlayComponent>
    ) {}

    /**
     * Datepickerを開く。
     */
    public open(config: NgbMaterialDatepickerConfig): NgbMaterialDatepickerRef {
        return this._dynamicallyComponent.appendToApplication(
            NgbMaterialDatepickerOverlayComponent,
            config
        );
    }
}
