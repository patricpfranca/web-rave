import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { AuthGuard } from '../providers/auth-guard.service';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ], data: { title: 'Página Inicial' } }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
