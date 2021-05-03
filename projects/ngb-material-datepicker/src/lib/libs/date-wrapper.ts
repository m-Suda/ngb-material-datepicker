export class DateWrapper {
    /**
     * 日付を2桁の0埋めをする。
     * @param date
     */
    public static fillWithZeros(date: number): string {
        const dateString = '' + date;
        return dateString.padStart(2, '0');
    }
}
