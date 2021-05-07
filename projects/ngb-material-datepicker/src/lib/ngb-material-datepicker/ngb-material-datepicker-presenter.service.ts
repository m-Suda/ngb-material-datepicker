import { Injectable } from '@angular/core';
import { A11yColor } from '../libs/a11y-color';

@Injectable({
    providedIn: 'root',
})
export class NgbMaterialDatepickerPresenterService {
    constructor() {}

    /**
     * 日付の背景色を初期化する
     * @param dateColor
     */
    public initializeDateColor(dateColor?: string): string {
        if (dateColor == null) {
            return '#689F37';
        }
        if (!A11yColor.validColorCode(dateColor)) {
            return '#689F37';
        }
        return dateColor;
    }

    /**
     * ヘッダー の背景色を初期化する
     * @param headerColor
     */
    public initializeHeaderColor(headerColor?: string): string {
        if (headerColor == null) {
            return '#8CC24A';
        }
        if (!A11yColor.validColorCode(headerColor)) {
            return '#8CC24A';
        }
        return headerColor;
    }

    /**
     * 文字色を取得する。文字色が指定されていない場合は、背景色とのコントラスト比から適切な文字色を取得する。
     * @param backgroundColor
     * @param textColor
     */
    public getTextColor(backgroundColor: string, textColor?: string): string {
        if (textColor == null) {
            return A11yColor.getTextColor(backgroundColor);
        }
        if (!A11yColor.validColorCode(textColor)) {
            throw new Error('Background Color is invalid.');
        }
        return textColor;
    }
}
