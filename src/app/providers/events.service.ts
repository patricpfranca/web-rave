import { Injectable } from '@angular/core';

import { Event } from '../shared/models/event.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class EventsService {

  constructor(
    private http: HttpClient
  ) {}

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  public imageUrl: string;

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
    return this.http.get<Event[]>(`${environment.API}/events?title=${value}`);
  }

}
