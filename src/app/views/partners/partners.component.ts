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
  partners: any = [];
  apiUrl: string = 'http://localhost:3000';

  constructor(
    public partnersService: PartnersService,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllPartners();
  }

  getAllPartners() {
    this.partnersService.getAllPartners().subscribe((data) => {
      this.partners = data;
      console.log(this.partners);
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
