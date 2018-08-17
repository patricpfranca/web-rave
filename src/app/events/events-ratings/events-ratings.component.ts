import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RatingsService } from '../../providers/ratings.service';

@Component({
  selector: 'app-events-ratings',
  templateUrl: './events-ratings.component.html',
  styleUrls: ['./events-ratings.component.css']
})
export class EventsRatingsComponent implements OnInit {

  public ratingsForm: FormGroup = new FormGroup({
    ratings: new FormGroup({
      'food': new FormControl(null),
      'pub': new FormControl(null),
      'local': new FormControl(null),
      'bathroom': new FormControl(null),
      'security': new FormControl(null),
      'lighting': new FormControl(null),
      'lineup': new FormControl(null),
      'stall': new FormControl(null),
      'cleaning': new FormControl(null)
    }),
    'comment': new FormControl(null)
  });

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private ratingsService: RatingsService
  ) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  public ratingsCreate() {
    this.ratingsService.createRatings({
      ratings: this.formBuilder.group({
        food: this.ratingsForm.value.food,
        pub: this.ratingsForm.value.pub,
        local: this.ratingsForm.value.local,
        bathroom: this.ratingsForm.value.bathroom,
        security: this.ratingsForm.value.security,
        lighting: this.ratingsForm.value.lighting,
        lineup: this.ratingsForm.value.lineup,
        stall: this.ratingsForm.value.stall,
        cleaning: this.ratingsForm.value.cleaning
      }),
      comment: this.ratingsForm.value.comment
    });
  }

  // createRatingForm() {
  //   return this.formBuilder.group({
  //     ratings: this.formBuilder.group({
  //       food: [null],
  //       pub: [null],
  //       local: [null],
  //       bathroom: [null],
  //       security: [null],
  //       lighting: [null],
  //       lineup: [null],
  //       stall: [null],
  //       cleaning: [null]
  //     }),
  //     comment: [null]
  //   });
  // }

}
