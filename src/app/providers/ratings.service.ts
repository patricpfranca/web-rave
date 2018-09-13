import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Rating } from '../shared/models/rating.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class RatingsService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public createRatings(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(`${environment.API}/ratings`, rating, { headers: this.headers });
  }

  public findCommentsRating(_idEvent: string) {
    return this.http.get<Rating[]>(`${environment.API}/ratings/${_idEvent}/comments`);
  }
}
