import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuardService implements CanActivate {
    public isLoggedIn: boolean;
    constructor(private afAuth: AngularFireAuth, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
      return this.afAuth.authState
        .map((user) =>  {
          if (user === null) {
            this.router.navigate(['/login']);
            this.isLoggedIn = false;
          } else {
            this.isLoggedIn = true;
          }

          return this.isLoggedIn;
        });
    }
}
