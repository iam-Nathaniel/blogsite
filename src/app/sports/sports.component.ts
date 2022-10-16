import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private newsApi: NewsapiserviceService) { }

  ngOnInit(): void {

    this.gen_News();
  }

  newsList:any = []

  gen_News(){
    this.newsApi.g_news().subscribe((response)=>{
      console.log(response);
      this.newsList = response.articles;
    })
  }

}
