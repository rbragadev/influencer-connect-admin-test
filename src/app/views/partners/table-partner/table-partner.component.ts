import { Component, OnInit } from '@angular/core';
import { TablePartnerService } from './table-partner.service';

@Component({
  selector: 'app-table-partner',
  templateUrl: './table-partner.component.html',
  styleUrls: ['./table-partner.component.scss'],
})
export class TablePartnerComponent implements OnInit {
  partners = [];
  constructor(private tablePartnerService: TablePartnerService) {}

  ngOnInit() {
    this.tablePartnerService
      .getPartnerList()
      .subscribe((response) => (this.partners = response));
  }
}
