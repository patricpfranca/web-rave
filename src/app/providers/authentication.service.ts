import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class Authentication {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  public token_id: string;
  public message = new EventEmitter<string>();

  public login(email: string, password: string) {
    return this.http.post<any>(`${environment.API}/authenticate`, { email: email, password: password })
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
