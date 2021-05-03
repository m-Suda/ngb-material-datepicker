import { Pipe, PipeTransform } from '@angular/core';
import { DateWrapper } from '../../libs/date-wrapper';

@Pipe({
    name: 'fillDateWithZeros',
})
export class FillDateWithZerosPipe implements PipeTransform {
    /**
     * 数値の日付を2桁の0埋めをした文字列日付に変換する
     * @param {number} date
     * @return {string}
     */
    transform(date: number): string {
        if (date === 0) {
            return '';
        }
        return DateWrapper.fillWithZeros(date);
    }
}
