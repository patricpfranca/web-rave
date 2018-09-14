import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import { Event } from '../shared/models/event.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import * as aws from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

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
  public folder = 'events';
  public image = '';
  private bucket = new S3({
    accessKeyId: environment.awsBucket.accessKeyId,
    secretAccessKey: environment.awsBucket.secretAccessKey,
    region: environment.awsBucket.region
  });


  public createEvent(event: Event): Observable<Event> {
    // this.uploadImage(event.imagePath);
    console.log(event);
    return this.http.post<Event>(`${environment.API}/events`, event, { headers: this.headers });
  }

  public uploadImage(file) {
    const params = {
      Bucket: 'web-rave',
      Key: file.name,
      Body: file
    };

    this.bucket.upload(params, (err, data) => {
      if (err) {
        return false;
      } else {
        this.image = data.location;
        return true;
      }
    });
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

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.API}/events`);
  }

}
