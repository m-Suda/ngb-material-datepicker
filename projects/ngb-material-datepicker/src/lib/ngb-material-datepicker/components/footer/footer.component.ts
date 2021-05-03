import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'lib-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    @Output() onClickCancel: EventEmitter<void> = new EventEmitter<void>();
    @Output() onClickOk: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    public clickCancel() {
        this.onClickCancel.emit();
    }

    public clickOk() {
        this.onClickOk.emit();
    }
}
