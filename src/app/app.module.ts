import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbMaterialDatepickerModule } from '../../projects/ngb-material-datepicker/src/lib/ngb-material-datepicker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgbMaterialDatepickerModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
