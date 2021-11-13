import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTestRoutingModule } from './form-test-routing.module';
import { FormTestComponent } from './form-test.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormTestComponent
  ],
  imports: [
    CommonModule,
    FormTestRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormTestModule { }
