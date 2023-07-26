import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersSlidesPage } from './offers-slides.page';

const routes: Routes = [
  {
    path: '',
    component: OffersSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersSlidesPageRoutingModule {}
