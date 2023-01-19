import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginResponse!: ResponseLogin;

  public clear(): void {
    this.loginResponse = { access_token: '' };
  }

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse.access_token.length !== 0);
  }
}
