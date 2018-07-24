import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../core/shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
