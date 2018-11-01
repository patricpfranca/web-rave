import { Injectable } from '@angular/core';

import { Event } from '../shared/models/event.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, Subject } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class EventsService {

  public searchTerm = new Subject<string>();
  public imageUrl: string;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) {}

  public createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${environment.API}/events`, event, { headers: this.headers });
  }

  public EventsById(id: string) {
    return this.http.get(`${environment.API}/events/${id}`);
  }

  public getEvents(page: number = 0): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.API}/events?pages=${page}&limit=9`);
  }

  public searchEvents(value: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.API}/events?title=${value}`).pipe(
      retry(10),
      map((result: Event[]) => {
        return result;
      })
    );
  }

}
