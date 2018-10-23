import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Authentication {

  constructor(
    private http: HttpClient
  ) {}

  public token_id: string;
  public message = new EventEmitter<string>();
  public userObservable = new BehaviorSubject(false);

  public login(username: string, password: string) {
    return this.http.post<any>(`${environment.API}/users/authenticate`, { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser')));
        }

        return user;
      }));
  }

  public logout() {
    sessionStorage.removeItem('currentUser');
    this.setCurrentUser(false);
  }

  public getCurrentUser() {
    return this.userObservable.asObservable();
  }

  public setCurrentUser(data) {
    this.userObservable.next(data);
  }

}
