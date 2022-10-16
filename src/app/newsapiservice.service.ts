import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiserviceService {
  constructor(private http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/everything?q=tesla&from=2022-09-16&sortBy=publishedAt&apiKey=d7e70ecbafb94a599ce0f7a7d1fdc86e';

  g_news(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
}
