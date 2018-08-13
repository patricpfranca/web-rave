import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DescriptionReduce } from './pipes/description-reduce.pipe';

const modules = [
  RouterModule,
  CommonModule,
  FontAwesomeModule
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
    ...modules
  ],
  declarations: [
    ...components,
    ...pipes
  ],
  exports: [
    ...components,
    ...modules,
    ...pipes
  ]
})
export class SharedModule { }
