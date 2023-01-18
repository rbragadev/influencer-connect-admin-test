import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public requestLogin!: RequestLogin;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.alertService.info('usuario logado', 'Sucesso');
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.alertService.error(error, `Falha no Login+${error.error.message}`);
        console.log(error);
      }
    );
  }
}
