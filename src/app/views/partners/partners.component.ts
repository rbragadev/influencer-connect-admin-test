import { Component, OnInit } from '@angular/core';
import { ResponsePartner } from 'src/app/resources/models/ResponsePartner.model';
import { PartnersService } from 'src/app/resources/services/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  partners: ResponsePartner[] = [];
  apiUrl: string = 'http://localhost:3000';

  constructor(public partnersService: PartnersService) {}

  ngOnInit(): void {}

  getAllPartners() {
    this.partnersService.getAllPartners();
  }
}
