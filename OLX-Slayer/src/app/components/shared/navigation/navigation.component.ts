import { Router } from '@angular/router';
import { UserService } from './../../services/user.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  private isLogedIn: boolean;
  constructor(private auth: AngularFireAuth, private router: Router) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.isLogedIn = true;
      } else {
        this.isLogedIn = false;
      }
    });
  }
  signOut() {
    this.auth.auth.signOut()
      .then(() => {
        console.log('you are now loged out!');
        this.router.navigate(['/login']);
      }).catch(error => {
        console.log(error);
      });
  }
}
