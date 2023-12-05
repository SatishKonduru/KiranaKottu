import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGuardService } from 'src/app/services/route-guard.service';


const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [RouteGuardService],
        data: {
          expectedRole: ['admin']
        }
      },
    ]
  },
  
  
];

@NgModule({
  imports: [
  RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
