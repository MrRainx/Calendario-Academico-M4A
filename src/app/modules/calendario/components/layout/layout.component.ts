import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  calendarPlugins = [dayGridPlugin]; // important!
  calendarEvents = [
    { title: 'event 1', date: '2019-04-01' }
  ];
  modifyTitle(eventIndex, newTitle) {
    this.calendarEvents[eventIndex].title = newTitle;
  }
  ngOnInit() {
    
  }

}
