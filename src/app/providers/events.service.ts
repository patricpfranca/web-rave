import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import { Event } from '../shared/models/event.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class EventsService {

  constructor(
    private db: AngularFireDatabase,
    private st: AngularFireStorage,
    private http: HttpClient
  ) {}

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  public imageUrl: string;

  public createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${environment.API}/events`, event, { headers: this.headers });
  }

  public updateEvent(event: any, key: string) {
    this.db.list('events').update(key, event);
  }

  public saveImage(image: any, key: string) {
    return this.st.ref(`images/${key}`).put(image[0]);
  }

  public EventsById(id: string) {
    return this.http.get(`${environment.API}/events/${id}`);
  }

  public getEvents(page: number = 0): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.API}/events?page=${page}`);
  }

}
