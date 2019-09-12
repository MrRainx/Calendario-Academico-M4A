import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    FullCalendarModule
  ]
})
export class CalendarioModule { }
