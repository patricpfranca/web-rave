import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';

import { Authentication } from './providers/authentication.service';
import { AuthGuard } from './providers/auth-guard.service';

import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { AlertService } from './providers/alert.service';
import { AccessModule } from './access/access.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AccessModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    EventsModule,
    SharedModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.AGM_CORE_KEY,
      libraries: ['places']
    })
  ],
  providers: [
    Authentication,
    AuthGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
