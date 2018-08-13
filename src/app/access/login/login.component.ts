import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Authentication } from '../../providers/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();
  public message: string;

  public form: FormGroup = new FormGroup({
    'email': new FormControl(null, [
      Validators.required, Validators.email
    ]),
    'password': new FormControl(null, [ Validators.required ])
  });

  constructor(private authentication: Authentication) { }

  ngOnInit() {
    this.authentication.message.subscribe(
      (res) => { this.message = res; }
    );
  }

  public showPanelRegister(): void {
    this.showPanel.emit('register');
  }

  public authenticate(): void {
    this.authentication.authenticate(
      this.form.value.email,
      this.form.value.password
    );
  }

}
