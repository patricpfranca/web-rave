import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const config = {
      apiKey: 'AIzaSyB9iAWlTxNeszc-ksaaE3Ge0cKDHIjxTLw',
      authDomain: 'web-rave.firebaseapp.com',
      databaseURL: 'https://web-rave.firebaseio.com',
      projectId: 'web-rave',
      storageBucket: 'web-rave.appspot.com',
      messagingSenderId: '907667834095'
    };

    firebase.initializeApp(config);
  }


}
