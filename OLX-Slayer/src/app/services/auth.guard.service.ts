import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuardService implements CanActivate {
    public isLoggedIn: boolean;
    constructor(private afAuth: AngularFireAuth, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.afAuth.authState.subscribe((user) =>  {
          if (user == null) {
            console.log('must be loged in to continue');
            this.router.navigate(['/login']);
            this.isLoggedIn = false;
          } else {
            this.isLoggedIn = true;
          }
        });
        return this.isLoggedIn;
      }
}
