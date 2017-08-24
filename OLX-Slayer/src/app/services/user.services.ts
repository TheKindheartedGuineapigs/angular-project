import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
    private user: Observable<firebase.User>;
    constructor (private afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    getCurrentUser (): Observable<firebase.User> {
        return this.user;
    }
    signup (formData) {
        return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }

    login (formData) {
        return this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password);
    }

    logout () {
        this.afAuth.auth.signOut();
    }

    updatePersonalDetails (obj) {
    }
}
