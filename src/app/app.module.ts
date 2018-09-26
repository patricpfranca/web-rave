import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';
import { AccessComponent } from './access/access.component';

import { Authentication } from './providers/authentication.service';
import { AuthGuard } from './providers/auth-guard.service';

import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { AlertService } from './providers/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    EventsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.AGM_CORE_KEY,
      libraries: ['places']
    })
  ],
  providers: [ Authentication, AuthGuard, AlertService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
