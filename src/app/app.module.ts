import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgModule } from './shared/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './views/dashboard/dashboard.module';

import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';

import { AuthGuardService } from './resources/services/auth-guard.service';
import { PermissionGuardService } from './resources/services/permission-guard.service';
import { PartnersService } from './resources/services/partners.service';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    DashboardModule,
  ],
  providers: [AuthGuardService, PermissionGuardService, PartnersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
