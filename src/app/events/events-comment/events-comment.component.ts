import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RatingsService } from '../../providers/ratings.service';
import { Rating } from '../../shared/models/rating.interface';

@Component({
  selector: 'app-events-comment',
  templateUrl: './events-comment.component.html',
  styleUrls: ['./events-comment.component.css']
})
export class EventsCommentComponent implements OnInit {

  public idEvent = '';
  public comments;

  constructor(
    private route: ActivatedRoute,
    private ratingsService: RatingsService
  ) { }

  ngOnInit() {
    this.idEvent = this.route.snapshot.params._id;
    this.ratingsComment();
  }

  public ratingsComment() {
    this.ratingsService.findCommentsRating(this.idEvent)
      .subscribe((ratings: Rating[]) => {
        this.comments = ratings;
      });
  }

}
