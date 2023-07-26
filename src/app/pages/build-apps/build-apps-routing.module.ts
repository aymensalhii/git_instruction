import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildAppsPage } from './build-apps.page';

const routes: Routes = [
  {
    path: '',
    component: BuildAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildAppsPageRoutingModule {}
