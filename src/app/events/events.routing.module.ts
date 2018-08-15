import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';

import { AuthGuard } from '../providers/auth-guard.service';

const registerRoutes: Routes = [
  { path: 'events', component: EventsComponent, data: { title: 'Eventos' }, canActivate: [ AuthGuard ] },
  { path: 'events/:_id', component: EventsDetailsComponent, data: { title: 'Detalhes de evento' }, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(registerRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
