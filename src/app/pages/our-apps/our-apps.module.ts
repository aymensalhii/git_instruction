import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurAppsPageRoutingModule } from './our-apps-routing.module';

import { OurAppsPage } from './our-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurAppsPageRoutingModule
  ],
  declarations: [OurAppsPage]
})
export class OurAppsPageModule {}
