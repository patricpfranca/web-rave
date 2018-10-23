import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../shared/models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get<User[]>(`${environment.API}/users`);
  }

  public getById(id: string) {
    return this.http.get(`${environment.API}/users/` + id);
  }

  public register(user: User) {
    return this.http.post(`${environment.API}/users/register`, user);
  }

  public update(user: User) {
    return this.http.put(`${environment.API}/users/` + user.id, user);
  }

  public delete(id: string) {
    return this.http.delete(`${environment.API}/users/` + id);
  }

}
