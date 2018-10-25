import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { EventsService } from '../../providers/events.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventsDetailsComponent implements OnInit {

  public event: Event;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.eventsService.EventsById(params._id).subscribe((res: Event) => {
        this.event = res;
      });
    });
  }

}
