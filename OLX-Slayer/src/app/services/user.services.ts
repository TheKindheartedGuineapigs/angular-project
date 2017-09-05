import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
    private user: firebase.User;
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }
    getCurrentUser(): firebase.User {
        return this.user;
    }
    signup(formData): firebase.Promise<any> {
        return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }

    login(formData): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password);
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    resetPasswor(email): firebase.Promise<any> {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    getUserDetails(uid): FirebaseObjectObservable<any> {
        return this.db.object('/usersDetails/' + uid + '/details');
    }

    getUserAddress(uid): FirebaseObjectObservable<any> {
        return this.db.object('/usersDetails/' + uid + '/address');
    }

    updateUserProfile(name: string, photoUrl: string) {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        };

        this.user.updateProfile(profile)
            .then(() => {
                console.log('success, Img uploaded.');
            }).catch(err => {
                console.log(err);
            });
    }

    updateAddress(address, uid) {
        this.db.object('/usersDetails/' + uid + '/address').set(address)
            .then(() => {
                console.log('address updated');
            }).catch(err => {
                console.log(err);
            });
    }

    updatePersonalDetails(details, uid) {
        this.db.object('/usersDetails/' + uid + '/details').set(details)
            .then(() => {
                console.log('details updated');
            }).catch(err => {
                console.log(err);
            });
    }
}
