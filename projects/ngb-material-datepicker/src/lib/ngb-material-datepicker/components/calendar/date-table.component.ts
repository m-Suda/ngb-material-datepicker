import {
    AfterContentInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { DateTable } from '../../../types/date-table';
import { Week } from '../../../types/week';

@Component({
    selector: 'lib-date-table',
    templateUrl: './date-table.component.html',
    styleUrls: ['./date-table.component.scss'],
})
export class DateTableComponent implements AfterContentInit {
    @Input() displayWeek: Week = ['', '', '', '', '', '', ''];
    @Input() dateTable: DateTable = [];
    @Input() selectedDate: number = 0;
    @Input() selectedBackgroundColor: string = '#8cc24a';
    @Input() selectedTextColor: string = '#FFFFFF';

    @Output() onSelectDate: EventEmitter<number> = new EventEmitter<number>();

    constructor(private thisEleRef: ElementRef) {}

    ngAfterContentInit() {
        this.updateSelectedColor();
    }

    public selectDate(date: number) {
        this.onSelectDate.emit(date);
    }

    private updateSelectedColor() {
        this.thisEleRef.nativeElement.style.setProperty(
            '--selected-background-color',
            this.selectedBackgroundColor
        );
        this.thisEleRef.nativeElement.style.setProperty('--selected-color', this.selectedTextColor);
    }
}
