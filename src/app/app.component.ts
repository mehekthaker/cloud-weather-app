import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weather-proj';
  today = new Date();
  todayStr = '';
  constructor(){
    this.todayStr = formatDate(this.today, 'EEEE, MMMM d, y', 'en-US', '+0530');
  }
}
