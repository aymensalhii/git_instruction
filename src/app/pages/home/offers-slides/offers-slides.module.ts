import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from "swiper/angular";

import { OffersSlidesPageRoutingModule } from './offers-slides-routing.module';

import { OffersSlidesPage } from './offers-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersSlidesPageRoutingModule,
    SwiperModule
  ],
  declarations: []
})
export class OffersSlidesPageModule {}
