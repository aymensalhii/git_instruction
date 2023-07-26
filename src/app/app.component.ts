import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserDataService } from './common/services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'house', iconType: 'bootstrap'},
    {title: 'My bookings', url: '/bookings', icon: 'calendar2-check', iconType: 'bootstrap'},
    {title: 'Bookings', url: '/requests', icon: 'calendar2-check', iconType: 'bootstrap'},
    {title: 'Shop', url: '/shop', icon: 'shop', iconType: 'bootstrap'},
    {title: 'Offers', url: '/offers', icon: 'tags', iconType: 'bootstrap'},
    {title: 'Statistics', url: '/statistics', icon: 'bar-chart', iconType: 'bootstrap'},
    {title: 'Reports', url: '/reports', icon: 'pie-chart', iconType: 'bootstrap'},
    {title: 'Notifications', url: '/notifs', icon: 'bell', iconType: 'bootstrap'},
    {title: 'Messages', url: '/messages', icon: 'messenger', iconType: 'bootstrap'},
    {title: 'Saloons', url: '/saloons', icon: 'shop', iconType: 'bootstrap'},
    { title: 'My favorites', url: '/favorites', icon: 'heart', iconType: 'bootstrap'},
    {title: 'Profile', url: '/profile', icon: 'person-circle', iconType: 'bootstrap'},
    {title: 'Settings', url: '/settings', icon: 'gear-wide-connected', iconType: 'bootstrap'},
    { title: 'Build your new idea App', url: '/build-apps', icon: 'ui-checks-grid', iconType: 'bootstrap'},
    { title: 'Our Apps', url: '/our-apps', icon: 'app-indicator', iconType: 'bootstrap'},
    { title: 'Help & Supports', url: '/help', icon: 'question', iconType: 'bootstrap'},
  ];

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private menuController: MenuController,
    public userDataService: UserDataService
  ) {}

  async ngOnInit() {
    this.userDataService.getCurrentUser();
  }

  openThemePopup() {
    this.menuController.close();
    setTimeout(() => {
      console.log('Will add theme palette later')
    }, 2000);
  }

  logout() {
    this.afAuth.signOut()
      .then(() => {
        this.menuController.close();
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 1000);
      })
      .catch(error => {
        console.error("Error logging out:", error);
      });
  }
}
