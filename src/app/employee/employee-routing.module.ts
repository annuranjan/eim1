import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const empRoutes: Routes = [
  { path: "employee", component: EmployeeComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(empRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
