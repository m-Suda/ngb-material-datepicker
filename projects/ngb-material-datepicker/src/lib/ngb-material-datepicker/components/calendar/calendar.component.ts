import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Week } from '../../../types/week';
import { DateTable } from '../../../types/date-table';

@Component({
    selector: 'lib-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
    @Input() selectedBackgroundColor: string = '';
    @Input() selectedTextColor: string = '';
    @Input() selectedDate: number = 0;
    @Input() selectedMonth: number = 0;
    @Input() selectedYear: number = 0;
    @Input() displayWeek: Week = ['', '', '', '', '', '', ''];
    @Input() dateTable: DateTable = [];

    @Output() onSelectDate: EventEmitter<number> = new EventEmitter<number>();

    constructor() {}

    ngOnInit(): void {}

    public selectDate(date: number) {
        this.onSelectDate.emit(date);
    }
}
