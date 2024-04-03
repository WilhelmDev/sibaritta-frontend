export interface IMessage {
  createdAt: string;
  description: string | undefined | null;
  details?: MessageDetail[];
  fk_reservation_id: number;
  id: number;
  status: string;
  reservation: Reservation;
  user_meta: UserMeta []
  partner?: IPartner
}

interface MessageDetail {
  id: number;
  description?: string;
  fk_message_id?: number;
  fk_partner_id?: number;
  fk_user_id?: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface IPartner{
  comercial_name : string
}
interface Reservation {
  createdAt: string;
  fk_event_id: number;
  fk_user_id: number;
  id: number;
  order_check_get_more_info: boolean;
  order_check_terms: boolean;
  order_code: string;
  order_comments: string;
  order_hours_cancelation: number;
  order_number: string;
  order_paymentAt: string;
  order_seats: string;
  order_total: string;
  status: string;
  updatedAt: string;
  user_address: string;
  user_email: string;
  user_name: string;
}

interface UserMeta{
createdAt?: string,
fk_user?: number
id?: number
meta_key?: string,
meta_value?: string | null | undefined ,
status?: string
updatedAt?: string
}
