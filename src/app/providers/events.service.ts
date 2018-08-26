import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import { Event } from '../shared/models/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WR_API } from '../app.api';

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
    return this.http.post<Event>(`${WR_API}/events`, event, { headers: this.headers });
  }

  public updateEvent(event: any, key: string) {
    this.db.list('events').update(key, event);
  }

  public saveImage(image: any, key: string) {
    return this.st.ref(`images/${key}`).put(image[0]);
  }

  public EventsById(id: string) {
    return this.http.get(`${WR_API}/events/${id}`);
  }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${WR_API}/events`);
  }

}
