import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Authentication } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authentication: Authentication) {}

  canActivate(): boolean {
    return this.authentication.authenticated();
  }

}
