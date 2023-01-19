import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePartner } from '../models/ResponsePartner.model';

//const host: string = 'https://gateway-api-stage.b4a.com.br/';
const host: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  apiUrl: string = 'http://localhost:3000';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  partners = [];

  constructor(private httpClient: HttpClient) {
    this.getAllPartners();
  }

  getAllPartners() {
    const res = this.httpClient
      .get<any>(`${this.apiUrl}/influencer-connect/partner`)
      .subscribe((res) => console.log(res));

    //this.partners = res;
  }

  /*public getPartners(): Observable<ResponsePartner[]> {
    return this.httpClient.get<ResponsePartner[]>(
      host + 'influencer-connect/partner'
    );
  }

  public getPartners() {
    return this.httpClient
      .get(`${host} + /influencer-connect/partner`)
      .subscribe((res) => console.log(res));
  }*/
}
