import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as L from "leaflet";
import { Geolocation } from '@capacitor/geolocation';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-completion',
  templateUrl: './profile-completion.page.html',
  styleUrls: ['./profile-completion.page.scss'],
})
export class ProfileCompletionPage implements OnInit {
  step: number = 0;
  form: FormGroup;

  leafletMap: any;
  currentLat: number = 0;
  currentLng: number = 0;
  zoom: number = 12;
  currentMarker: any;

  constructor(
    private afs: AngularFirestore, 
    private afStorage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    private route: Router
  ) {
    this.form = new FormGroup({
      role: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cr: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      logo: new FormControl(''),
      confirmTerms: new FormControl(false),
      turnAround: new FormControl(true),
      lat: new FormControl(0),
      lng: new FormControl(0)
    })
  }

  async ngOnInit() {
    const coordinates = Geolocation.getCurrentPosition();
    this.currentLat = (await coordinates).coords.latitude;
    this.currentLng = (await coordinates).coords.longitude;
  }

  Next() {
    this.step++;
    if(this.step > 2) {
      setTimeout(() => {
        this.loadLeafletMap();
        this.addMarker();
      }, 400);
    }
  }
  Back() {
    this.step--;
  }

  loadLeafletMap() {

    this.leafletMap = new L.Map('leafletRegisterMap');

    const self = this;

    this.leafletMap.once("load", function() {
      setTimeout(() => {
        self.leafletMap.invalidateSize();
      }, 500);
    });
    
    this.leafletMap.setView([this.currentLat, this.currentLng], this.zoom);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    
    attribution:
    
    '&copy; <a href=”https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    
    }).addTo(this.leafletMap);
    
    
  }

  addMarker() {

    let icon = L.icon({

      iconUrl: "assets/markers/marker-icon.png",
      
      iconSize: [25, 40]
      
      });
      
      this.currentMarker = L.marker([this.currentLat, this.currentLng],{icon: icon});
      this.currentMarker.options.draggable = true;
      this.currentMarker.addTo(this.leafletMap)
      
      let popup = L.popup()
      
      .setContent("<h1>Do not click me</h1>");
      
      this.currentMarker.bindPopup(popup);

      this.currentMarker.on('move', (e: any) => {
        //console.log('**************************************+++++');
        //console.log(e.latlng.lat,'*************',e.latlng.lng);
        this.currentLat = e.latlng.lat;
        this.currentLng = e.latlng.lng;

        this.form.controls['lat'].setValue(this.currentLat);
        this.form.controls['lng'].setValue(this.currentLng);
      })
  }

  SaveCustomer() {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        const userDocRef = this.afs.collection('users').doc(user!.uid);
        userDocRef.update({
          role: this.form.value.role,
          name: this.form.value.name,
          lat: this.form.value.lat,
          lng: this.form.value.lng,
          turnaround: true,
          agreeTerms: this.form.value.confirmTerms,
          email: this.form.value.email,
          completion: true,
        }).then(() => {
          console.log('User document updated successfully.');
          this.route.navigate(["/profile"])
        }).catch((error) => {
          console.error('Error updating user document:', error);
        });
      } else {
        console.log('User unauthenticated!')
      }
    })
  }

  SaveOwner() {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        const userDocRef = this.afs.collection('users').doc(user!.uid);
        userDocRef.update({
          role: this.form.value.role,
          name: this.form.value.name,
          lat: this.form.value.lat,
          lng: this.form.value.lng,
          cr: this.form.value.cr,
          turnaround: true,
          agreeTerms: this.form.value.confirmTerms,
          email: this.form.value.email,
          logo: this.form.value.logo,
          completion: true,
        }).then(() => {
          console.log('User document updated successfully.');
          this.route.navigate(["/profile"])
        }).catch((error) => {
          console.error('Error updating user document:', error);
        });
      } else {
        console.log('User unauthenticated!')
      }
    })
  }
}
