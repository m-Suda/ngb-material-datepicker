import { hex } from 'wcag-contrast';

export class A11yColor {
    private static readonly COLOR_CODE_PATTERN = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
    public static readonly TEXT_COLOR_BLACK = '#000000';
    public static readonly TEXT_COLOR_WHITE = '#FFFFFF';

    /**
     * 渡されたカラーコードの形式が正しいか判定する。
     * ※#FFFFFFの形式のみ有効。またカラーコードがundefined等のときの判定は、
     * 使用側によって変わるため、ここでは行わない。
     * @param colorCode
     */
    public static validColorCode(colorCode: string): boolean {
        return this.COLOR_CODE_PATTERN.test(colorCode);
    }

    /**
     * 背景色に適した文字色を取得する。
     * @param backgroundColor
     */
    public static getTextColor(backgroundColor: string): string {
        const darkRatio = hex(backgroundColor, this.TEXT_COLOR_BLACK);
        const lightRatio = hex(backgroundColor, this.TEXT_COLOR_WHITE);

        return lightRatio < darkRatio ? this.TEXT_COLOR_BLACK : this.TEXT_COLOR_WHITE;
    }
}
