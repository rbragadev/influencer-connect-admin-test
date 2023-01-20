import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsePartner } from '../models/ResponsePartner.model';

//const host: string = 'https://gateway-api-stage.b4a.com.br/';
//const host: string = 'http://localhost:3000/';

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

  partners: ResponsePartner[] = [];

  constructor(private httpClient: HttpClient) {
    //this.getAllPartners();
    this.partners = this.partners;
  }

  public getAllPartners(): Observable<ResponsePartner[]> {
    return this.httpClient.get<ResponsePartner[]>(
      `${this.apiUrl}/influencer-connect/partner`
    );
  }

  //Example to Test*****************************
  async getPartners() {
    const req = await this.httpClient.get<any>(
      `${this.apiUrl}/influencer-connect/partner`
    );
    const listPartners = req.forEach;
    console.log(listPartners);
    console.log(req);
  }

  /*getAllPartners() {
    this.httpClient
      .get<ResponsePartner[]>(`${this.apiUrl}/influencer-connect/partner`)
      .subscribe((res) => {
        let partners = res;
        for (let partner of partners) {
          console.log(partner.partner_first_name);
        }
        console.log(res[0].partner_first_name);
        console.log(partners);
      });
  }
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
