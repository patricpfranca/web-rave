import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { EventsService } from '../../providers/events.service';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css'],
  providers: [ DatePipe ]
})
export class EventsCreateComponent implements OnInit {

  locale = 'pt-br';
  locales = listLocales();

  public bsConfig: Partial<BsDatepickerConfig>;
  data = Date.now();

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
    private datePipe: DatePipe,
    private eventsService: EventsService,
    private localeService: BsLocaleService,
    private modalService: NgbModal
  ) {
    this.bsConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      minDate: new Date(this.data),
      dateInputFormat: 'DD/MM/YYYY'
    });
    this.localeService.use(this.locale);
  }

  ngOnInit() {}

  public createEvent() {
    this.eventsService.createEvent({
      title: this.form.value.title,
      dateStart: this.datePipe.transform(this.form.value.dateStart, 'yyyy-MM-dd'),
      dateEnd: this.datePipe.transform(this.form.value.dateEnd, 'yyyy-MM-dd'),
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

  private getDismissReason(reason): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public openVerticallyCentered(content) {
    this.modalRef = this.modalService.open(content, { centered: true });
  }

}
