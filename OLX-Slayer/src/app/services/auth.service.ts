import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    }

    signup(formData): firebase.Promise<any> {
        return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }

    login(formData): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password);
    }

    signOut(): firebase.Promise<any> {
        return this.afAuth.auth.signOut();
    }
}
