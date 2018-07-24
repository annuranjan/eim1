import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { SharedModule } from '../core/shared-module/shared.module';
import { EimComponent } from './submenus/eim/eim.component';
import { PersonalDetailsComponent } from './submenus/eim/personal-details/personal-details.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
  ],
  declarations: [
    ManagerComponent,
    EimComponent,
    PersonalDetailsComponent
  ]
})
export class ManagerModule { }
