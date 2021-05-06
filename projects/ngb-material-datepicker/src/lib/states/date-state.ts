import { Injectable } from '@angular/core';
import { YearMonthDateDay } from '../types/date';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeekAlias } from '../types/week';

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

    constructor() {}

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
     * DateStateを更新する。
     * @param updateValue
     */
    public update(updateValue: UpdateDateState): void {
        const currentValue = this.currentValue;
        this._dateState.next({ ...currentValue, ...updateValue });
    }
}
