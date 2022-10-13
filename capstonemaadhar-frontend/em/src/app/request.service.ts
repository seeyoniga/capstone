import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from './request';
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Request[]>('http://localhost:3000/requests');
  }
  create(payload: Request) {
    return this.http.post<Request>('http://localhost:3000/requests', payload);
  }
  getById(id: number) {
    return this.http.get<Request>(`http://localhost:3000/requests/${id}`);
   }
   update(payload:Request){
    return this.http.put(`http://localhost:3000/requests/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Request>(`http://localhost:3000/requests/${id}`);
 }
}