import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http'

import { NewsapiserviceService } from './newsapiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    BusinessComponent,
    SportsComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
