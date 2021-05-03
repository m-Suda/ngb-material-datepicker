import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isSelectedDate',
})
export class IsSelectedDatePipe implements PipeTransform {
    /**
     * この日付は選択されている。
     * @param thisDate
     * @param selectedDate
     */
    transform(thisDate: number, selectedDate: number): boolean {
        if (thisDate === 0) {
            return false;
        }
        return thisDate === selectedDate;
    }
}
