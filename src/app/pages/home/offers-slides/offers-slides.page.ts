import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCards } from "swiper";
import Swiper from 'swiper';

SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-offers-slides',
  templateUrl: './offers-slides.page.html',
  styleUrls: ['./offers-slides.page.scss'],
})
export class OffersSlidesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
    });
  }

}
