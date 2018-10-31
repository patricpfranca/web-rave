import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Authentication } from '../../../providers/authentication.service';
import { EventsService } from '../../../providers/events.service';
import { Event } from '../../models/event.interface';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ EventsService ]
})
export class NavbarComponent implements OnInit {

  faUser = faUser;
  public events: Observable<Event[]>;
  public currentUser;

  constructor(
    private authentication: Authentication,
    private eventsService: EventsService) { }

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    } else {
      this.authentication.getCurrentUser()
        .subscribe((user) => {
          if (user) {
            this.currentUser = user;
          }
        });
    }
  }

  public searchItems(text: string): void {
    // this.eventsService.searchTerm.next(text);
    this.events = this.eventsService.searchEvents(text);
    console.log(this.events);
  }

  public logout(): void {
    this.authentication.logout();
  }

  public search(textSearch: string): void {
    this.eventsService.searchEvents(textSearch);
  }

}
