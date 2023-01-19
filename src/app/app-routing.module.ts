import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { PermissionGuardService } from './resources/services/permission-guard.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { PartnerDetailComponent } from './views/partners/partner-detail/partner-detail.component';
import { PartnersComponent } from './views/partners/partners.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    /*canActivate: [AuthGuardService],
    canActivateChild: [PermissionGuardService],*/
    children: [
      {
        path: 'partners',
        component: PartnersComponent,
      },
      { path: 'partners/:id', component: PartnerDetailComponent },
    ] /*
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  */,
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
