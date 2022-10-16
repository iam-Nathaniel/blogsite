import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newApi: NewsapiserviceService) { }

  ngOnInit(): void {

    this.gen_News();
  }

  newsList:any = []

  gen_News(){
    this.newApi.g_news().subscribe((response)=>{
      console.log(response);
      this.newsList = response.articles;
    })
  }

}
