import { Injectable } from '@angular/core';
import { getDate, getDay, getMonth, getYear } from 'date-fns';
import { YearMonthDate, YearMonthDateDay } from '../types/date';
import { WeekAlias } from '../types/week';
import { format } from 'date-fns';

@Injectable({
    providedIn: 'root',
})
export class DateService {
    constructor() {}

    /**
     * 日付を2桁の0埋めをする。
     * @param date
     */
    public fillWithZeros(date: number): string {
        const dateString = '' + date;
        return dateString.padStart(2, '0');
    }

    /**
     * 曜日エイリアスを取得する。
     * @param date
     */
    public getDay(date: Date): WeekAlias {
        const { day } = this._getYearMonthDateDay(date);
        return day;
    }

    /**
     * 年月日, 曜日を取得する。
     * @param {undefined|Date} date
     * @return {YearMonthDateDay}
     */
    public getYearMonthDateDay(date?: Date): YearMonthDateDay {
        if (date == null) {
            return this._getYearMonthDateDay(new Date());
        }

        return this._getYearMonthDateDay(date);
    }

    /**
     * 年月日からDateオブジェクトを作成する。
     * @param source
     */
    public getDateFromYearMonthDate(source: YearMonthDate): Date {
        const { year, month: zeroBeginningMonth, date } = source;
        return new Date(year, zeroBeginningMonth, date);
    }

    /**
     * 月を0始まりの形式に変換する。
     * ※1月であれば0, 12月であれば11に変換する。
     * @param month
     */
    public convertMonthToZeroStart(month: number): number {
        if (month === 0) {
            return 1;
        }
        if (month === 12) {
            return 11;
        }
        return month - 1;
    }

    /**
     * 年月日を指定された形式の日付文字列にする。
     * @param dateFormat
     * @param source
     */
    public format(dateFormat: string, source: YearMonthDate): string {
        const { year, month: zeroBeginningMonth, date } = source;
        if (year == null || zeroBeginningMonth == null || date == null) {
            throw new Error('Source value is null.');
        }

        return format(new Date(year, zeroBeginningMonth, date), dateFormat);
    }

    /**
     * 年月日, 曜日を取得する。
     * @param {Date} sourceDate
     * @private
     * @return {YearMonthDateDay}
     */
    private _getYearMonthDateDay(sourceDate: Date): YearMonthDateDay {
        const year = getYear(sourceDate);
        // 月は0から始まるため
        const month = getMonth(sourceDate) + 1;
        const date = getDate(sourceDate);
        const day = getDay(sourceDate);

        return { year, month, date, day };
    }
}
