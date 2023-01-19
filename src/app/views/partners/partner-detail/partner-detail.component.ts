import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls: ['./partner-detail.component.scss'],
})
export class PartnerDetailComponent {
  @Input()
  partner: string = 'nome';
}
