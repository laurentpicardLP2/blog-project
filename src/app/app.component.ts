import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor () {
    const config = {
      apiKey: "AIzaSyA7BzUQ30XmGfqeXE4CEGfA4HvJr34Ik3g",
      authDomain: "blog-7e05a.firebaseapp.com",
      databaseURL: "https://blog-7e05a.firebaseio.com",
      projectId: "blog-7e05a",
      storageBucket: "blog-7e05a.appspot.com",
      messagingSenderId: "84288932125"
    };
    firebase.initializeApp(config);
  }

  

}
