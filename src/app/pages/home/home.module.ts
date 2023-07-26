import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ButtonModule } from 'primeng/button';
import { OffersSlidesPage } from './offers-slides/offers-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ButtonModule
  ],
  declarations: [HomePage, OffersSlidesPage]
})
export class HomePageModule {}
