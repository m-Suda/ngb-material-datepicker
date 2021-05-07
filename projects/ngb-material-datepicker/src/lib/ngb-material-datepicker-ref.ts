import { Observable, Subject } from 'rxjs';

export class NgbMaterialDatepickerRef {
    /**
     * 閉じた時に値を渡すためのSubject
     * @private
     */
    private readonly _afterClose = new Subject<string>();

    /**
     * 閉じた時の値を受け取るためのObservable
     */
    public afterClose: Observable<string | undefined> = this._afterClose.asObservable();

    constructor() {}

    /**
     * Datepickerを閉じる。
     * @param result
     */
    public close(result?: string) {
        this._afterClose.next(result);
    }
}
