import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-year-month',
    template: ` <ng-content></ng-content> `,
    styles: [
        `
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `,
    ],
})
export class YearMonthComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
