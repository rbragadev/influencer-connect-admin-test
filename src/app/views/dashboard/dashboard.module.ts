import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartnersComponent } from '../partners/partners.component';
import { PartnerDetailComponent } from '../partners/partner-detail/partner-detail.component';

@NgModule({
  declarations: [DashboardComponent, PartnersComponent, PartnerDetailComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
