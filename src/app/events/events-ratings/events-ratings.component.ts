import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events-ratings',
  templateUrl: './events-ratings.component.html',
  styleUrls: ['./events-ratings.component.css']
})
export class EventsRatingsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
