import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Authentication } from '../../../providers/authentication.service';
import { EventsService } from '../../../providers/events.service';
import { Event } from '../../models/event.interface';

import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

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
  private subjectSearch: Subject<string> = new Subject<string>();
  public event: Event[];

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

    this.events = this.subjectSearch.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if (term.trim() === '') {
          return of<Event[]>([]);
        }
        return this.eventsService.searchEvents(term);
      }), catchError((erro) => {
        return of<Event[]>([]);
      })
    );

    this.events.subscribe((events: Event[]) => {
      this.event = events;
      console.log(this.event);
    });
  }

  public searchItems(text: string): void {
    this.subjectSearch.next(text);
  }

  public logout(): void {
    this.authentication.logout();
  }

}
