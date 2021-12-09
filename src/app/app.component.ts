import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherParams } from './weather-params';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'weather-proj';
  today = new Date();
  todayStr = '';

  jsonData : WeatherParams = {'temperature': '0.0', 'brightness': '0.0', 'pressure': '0.0', 'humidity': '0.0'}
  //setWeatherData = {'temperature': '19.12', 'brightness': '0.04', 'pressure': '20.88', 'humidity': '84.1'}

  constructor(private apiService: ApiService){
    this.todayStr = formatDate(this.today, 'EEEE, MMMM d, y', 'en-US', '-0600');
  }

  ngOnInit(): void{
    this.apiService.getResponsePayload().subscribe( res => {
      console.log(res);
      this.jsonData = res;
    });
  }

  // setWeatherParams(): void{
  //   const setJsonData = {temperature: this.setWeatherData.temperature, brightness: this.setWeatherData.brightness, pressure: this.setWeatherData.pressure, humidity: this.setWeatherData.humidity};
  //   //const data = JSON.stringify(setJsonData);
  //   this.apiService.postResponse(setJsonData);
  // }
}
