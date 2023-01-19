import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { AuthService } from './auth.service';

//const host: string = 'https://gateway-api-stage.b4a.com.br/';
const host: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient
      .post<ResponseLogin>(host + 'influencer-connect/login', requestLogin)
      .pipe(
        tap((loginResponse) => (this.authService.loginResponse = loginResponse))
      );
  }
}
