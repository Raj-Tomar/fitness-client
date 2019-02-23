import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl = 'http://localhost:8080/events';

  constructor(private http: HttpClient) { }

  getEventList(): Observable<any> {
    return this.http.get(`${this.eventUrl}`);
  }
}
