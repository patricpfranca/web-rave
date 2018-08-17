import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Authentication } from '../../providers/authentication.service';

import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();
  public message: string;

  public form: FormGroup = new FormGroup({
    'firstname': new FormControl(null, [
      Validators.required, Validators.minLength(3)
    ]),
    'lastname': new FormControl(null, [
      Validators.required, Validators.minLength(3)
    ]),
    'email': new FormControl(null, [
      Validators.required, Validators.email
    ]),
    'password': new FormControl(null, [
      Validators.required, Validators.minLength(6)
    ])
  });

  constructor(private authentication: Authentication) { }

  ngOnInit() {
    this.authentication.message.subscribe(
      (res) => { this.message = res; }
    );
  }

  public showPanelLogin(): void {
    this.showPanel.emit('login');
  }

  public registerUser(): void {
    const user: User = new User(
      this.form.value.firstname,
      this.form.value.lastname,
      this.form.value.email,
      this.form.value.password
    );

    this.authentication.createUser(user);
  }

}
