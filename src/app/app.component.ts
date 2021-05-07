import { Component } from '@angular/core';
import { NgbMaterialDatepickerService } from '../../projects/ngb-material-datepicker/src/lib/ngb-material-datepicker.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'bootstrap-material-datepicker-for-angular';
    constructor(private ngbMaterialDatepicker: NgbMaterialDatepickerService) {}

    public normalResult = '';
    public customColorResult = '';
    public specifyResult = '';
    public outputFormatResult = '';

    public openDatepicker() {
        const ref = this.ngbMaterialDatepicker.open({});
        ref.afterClose.subscribe((r) => {
            if (r == null) return;
            this.normalResult = r;
        });
    }

    public openDatepickerCustomColor() {
        const ref = this.ngbMaterialDatepicker.open({
            dateColor: '#692bff',
            dateTextColor: '#FFFFFF',
            headerColor: '#7e47ff',
            headerTextColor: '#FFFFFF',
        });
        ref.afterClose.subscribe((r) => {
            if (r == null) return;
            this.customColorResult = r;
        });
    }

    public openDatepickerSpecify() {
        const ref = this.ngbMaterialDatepicker.open({
            initializeValue: new Date('2021/07/31'),
        });
        ref.afterClose.subscribe((r) => {
            if (r == null) return;
            this.specifyResult = r;
        });
    }

    public openDatepickerOutputFormat() {
        const ref = this.ngbMaterialDatepicker.open({
            outputFormat: 'yo/MMM/do H:mo:so',
        });
        ref.afterClose.subscribe((r) => {
            if (r == null) return;
            this.outputFormatResult = r;
        });
    }
}
