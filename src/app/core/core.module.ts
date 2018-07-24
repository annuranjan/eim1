import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { AuthService } from './auth.service';
import { AppService } from './app.service';
import { AdminModule } from '../admin/admin.module';
import { SharedModule } from './shared-module/shared.module';
import { EmployeeModule } from '../employee/employee.module';
import { ManagerModule } from '../manager/manager.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    CoreRoutingModule,
    AdminModule,
    EmployeeModule,
    ManagerModule,
    BrowserAnimationsModule
  ],
  declarations: [
    LoginComponent,
    NotFoundComponent
  ],
  exports: [],
  providers: [AuthService, AppService]
})
export class CoreModule { }
