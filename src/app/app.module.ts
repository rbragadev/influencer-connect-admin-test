import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { PartnersComponent } from './views/partners/partners.component';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { PermissionGuardService } from './resources/services/permission-guard.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, PartnersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [AuthGuardService, PermissionGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
