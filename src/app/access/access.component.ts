import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  public register = false;

  constructor() { }

  ngOnInit() {
  }

  public showPanel(event: string): void {
    this.register = event === 'register' ? true : false;
  }

}
