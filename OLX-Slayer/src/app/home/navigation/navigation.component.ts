import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  private isLogedIn: boolean;
  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.isLogedIn = true;
      } else {
        this.isLogedIn = false;
      }
    });
  }
  signOut () {
    this.auth.auth.signOut();
  }
}
