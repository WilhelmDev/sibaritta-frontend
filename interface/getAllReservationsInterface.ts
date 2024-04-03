// IReservacion.ts
export interface IReservacions {
  fk_experience_id: number;
  id: number;
  user_name: string;
  user_email: string;
  user_address: string;
  order_comments: string;
  createdAt: string;
  updatedAt: string;
  order_paymentAt: string;
  order_check_get_more_info: boolean;
  order_check_terms: boolean;
  order_code: string;
  order_hours_cancelation: number;
  order_number: string;
  order_seats: string;
  order_total: string;
  status: string;
  cardnumber: number;
  details?: IDetails[] ;
  partner?: IPartners;
  experience_smoking_zone?: string;
  experience_checkin?: string;
  experience_aditionals?: string;
  experience_age?: string;
  experience_city?: number;
  experience_dress_code?: string;
  experience_duration?: string;
  experience_name?: string;
  experience_parking?: string;
}

interface IPartners {
  address: string;
  business_email: string;
  comercial_name: string;
  commission: any;
  contact_body: any;
  createdAt: string;
  fk_user_id: any;
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
}
interface IDetails {
  createdAt: string;
  date?: string | undefined;
  fk_event_id: number;
  fk_experience_id: number;
  fk_reservation_id: number;
  fk_suggestion_id: any;
  hour: number;
  id: number;
  minute: number;
  name: string;
  price_item: string;
  quantity: string;
  seats: number;
  type: string;
  updatedAt: string;
}
