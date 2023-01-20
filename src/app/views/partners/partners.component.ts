import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/resources/models/Partner.model';
import { ResponsePartner } from 'src/app/resources/models/ResponsePartner.model';
import { PartnersService } from 'src/app/resources/services/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  apiUrl: string = 'http://localhost:3000';
  partners: any = [];
  partner_id: any = [];
  partner_level_id: number = 0;
  creation_date: string | Date = '';
  partner_first_name: string = '';
  partner_last_name: string = '';
  partner_cpf_number: number = 0;
  partner_email: string = '';
  partner_phone: number = 0;
  partner_password: string = '';
  partner_status: string = '';
  partner_adress_street_name: string = '';
  partner_adress_street_number: number = 0;
  partner_adress_street_complement: string = '';
  partner_adress_neighborhood: string = '';
  partner_adress_city: string = '';
  partner_adress_state: string = '';
  partner_adress_country?: string = '';
  partner_adress_postal_code: number = 0;
  partner_avatar: string = '';

  constructor(
    public partnersService: PartnersService,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllPartners();
  }

  getAllPartners() {
    this.partnersService.getAllPartners().subscribe((data) => {
      let partners = data;
      this.partners = data;
      let res = partners.map((c) => c.partner_id);
      this.partner_id = res;
      console.log(partners);
      console.log(res);
      console.log(partners[0]);

      console.log(this.partners);
      console.log(this.partner_id);
    });
  }
  /*getAllPartners() {
    return this.partnersService
      .getAllPartners()
      .subscribe((data: ResponsePartner[]) => {
        this.partners = data;
      });

    console.log(this.partners);
  }*/
}
