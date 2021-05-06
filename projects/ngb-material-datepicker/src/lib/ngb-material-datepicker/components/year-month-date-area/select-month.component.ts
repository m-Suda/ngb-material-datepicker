import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'lib-select-month',
    templateUrl: './select-month.component.html',
    styleUrls: ['./select-month.component.scss'],
})
export class SelectMonthComponent implements OnInit {
    @Input() month: number = 0;

    @Output() onClickLastMonth: EventEmitter<number> = new EventEmitter();
    @Output() onClickNextMonth: EventEmitter<number> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    public lastMonth() {
        this.onClickLastMonth.emit(this.month);
    }

    public nextMonth() {
        this.onClickNextMonth.emit(this.month);
    }
}
