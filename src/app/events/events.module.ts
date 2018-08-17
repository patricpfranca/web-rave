import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsCreateComponent } from './events-create/events-create.component';
import { EventsRatingsComponent } from './events-ratings/events-ratings.component';

import { EventsRoutingModule } from './events.routing.module';
import { SharedModule } from '../shared/shared.module';

import { EventsService } from '../providers/events.service';
import { RatingsService } from '../providers/ratings.service';

@NgModule({
  imports: [
    EventsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsComponent,
    EventsDetailsComponent,
    EventsCreateComponent,
    EventsRatingsComponent
  ],
  exports: [],
  providers: [ EventsService, RatingsService ]
})
export class EventsModule {}
