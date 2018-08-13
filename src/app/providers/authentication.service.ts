import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../shared/user.model';

import * as firebase from 'firebase';

@Injectable()
export class Authentication {

  constructor(private router: Router) {}

  public token_id: string;
  public message = new EventEmitter<string>();

  public createUser(user: User): void {

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((res: any) => {
        delete user.password;

        firebase.database().ref('user/' + firebase.auth().currentUser.uid)
          .set(user);
      })
      .catch((error: Error) => {
        this.message.emit(error.message);
      });

  }

  public authenticate(email: string, password: string): void {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        firebase.auth().currentUser.getIdToken()
          .then((idToken: string) => {
            this.token_id = idToken;
            localStorage.setItem('idToken', idToken);
            this.router.navigate(['/home']);
          });
      })
      .catch((error: Error) => {
        this.message.emit(error.message);
      });
  }

  public authenticated(): boolean {

    if (this.token_id === undefined && localStorage.getItem('idToken') != null) {
      this.token_id = localStorage.getItem('idToken');
    }

    if (this.token_id === undefined) {
      this.router.navigate(['/']);
    }

    return this.token_id !== undefined;
  }

  public logout(): void {

    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('idToken');
        this.token_id = undefined;
      });

  }

}
