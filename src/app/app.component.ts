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
        this.ngbMaterialDatepicker.open({
            dateColor: '#A0A0A0',
            headerColor: '#FFD900',
        });
    }
}
