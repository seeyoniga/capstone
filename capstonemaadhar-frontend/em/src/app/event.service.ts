import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Event[]>('http://localhost:3000/events');
  }
  create(payload: Event) {
    return this.http.post<Event>('http://localhost:3000/events', payload);
  }
  getById(id: number) {
    return this.http.get<Event>(`http://localhost:3000/events/${id}`);
   }
    
   update(payload:Event){
    return this.http.put(`http://localhost:3000/events/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Event>(`http://localhost:3000/events/${id}`);
 }
}