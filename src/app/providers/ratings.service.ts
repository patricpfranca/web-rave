import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { WR_API } from '../app.api';
import { Rating } from '../shared/models/rating.interface';

@Injectable()
export class RatingsService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public createRatings(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(`${WR_API}/ratings`, rating, { headers: this.headers });
  }

  public findCommentsRating(_idEvent: string) {
    return this.http.get<Rating[]>(`${WR_API}/ratings/${_idEvent}/comments`);
  }
}
