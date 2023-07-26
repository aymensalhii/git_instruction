import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { CodeInputModule } from 'angular-code-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SharedModule,
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: true,
      inputType: 'number',
      isCodeHidden: false
    }),
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
