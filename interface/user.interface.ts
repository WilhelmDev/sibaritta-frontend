export interface IUser {
  email: string;
  name: string;
  meta_data: IMetadata[];
  fk_typeuser: number;
  partner?: IPartner
  avatar?: any
}
export interface IMetadata {
  meta_key: string;
  meta_value: string;
}

export interface IPartner {
  address: string;
  business_email: string;
  comercial_name: string;
  commission: null;
  description: any;
  createdAt: string;
  fk_user_id: null;
  full_name: string;
  id: number;
  phone1: string;
  phone2: string;
  position_id: number;
  postal_code: string;
  responsable_name: string;
  rfc: string;
  status: string;
  updatedAt: string;
  curp: string;
}

export interface IDataForm {
  name: string;
  email: string;
  address: string;
  curp: string;
  phone: string;
  other_phone: string;
  birthday_month: string;
  birthday_day: string;
  couple_day: string;
  couple_month: string;
  anniversary_day: string;
  anniversary_month: string;
}
