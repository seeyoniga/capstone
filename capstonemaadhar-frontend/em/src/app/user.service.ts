import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  create(payload: User) {
    return this.http.post<User>('http://localhost:3000/users', payload);
  }
  getById(id: number) {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
   }
   update(payload:User){
    return this.http.put(`http://localhost:3000/users/${payload.id}`,payload);
   }
}