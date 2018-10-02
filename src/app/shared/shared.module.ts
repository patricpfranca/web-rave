import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  NgbModule,
  NgbDatepickerModule,
  NgbDateParserFormatter,
  NgbDatepickerI18n,
  NgbTabsetModule,
  NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DescriptionReduce } from './pipes/description-reduce.pipe';

import { CustomDatepickerI18n, I18n } from './config/ng-bootstrap-datepicker-i18n';
import { NgbDateParserFormatterEsMX } from './config/ng-bootstrap.date-parser-formatter';

import { BarRatingModule } from 'ngx-bar-rating';
import { AgmCoreModule } from '@agm/core';
import { UserService } from '../providers/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

const modules = [
  RouterModule,
  CommonModule,
  FontAwesomeModule,
  NgbDatepickerModule,
  BarRatingModule,
  NgbTabsetModule,
  NgbTooltipModule,
  AgmCoreModule
];

const components = [
  TitleComponent,
  NavbarComponent
];

const pipes = [
  DescriptionReduce
];

@NgModule({
  imports: [
    ...modules,
    NgbModule.forRoot()
  ],
  declarations: [
    ...components,
    ...pipes
  ],
  exports: [
    ...components,
    ...modules,
    ...pipes
  ],
  providers: [
    UserService,
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateParserFormatter, useClass: NgbDateParserFormatterEsMX },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class SharedModule { }
