import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/common/services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  

  constructor(
    public userDataService: UserDataService
  ) {
  }

  ngOnInit() {
    this.userDataService.getCurrentUser();
  }

  

}
