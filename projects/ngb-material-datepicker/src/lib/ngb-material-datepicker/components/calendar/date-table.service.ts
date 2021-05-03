import { Injectable } from '@angular/core';
import { DateTable } from '../../../types/date-table';
import calendarize from 'calendarize';

@Injectable({
    providedIn: 'root',
})
export class DateTableService {
    constructor() {}

    /**
     * DateTableを作成する。
     * @param date
     * @return {DateTable}
     */
    public create(date: Date): DateTable {
        return calendarize(date);
    }
}
