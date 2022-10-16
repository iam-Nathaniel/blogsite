import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
