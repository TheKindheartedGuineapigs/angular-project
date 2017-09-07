import { UserProfile } from './../models/userProfile';
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

    getCurrentUserId(): string {
        return this.user.uid;
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
    resetPasswor(email: string): firebase.Promise<any> {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    getUserDetails(uid: string): FirebaseObjectObservable<any> {
        return this.db.object('/usersDetails/' + uid);
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

    updatePersonalDetails(details: UserProfile, uid: string) {
        this.db.object('/usersDetails/' + uid).set(details)
            .then(() => {
                console.log('details updated');
            }).catch(err => {
                console.log(err);
            });
    }
}
