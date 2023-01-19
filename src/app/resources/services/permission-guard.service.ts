import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuardService implements CanActivateChild {
  constructor(private authService: AuthService) {}
  canActivateChild(): boolean {
    return this.authService.isAuthenticated();
  }
}
