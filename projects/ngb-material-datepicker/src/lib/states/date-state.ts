import { Injectable } from '@angular/core';
import { YearMonthDateDay } from '../types/date';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeekAlias } from '../types/week';
import { DateService } from '../libs/date.service';

const DEFAULT_VALUE: YearMonthDateDay = {
    year: 0,
    month: 0,
    date: 0,
    day: 0,
};

export type UpdateDateState = {
    year?: number;
    month?: number;
    date?: number;
    day?: WeekAlias;
};

@Injectable({
    providedIn: 'root',
})
export class DateState {
    private _dateState: BehaviorSubject<YearMonthDateDay> = new BehaviorSubject<YearMonthDateDay>(
        DEFAULT_VALUE
    );

    public dateState$: Observable<YearMonthDateDay> = this._dateState.asObservable();

    constructor(private _date: DateService) {}

    /**
     * 現在の値を取得する。
     */
    public get currentValue(): YearMonthDateDay {
        const currentValue = this._dateState.getValue();

        if (currentValue == null) {
            throw new Error('DateState currentValue is null.');
        }
        return currentValue;
    }

    /**
     * 現在の日付状態から日付文字列を取得する。
     * @param dateFormat
     */
    public getDateStringFromCurrentState(dateFormat: string = 'yyyy-MM-dd HH:mm:ss'): string {
        const { year, month, date } = this.currentValue;
        const monthBeginningZero = this._date.convertMonthToZeroStart(month);
        return this._date.format(dateFormat, { year, month: monthBeginningZero, date });
    }

    /**
     * DateStateを更新する。
     * @param updateValue
     */
    public update(updateValue: UpdateDateState): void {
        const currentValue = this.currentValue;
        this._dateState.next({ ...currentValue, ...updateValue });
    }
}
