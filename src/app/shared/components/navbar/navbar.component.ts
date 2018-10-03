import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Authentication } from '../../../providers/authentication.service';
import { EventsService } from '../../../providers/events.service';
import { Event } from '../../models/event.interface';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faUser = faUser;
  public events: Observable<Event[]>;

  constructor(
    private authentication: Authentication,
    private eventsService: EventsService) { }

  ngOnInit() {
  }

  public logout(): void {
    this.authentication.logout();
  }

  public search(textSearch: string): void {
    this.eventsService.searchEvents(textSearch);
  }

}
