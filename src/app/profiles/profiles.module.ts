import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProfilesRoutingModule } from './profiles.routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProfilesComponent } from './profiles.component';
import { UserService } from '../providers/user.service';

@NgModule({
  imports: [
    ProfilesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfilesComponent
  ],
  exports: [],
  providers: [ UserService ]
})
export class ProfilesModule {}
