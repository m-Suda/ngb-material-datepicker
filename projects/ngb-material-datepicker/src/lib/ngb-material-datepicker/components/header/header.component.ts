import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorStyle } from '../../../types/color-style';
import { WeekAlias } from '../../../types/week';

@Component({
    selector: 'lib-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input() days: WeekAlias = 0;
    @Input() backgroundColor: string = '#689F37';
    @Input() textColor: string = '#FFFFFF';

    @Output() onClickClose: EventEmitter<void> = new EventEmitter<void>();

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

    public clickClose() {
        this.onClickClose.emit();
    }
}
