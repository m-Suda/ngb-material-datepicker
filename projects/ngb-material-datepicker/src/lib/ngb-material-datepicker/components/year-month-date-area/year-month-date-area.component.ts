import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorStyle } from '../../../types/color-style';

@Component({
    selector: 'lib-year-month-date-area',
    templateUrl: './year-month-date-area.component.html',
    styleUrls: ['./year-month-date-area.component.scss'],
})
export class YearMonthDateAreaComponent implements OnInit {
    @Input() selectedMonth: number = 0;
    @Input() selectedDate: number = 0;
    @Input() selectedYear: number = 0;

    @Input() backgroundColor: string = '#8CC24A';
    @Input() textColor: string = '#FFFFFF';

    @Output() onLastMonth: EventEmitter<number> = new EventEmitter<number>();
    @Output() onNextMonth: EventEmitter<number> = new EventEmitter<number>();
    @Output() onLastYear: EventEmitter<number> = new EventEmitter<number>();
    @Output() onNextYear: EventEmitter<number> = new EventEmitter<number>();

    public colorStyle: ColorStyle = {
        'background-color': this.backgroundColor,
        color: this.textColor,
    };

    constructor() {}

    ngOnInit(): void {
        this.colorStyle = {
            'background-color': this.backgroundColor,
            color: this.textColor,
        };
    }

    public lastMonth(month: number) {
        this.onLastMonth.emit(month);
    }
    public nextMonth(month: number) {
        this.onNextMonth.emit(month);
    }
    public lastYear(year: number) {
        this.onLastYear.emit(year);
    }
    public nextYear(year: number) {
        this.onNextYear.emit(year);
    }
}
