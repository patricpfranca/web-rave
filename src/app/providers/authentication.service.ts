import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class Authentication {

  constructor(
    private http: HttpClient
  ) {}

  public token_id: string;
  public message = new EventEmitter<string>();

  public login(username: string, password: string) {
    return this.http.post<any>(`${environment.API}/users/authenticate`, { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

}
