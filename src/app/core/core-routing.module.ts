import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminModule } from '../admin/admin.module';
import { EmployeeComponent } from '../employee/employee.component';
import { ManagerComponent } from '../manager/manager.component';
import { ManagerModule } from '../manager/manager.module';
import { EmployeeModule } from '../employee/employee.module';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent, loadChildren: () => AdminModule },
  { path: "manager", component: ManagerComponent, loadChildren: () => ManagerModule },
  { path: "employee", component: EmployeeComponent, loadChildren: () => EmployeeModule },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
