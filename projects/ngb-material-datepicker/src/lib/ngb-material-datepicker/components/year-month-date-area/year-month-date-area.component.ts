import { Component, Input, OnInit } from '@angular/core';
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

    public onLastMonth() {}
    public onNextMonth() {}
    public onLastYear() {}
    public onNextYear() {}
}
