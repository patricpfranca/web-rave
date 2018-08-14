import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule, NgbDatepickerModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DescriptionReduce } from './pipes/description-reduce.pipe';

import { CustomDatepickerI18n, I18n } from './config/ng-bootstrap-datepicker-i18n';
import { NgbDateParserFormatterEsMX } from './config/ng-bootstrap.date-parser-formatter';

const modules = [
  RouterModule,
  CommonModule,
  FontAwesomeModule,
  NgbDatepickerModule
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
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateParserFormatter, useClass: NgbDateParserFormatterEsMX }
  ]
})
export class SharedModule { }
