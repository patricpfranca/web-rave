import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [],
  providers: []
})
export class HomeModule { }
