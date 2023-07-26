import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCompletionPageRoutingModule } from './profile-completion-routing.module';

import { ProfileCompletionPage } from './profile-completion.page';
import { SharedModule } from 'src/app/common/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCompletionPageRoutingModule,
    SharedModule
  ],
  declarations: [ProfileCompletionPage]
})
export class ProfileCompletionPageModule {}
