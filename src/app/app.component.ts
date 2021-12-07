import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherParams } from './weather-params';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weather-proj';
  today = new Date();
  todayStr = '';
  jsonData : WeatherParams = {'temperature': '', 'brightness': '', 'pressure': '', 'humidity': ''};


  constructor(private apiService: ApiService){
    this.todayStr = formatDate(this.today, 'EEEE, MMMM d, y', 'en-US', '+0530');
  }

  getResponse(): void{
    this.apiService.getResponsePayload().subscribe( res => {
      console.log(res);
      this.jsonData = res;
    });
  }
}
