import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../providers/events.service';
import { Event } from '../shared/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Observable<Event[]>;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEventsAll();
  }

  public getEventsAll(): void {
    this.eventsService.getEvents()
      .subscribe((events: any) => {
        this.events = events;
      });
  }

  public eventById(event) {
    this.eventsService.EventsById(event).subscribe((res: any) => {
      this.events = res;
    });
  }

}
