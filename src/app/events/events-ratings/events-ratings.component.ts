import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-events-ratings',
  templateUrl: './events-ratings.component.html',
  styleUrls: ['./events-ratings.component.css']
})
export class EventsRatingsComponent implements OnInit {

  ratingsForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
    this.ratingsForm = this.createRatingForm();
  }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  public ratingsCreate() {
    return console.log(this.ratingsForm.controls);
  }

  createRatingForm() {
    return this.formBuilder.group({
      ratings: this.formBuilder.group({
        food: [null],
        pub: [null],
        local: [null],
        bathroom: [null],
        security: [null],
        lighting: [null],
        lineup: [null],
        stall: [null],
        cleaning: [null]
      }),
      comment: [null]
    });
  }

}
