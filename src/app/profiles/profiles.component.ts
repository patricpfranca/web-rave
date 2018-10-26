import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilesComponent implements OnInit {

  public profile: User[] = [];
  private currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getProfile(this.currentUser._id);
  }

  public getProfile(id: string) {
    this.userService.getById(id)
      .subscribe((profile: User[]) => {
        console.log(profile);
        this.profile = profile;
      });
  }

}
