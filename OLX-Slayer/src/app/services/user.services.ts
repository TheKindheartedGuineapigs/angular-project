import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
    user: Observable<firebase.User>;
    constructor (private afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    signup (formData) {
        return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }
}
