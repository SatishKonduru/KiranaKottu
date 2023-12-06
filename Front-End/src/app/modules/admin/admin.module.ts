import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MenuItems } from 'src/app/shared/menuItems';




@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule
  ],
  providers: [MenuItems]
})
export class AdminModule { }
