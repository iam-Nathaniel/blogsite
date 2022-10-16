import { Component, OnInit } from '@angular/core';
import { NewsComponent } from '../news/news.component';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  constructor(private newApi: NewsapiserviceService) {}

  ngOnInit(): void {
    this.gen_News();
  }

  newsList: any = [];

  gen_News() {
    this.newApi.g_news().subscribe((response) => {
      console.log(response);
      this.newsList = response.articles;
    });
  }
}
