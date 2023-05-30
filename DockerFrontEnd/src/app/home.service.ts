import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  config = {
    ApiUrl: 'https://localhost:4015',
  };

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.config.ApiUrl = data.apiServer.url;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/config.json');
  }

  getData(): Observable<any> {
    return this.http.get(this.config.ApiUrl + '/api/home', {
      responseType: 'text',
    });
  }
}
