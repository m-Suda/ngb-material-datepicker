import { Component, Input, OnInit } from '@angular/core';
import { Week } from '../../../types/week';

@Component({
    selector: 'lib-week',
    template: ` <span class="days" *ngFor="let day of displayWeek">{{ day }}</span> `,
    styles: [
        `
            :host {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #757575;
            }
        `,
        `
            .days {
                width: calc(100% / 7);
                text-align: center;
            }
        `,
    ],
})
export class WeekComponent implements OnInit {
    @Input() displayWeek: Week = ['', '', '', '', '', '', ''];

    constructor() {}

    ngOnInit(): void {}
}
