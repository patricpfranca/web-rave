import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../providers/auth-guard.service';
import { ProfilesComponent } from './profiles.component';

const profilesRoutes: Routes = [
  { path: 'profile', component: ProfilesComponent, data: { title: 'Profile' }, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(profilesRoutes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
