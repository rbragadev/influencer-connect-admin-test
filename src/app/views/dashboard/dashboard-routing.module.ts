import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/resources/services/auth-guard.service';
import { PermissionGuardService } from 'src/app/resources/services/permission-guard.service';
import { PartnersComponent } from '../partners/partners.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent /*
    children: [
      {
        path: 'partners',
        component: PartnersComponent,
        canActivate: [PermissionGuardService],
      },
    ],
  */,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
