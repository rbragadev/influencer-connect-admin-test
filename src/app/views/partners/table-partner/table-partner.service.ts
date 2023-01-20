import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from './table-partner-interface';

@Injectable()
export class TablePartnerService {
  apiUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPartnerList() {
    return this.http.get<any>(`${this.apiUrl}/influencer-connect/partner`);
  }
}
