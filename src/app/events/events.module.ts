import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsCreateComponent } from './events-create/events-create.component';

import { EventsRoutingModule } from './events.routing.module';
import { SharedModule } from '../shared/shared.module';

import { EventsService } from '../providers/events.service';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', deLocale);

@NgModule({
  imports: [
    EventsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    EventsComponent,
    EventsDetailsComponent,
    EventsCreateComponent
  ],
  exports: [],
  providers: [ EventsService ]
})
export class EventsModule {}
