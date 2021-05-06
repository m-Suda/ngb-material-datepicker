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
     * @param {undefined|Date} date
     * @return {DateTable}
     */
    public create(date?: Date): DateTable {
        if (date == null) {
            return calendarize(new Date());
        }
        return calendarize(date);
    }
}
