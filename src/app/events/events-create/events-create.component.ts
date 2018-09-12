import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';

import {
  NgbModal,
  NgbDatepickerI18n,
  NgbDateParserFormatter,
  NgbDateAdapter,
  NgbDateNativeAdapter
} from '@ng-bootstrap/ng-bootstrap';

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
  public form = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.maxLength(250)]),
    dateStart: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    dateEnd: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    description: new FormControl(null),
    organizer: new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required])
    }),
    socials: new FormGroup({
      facebook: new FormControl(null),
      instagram: new FormControl(null)
    })
  });
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(
    private eventsService: EventsService,
    private modalService: NgbModal,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    // set google maps defaults
    this.zoom = 10;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  public createEvent() {
    const body = this.form.value;
    console.log(body);
    this.eventsService.createEvent(body).subscribe(() => {
      this.form.reset();
      this.modalRef.close();
    }, (error) => {
      console.log(error);
    });
  }

  public imageUpload(event: Event): void {
    this.image = (<HTMLInputElement>event.target).files;
  }

  open(content) {
    this.modalRef = this.modalService.open(content, { size: 'lg' });
  }

}
