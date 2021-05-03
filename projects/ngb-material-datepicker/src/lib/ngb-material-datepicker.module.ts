import { NgModule } from '@angular/core';
import { NgbMaterialDatepickerComponent } from './ngb-material-datepicker/ngb-material-datepicker.component';
import { NgbMaterialDatepickerOverlayComponent } from './ngb-material-datepicker-overlay/ngb-material-datepicker-overlay.component';
import { HeaderComponent } from './ngb-material-datepicker/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { YearMonthDateAreaComponent } from './ngb-material-datepicker/components/year-month-date-area/year-month-date-area.component';
import { SelectMonthComponent } from './ngb-material-datepicker/components/year-month-date-area/select-month.component';
import { SelectYearComponent } from './ngb-material-datepicker/components/year-month-date-area/select-year.component';
import { SelectDateComponent } from './ngb-material-datepicker/components/year-month-date-area/select-date.component';
import { DateTableComponent } from './ngb-material-datepicker/components/calendar/date-table.component';
import { CalendarComponent } from './ngb-material-datepicker/components/calendar/calendar.component';
import { YearMonthComponent } from './ngb-material-datepicker/components/calendar/year-month.component';
import { WeekComponent } from './ngb-material-datepicker/components/calendar/week.component';
import { FillDateWithZerosPipe } from './ngb-material-datepicker/pipes/fill-date-with-zeros.pipe';
import { IsSelectedDatePipe } from './ngb-material-datepicker/components/calendar/is-selected-date.pipe';
import { FooterComponent } from './ngb-material-datepicker/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { ConvertWeekAliasPipe } from './ngb-material-datepicker/pipes/convert-week-alias.pipe';

@NgModule({
    declarations: [
        NgbMaterialDatepickerComponent,
        NgbMaterialDatepickerOverlayComponent,
        HeaderComponent,
        YearMonthDateAreaComponent,
        SelectMonthComponent,
        SelectYearComponent,
        SelectDateComponent,
        DateTableComponent,
        CalendarComponent,
        YearMonthComponent,
        WeekComponent,
        FillDateWithZerosPipe,
        IsSelectedDatePipe,
        FooterComponent,
        ConvertWeekAliasPipe,
    ],
    imports: [CommonModule, MatIconModule, MatButtonModule],
    exports: [],
})
export class NgbMaterialDatepickerModule {}
