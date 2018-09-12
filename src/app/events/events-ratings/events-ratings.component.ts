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
      pub: new FormControl(0),
      local: new FormControl(0),
      food: new FormControl(0),
      lineup: new FormControl(0),
      stall: new FormControl(0),
      lighting: new FormControl(0),
      bathroom: new FormControl(0),
      security: new FormControl(0),
      cleaning: new FormControl(0)
    }),
    comment: new FormControl(null, [Validators.required, Validators.maxLength(140)])
  });
  public idEvent = '';
  public modalRef: any;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private ratingsService: RatingsService
  ) { }

  ngOnInit() {
    this.idEvent = this.route.snapshot.params._id;
  }

  openModal(content) {
    this.modalRef = this.modalService.open(content, { size: 'lg' });
  }

  public ratingsCreate() {
    const body = this.ratingsForm.value;
    const rating = body.ratings;
    const media = (rating.pub + rating.local + rating.food + rating.lineup + rating.stall
      + rating.bathroom + rating.lighting + rating.security + rating.cleaning) / 9;
    body.media = Math.round(media);
    body._eventId = this.idEvent;
    this.ratingsService.createRatings(body).subscribe((res) => {
      this.ratingsForm.reset();
      this.modalRef.close();
    }, (error) => {
      console.log(error);
    });
  }

}
