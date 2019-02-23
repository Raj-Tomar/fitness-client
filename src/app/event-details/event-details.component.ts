import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';
import { EventListComponent } from '../event-list/event-list.component';
import { Event } from '../event';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() event: Event;

  constructor(private eventService: EventService, private eventListComponent: EventListComponent) { }

  ngOnInit() {
  }

}
