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

    public openDatepicker() {
        this.ngbMaterialDatepicker.open({});
    }

    public openDatepickerCustomColor() {
        this.ngbMaterialDatepicker.open({
            dateColor: '#692bff',
            headerColor: '#7e47ff',
        });
    }

    public openDatepickerSpecify() {
        this.ngbMaterialDatepicker.open({
            initializeValue: new Date('2021/07/31'),
        });
    }
}
