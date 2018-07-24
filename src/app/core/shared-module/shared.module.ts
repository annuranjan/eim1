import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { SidebarMenus } from './sidebar/sidebar-menu';
import { NavbarMenus } from './header/navbar-menu';
import { HomeComponent } from './home/home.component';
import { CreateReportComponent } from './create-report/create-report.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentPageComponent,
    HomeComponent,
    CreateReportComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContentPageComponent,
    HomeComponent,
    CreateReportComponent
  ],
  providers: [
    SidebarMenus,
    NavbarMenus
  ]
})
export class SharedModule { }
