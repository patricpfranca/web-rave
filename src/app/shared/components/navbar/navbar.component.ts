import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Authentication } from '../../../providers/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faUser = faUser;

  constructor(private authentication: Authentication) { }

  ngOnInit() {
  }

  public logout(): void {
    this.authentication.logout();
  }

  public search(textSearch: string): void {
    console.log(textSearch);
  }

}
