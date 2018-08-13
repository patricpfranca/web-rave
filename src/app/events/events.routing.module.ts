import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';

import { AuthGuard } from '../providers/auth-guard.service';

const registerRoutes: Routes = [
  { path: 'events', component: EventsComponent, canActivate: [ AuthGuard ], data: { title: 'Eventos' } },
  { path: 'events/:_id', component: EventsDetailsComponent, canActivate: [ AuthGuard ], data: { title: 'Detalhes de evento' } }
];

@NgModule({
  imports: [RouterModule.forChild(registerRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
