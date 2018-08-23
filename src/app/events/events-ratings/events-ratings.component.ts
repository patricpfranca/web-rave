import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RatingsService } from '../../providers/ratings.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-ratings',
  templateUrl: './events-ratings.component.html',
  styleUrls: ['./events-ratings.component.css']
})
export class EventsRatingsComponent implements OnInit {

  public ratingsForm = new FormGroup({
    ratings: new FormGroup({
      pub: new FormControl(null),
      local: new FormControl(null),
      food: new FormControl(null),
      lineup: new FormControl(null),
      stall: new FormControl(null),
      lighting: new FormControl(null),
      bathroom: new FormControl(null),
      security: new FormControl(null),
      cleaning: new FormControl(null)
    }),
    comment: new FormControl(null)
  });
  public idEvent = '';

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private ratingsService: RatingsService
  ) { }

  ngOnInit() {
    this.idEvent = this.route.snapshot.params._id;
  }

  openModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  public ratingsCreate() {
    const body = this.ratingsForm.getRawValue();
    body._eventId = this.idEvent;
    this.ratingsService.createRatings(body);
  }

}
