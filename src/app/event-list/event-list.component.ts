import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Observable<Event[]>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.events = this.eventService.getEventList();
  }

}
