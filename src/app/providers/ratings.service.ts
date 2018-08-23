import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { WR_API } from '../app.api';

@Injectable()
export class RatingsService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public createRatings(rating) {
    console.log(rating);
    return this.http.post(`${WR_API}/ratings`, rating, { headers: this.headers });
  }
}
