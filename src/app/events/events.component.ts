import { Component, OnInit } from '@angular/core';

import { EventsService } from '../providers/events.service';
import { Event } from '../shared/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Event;

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.getEventsAll();
  }

  public getEventsAll() {
    this.eventsService.getEvents()
      .subscribe((events: Event) => {
        this.events = events;
      });
  }

}
