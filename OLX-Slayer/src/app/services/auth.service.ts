import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
// Not in use glitchy TODO:FIX

export class AuthService {
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    }

    signup(formData): firebase.Promise<any> {
        return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }

    login(formData): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password);
    }

    logout() {
        this.afAuth.auth.signOut()
            .then(() => {
                console.log('you are now loged out!');
            }).catch(error => {
                console.log(error);
            });
    }
}
