import { UserService } from './../services/user.services';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/take';

@Injectable()
export class UserResolver implements Resolve<firebase.User> {
    constructor(private userService: UserService) {}

    resolve(): Observable<firebase.User> {
        console.log("ivan resolveraq");
        return this.userService.getCurrentUser().take(1);
    }
}
