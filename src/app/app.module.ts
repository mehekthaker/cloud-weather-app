import { ApiService } from './api.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TrendsComponent } from './trends/trends.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'weather-trends', component: TrendsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TrendsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
