import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Authentication } from '../../providers/authentication.service';

import { User } from '../../shared/models/user.model';
import { UserService } from '../../providers/user.service';
import { AlertService } from '../../providers/alert.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() public showPanel: EventEmitter<string> = new EventEmitter<string>();
  public message: string;
  public form: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(
    private authentication: Authentication,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.authentication.message.subscribe(
      (res) => { this.message = res; }
    );

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public showPanelLogin(): void {
    this.showPanel.emit('login');
  }

  public get f() { return this.form.controls; }

  public registerUser() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.sucess('Registration successfull', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
