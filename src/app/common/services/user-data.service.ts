import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  isAuthenticated: boolean = false;
  userDataLoading: boolean = false;
  currentUser: any;

  constructor(
    private afs: AngularFirestore, 
    private afAuth: AngularFireAuth
  ) {
    this.userDataLoading = true;
  }

  getCurrentUser() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        const currentUserData = this.afs.collection('users').doc(user.uid).valueChanges();
        currentUserData.subscribe((data: any) => {
          this.currentUser = data;
          console.log(this.currentUser);
        })
        this.userDataLoading = false;
        console.log(user.uid);
      } else {
        this.isAuthenticated = false;
        console.log('User is signed out');
        this.userDataLoading = false;
      }
    });
  }
}
