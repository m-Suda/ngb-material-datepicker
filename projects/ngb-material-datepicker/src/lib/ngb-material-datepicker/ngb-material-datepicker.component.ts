import { Component, OnInit } from '@angular/core';
import { Week } from '../types/week';
import { DateTable } from '../types/date-table';
import { DateTableService } from './components/calendar/date-table.service';
import { NgbMaterialDatepickerService } from '../ngb-material-datepicker.service';
import { NgbMaterialDatepickerConfig } from '../injector/ngb-material-datepicker-config';
import { NgbMaterialDatepickerPresenterService } from './ngb-material-datepicker-presenter.service';
import { DateService } from '../libs/date.service';
import { Observable } from 'rxjs';
import { YearMonthDateDay } from '../types/date';
import { DateState } from '../states/date-state';
import { NgbMaterialDatepickerRef } from '../ngb-material-datepicker-ref';

@Component({
    selector: 'lib-ngb-material-datepicker',
    templateUrl: 'ngb-material-datepicker.component.html',
    styleUrls: ['ngb-material-datepicker.component.scss'],
})
export class NgbMaterialDatepickerComponent implements OnInit {
    public displayWeek: Week = ['日', '月', '火', '水', '木', '金', '土'];
    public dateState$: Observable<YearMonthDateDay> = this._dateState.dateState$;
    public dataTable: DateTable = [];
    public headerColor: string = '';
    public dateColor: string = '';
    public headerTextColor: string = '';
    public dateTextColor: string = '';

    constructor(
        private _ngbDatepickerService: NgbMaterialDatepickerService,
        private _presenter: NgbMaterialDatepickerPresenterService,
        private _dataTable: DateTableService,
        private _date: DateService,
        private _dateState: DateState,
        private _config: NgbMaterialDatepickerConfig,
        private _datepickerRef: NgbMaterialDatepickerRef
    ) {}

    ngOnInit(): void {
        const {
            headerColor,
            dateColor,
            headerTextColor,
            dateTextColor,
            initializeValue,
        } = this._config;

        // 各Styleを設定
        this.headerColor = this._presenter.initializeHeaderColor(headerColor);
        this.dateColor = this._presenter.initializeDateColor(dateColor);
        this.headerTextColor = this._presenter.getTextColor(this.headerColor, headerTextColor);
        this.dateTextColor = this._presenter.getTextColor(this.dateColor, dateTextColor);

        // 日付テーブルを作成する。
        this.dataTable = this._dataTable.create(initializeValue);

        // 初期値を設定する。
        const initializeDate = this._date.getYearMonthDateDay(initializeValue);
        this._dateState.update(initializeDate);
    }

    /**
     * 閉じるがクリックされた。
     */
    public clickClose() {
        this._datepickerRef.close();
    }

    /**
     * OKがクリックされた。
     */
    public clickOk() {
        const { outputFormat } = this._config;
        const result = this._dateState.getDateStringFromCurrentState(outputFormat);
        this._datepickerRef.close(result);
    }

    /**
     * Cancelがクリックされた。
     */
    public clickCancel() {
        this._datepickerRef.close();
    }

    /**
     * 日付が選択された。
     * @param date
     */
    public selectDate(date: number) {
        const { year, month } = this._dateState.currentValue;
        const zeroBeginningMonth = this._date.convertMonthToZeroStart(month);
        const day = this._date.getDay(
            this._date.getDateFromYearMonthDate({ year, month: zeroBeginningMonth, date })
        );
        this._dateState.update({ date, day });
    }

    /**
     * 前月を表示する。
     * @param month
     */
    public lastMonth(month: number): void {
        const updateMonth = month !== 1 ? month - 1 : 12;
        this._dateState.update({ month: updateMonth });
        this._updateDateTable();
    }

    /**
     * 次月を表示する。
     * @param month
     */
    public nextMonth(month: number): void {
        const updateMonth = month !== 12 ? month + 1 : 1;
        this._dateState.update({ month: updateMonth });
        this._updateDateTable();
    }

    /**
     * 翌年を表示する。
     * @param year
     */
    public lastYear(year: number): void {
        this._dateState.update({ year: year - 1 });
        this._updateDateTable();
    }

    /**
     * 去年を表示する。
     * @param year
     */
    public nextYear(year: number): void {
        this._dateState.update({ year: year + 1 });
        this._updateDateTable();
    }

    /**
     * DateTableを更新する。
     * @private
     */
    private _updateDateTable(): void {
        const { year, month, date } = this._dateState.currentValue;
        const convertMonthToZeroStart = this._date.convertMonthToZeroStart(month);
        const yearMonthDate = this._date.getDateFromYearMonthDate({
            year,
            month: convertMonthToZeroStart,
            date,
        });
        this.dataTable = this._dataTable.create(yearMonthDate);
    }
}
