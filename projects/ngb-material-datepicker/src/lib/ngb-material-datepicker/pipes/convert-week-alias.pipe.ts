import { Pipe, PipeTransform } from '@angular/core';
import { WeekAlias } from '../../types/week';
import { JapaneseWeek } from '../../constants/week-names';

@Pipe({
    name: 'convertWeekAlias',
})
export class ConvertWeekAliasPipe implements PipeTransform {
    /**
     * 曜日エイリアスから日本の曜日を取得する
     * @param weekAlias
     */
    transform(weekAlias: WeekAlias): string {
        return JapaneseWeek[weekAlias];
    }
}
