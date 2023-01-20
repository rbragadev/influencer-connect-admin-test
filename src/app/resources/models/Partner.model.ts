export class Partner {
  partner_id: number = 0;
  partner_level_id?: number = 0;
  creation_date?: string | Date = '';
  partner_first_name?: string = '';
  partner_last_name?: string = '';
  partner_cpf_number?: number = 0;
  partner_email?: string = '';
  partner_phone?: number = 0;
  partner_password?: string = '';
  partner_status?: string = '';
  partner_adress_street_name?: string = '';
  partner_adress_street_number?: number = 0;
  partner_adress_street_complement?: string = '';
  partner_adress_neighborhood?: string = '';
  partner_adress_city?: string = '';
  partner_adress_state?: string = '';
  partner_adress_country?: string;
  partner_adress_postal_code?: number = 0;
  partner_avatar?: string = '';
}
