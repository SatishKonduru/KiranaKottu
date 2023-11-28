import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularMaterialModule
  ]
})
export class UserModule { }
