import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from './emp';
 
@Injectable({
  providedIn: 'root',
})
export class EmpService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Emp[]>('http://localhost:3000/employees');
  }
  create(payload: Emp) {
    return this.http.post<Emp>('http://localhost:3000/employees', payload);
  }
  getById(id: number) {
    return this.http.get<Emp>(`http://localhost:3000/employees/${id}`);
   }
    
   update(payload:Emp){
    return this.http.put(`http://localhost:3000/employees/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Emp>(`http://localhost:3000/employees/${id}`);
 }
}