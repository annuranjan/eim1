import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { EimComponent } from './submenus/eim/eim.component';
import { PersonalDetailsComponent } from './submenus/eim/personal-details/personal-details.component';

const managerRoutes: Routes = [
  {
    path: 'manager', component: ManagerComponent, children: [
      {
        path: "eim", component: EimComponent, children: [
          { path: "personalDetails", component: PersonalDetailsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(managerRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class ManagerRoutingModule { }
