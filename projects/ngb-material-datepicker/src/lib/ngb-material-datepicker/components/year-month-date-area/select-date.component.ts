import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-select-date',
    template: `<ng-content></ng-content>`,
    styles: [
        `
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 45px;
                height: 45px;
            }
        `,
    ],
})
export class SelectDateComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
