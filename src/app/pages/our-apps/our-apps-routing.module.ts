import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurAppsPage } from './our-apps.page';

const routes: Routes = [
  {
    path: '',
    component: OurAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurAppsPageRoutingModule {}
