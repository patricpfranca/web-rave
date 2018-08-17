import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgbModal, NgbDatepickerI18n, NgbDateParserFormatter, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

import { EventsService } from '../../providers/events.service';

import { CustomDatepickerI18n } from '../../shared/config/ng-bootstrap-datepicker-i18n';
import { NgbDateParserFormatterEsMX } from '../../shared/config/ng-bootstrap.date-parser-formatter';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css'],
  providers: [
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateParserFormatter, useClass: NgbDateParserFormatterEsMX },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
  ]
})
export class EventsCreateComponent implements OnInit {

  public idUser: string;
  private image: any;
  public modalRef: any;
  public form: FormGroup = new FormGroup({
    'title': new FormControl(null, [
      Validators.required, Validators.maxLength(100)
    ]), 'dateStart': new FormControl(null, [
      Validators.required, Validators.maxLength(11)
    ]), 'dateEnd': new FormControl(null, [
      Validators.required, Validators.maxLength(11)
    ]), 'description': new FormControl(null)
  });

  constructor(
    private eventsService: EventsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {}

  public createEvent() {
    this.eventsService.createEvent({
      title: this.form.value.title,
      dateStart: this.form.value.dateStart,
      dateEnd: this.form.value.dateEnd,
      description: this.form.value.description
    }).subscribe(() => {
      this.form.reset();
      this.modalRef.close();
    }, (error) => {
      console.log(error);
    });
  }

  public imageUpload(event: Event): void {
    this.image = (<HTMLInputElement>event.target).files;
  }

  public openVerticallyCentered(content) {
    this.modalRef = this.modalService.open(content, { centered: true });
  }

}
