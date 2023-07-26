import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StarRatingModule } from 'angular-star-rating';
import {RippleModule} from 'primeng/ripple';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import { CodeInputModule } from 'angular-code-input';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RippleModule,
    StarRatingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    InputTextModule,
    ImageModule,
    BadgeModule
  ],
  exports: [
    RippleModule,
    StarRatingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    InputTextModule,
    ImageModule,
    BadgeModule
  ]
})
export class SharedModule { }
