import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AccessRoutingModule } from './access.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccessRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  exports: [],
  providers: []
})
export class AccessModule {}
