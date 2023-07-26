import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildAppsPageRoutingModule } from './build-apps-routing.module';

import { BuildAppsPage } from './build-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildAppsPageRoutingModule
  ],
  declarations: [BuildAppsPage]
})
export class BuildAppsPageModule {}
