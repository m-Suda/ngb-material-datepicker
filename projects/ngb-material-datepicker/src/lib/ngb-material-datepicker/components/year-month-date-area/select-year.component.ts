import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'lib-select-year',
    templateUrl: './select-year.component.html',
    styleUrls: ['./select-year.component.scss'],
})
export class SelectYearComponent implements OnInit {
    @Input() year: number = 0;

    @Output() onClickLastYear: EventEmitter<void> = new EventEmitter();
    @Output() onClickNextYear: EventEmitter<void> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    public lastYear() {
        this.onClickLastYear.emit();
    }

    public nextYear() {
        this.onClickNextYear.emit();
    }
}
