import { UserProfile } from './../models/userProfile';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
    private user: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
        this.user = afAuth.authState;
    }

    getCurrentUser(): Observable<firebase.User> {
        return this.user;
    }

    resetPasswor(email: string): firebase.Promise<any> {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    availableUsername(username: string): Observable<any> {
        return this.db.list('/usersDetails', {
            query: {
                orderByChild: 'username',
                equalTo: username
            }
        }).first();
    }

    getUserDetails(uid: string): FirebaseObjectObservable<any> {
        return this.db.object('/usersDetails/' + uid);
    }

    updatePersonalDetails(details, uid: string): firebase.Promise<any> {
        return this.db.object('/usersDetails/' + uid).set(details);
    }
}
