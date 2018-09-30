import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChildren } from '@angular/core';
import * as anime from 'animejs';

import { EventsService } from '../providers/events.service';
import { Event } from '../shared/models/event.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Event[] = [];
  @ViewChildren('card') card;
  public playing = false;
  private page = 0;
  private total: number;

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.getEventsAll(0);
  }

  public getEventsAll(page: number) {
    this.eventsService.getEvents(page)
      .subscribe((events: Event[]) => {
        this.events = events;
        this.total = this.events.count;
        this.page = page;
      });
  }

  public flipCard(i: number) {
    if (this.playing) {
      return;
    }

    this.playing = true;
    anime({
      targets: this.card._results[i].nativeElement,
      scale: [{value: 1}, {value: 1}, {value: 1, delay: 250}],
      rotateY: {value: '+=180', delay: 200},
      easing: 'easeInOutSine',
      duration: 400,
      complete: () => {
        this.playing = false;
      }
    });

  }

}
