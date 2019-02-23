import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';
 
  constructor(private http: HttpClient) { }
 
  getUser(userId: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
 
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }
 
  updateUer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  // deleteUer(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }
 
  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
 
  deleteUserById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}` , { responseType: 'text' });
  }

}
