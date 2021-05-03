import { Component, OnInit } from '@angular/core';
import { Week, WeekAlias } from '../types/week';
import { DateTable } from '../types/date-table';
import { DateTableService } from './components/calendar/date-table.service';
import { NgbMaterialDatepickerService } from '../ngb-material-datepicker.service';
import { NgbMaterialDatepickerConfig } from '../injector/ngb-material-datepicker-config';
import { NgbMaterialDatepickerPresenterService } from '../ngb-material-datepicker-presenter.service';

@Component({
    selector: 'lib-ngb-material-datepicker',
    templateUrl: 'ngb-material-datepicker.component.html',
    styleUrls: ['ngb-material-datepicker.component.scss'],
})
export class NgbMaterialDatepickerComponent implements OnInit {
    public displayWeek: Week = ['日', '月', '火', '水', '木', '金', '土'];
    public selectedYear: number = 2021;
    public selectedMonth: number = 5;
    public selectedDate: number = 1;
    public selectedDays: WeekAlias = 0;
    public dataTable: DateTable = [];
    public headerColor: string = '';
    public dateColor: string = '';
    public headerTextColor: string = '';
    public dateTextColor: string = '';

    constructor(
        private _ngbDatepickerService: NgbMaterialDatepickerService,
        private _presenter: NgbMaterialDatepickerPresenterService,
        private _dataTable: DateTableService,
        private _config: NgbMaterialDatepickerConfig
    ) {}

    ngOnInit(): void {
        const { headerColor, dateColor } = this._config;
        this.headerColor = this._presenter.initializeHeaderColor(headerColor);
        this.dateColor = this._presenter.initializeDateColor(dateColor);
        this.headerTextColor = this._presenter.getTextColor(this.headerColor);
        this.dateTextColor = this._presenter.getTextColor(this.dateColor);
        this.dataTable = this._dataTable.create(new Date('2021-05-01'));
    }

    public selectDate(date: number) {}

    public clickClose() {
        this._ngbDatepickerService.close();
    }

    public clickOk() {}

    public clickCancel() {
        this._ngbDatepickerService.close();
    }
}
