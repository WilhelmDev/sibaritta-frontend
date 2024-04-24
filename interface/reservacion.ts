export interface IReservacion {
  id: number;
  img: string;
  hora: string;
  persona: number;
  precio: number;
  codigo: string;
  pago?: string;
  tarjeta?: number;
}
export interface IDetalle {
  partner: any;
  id: number;
  branch_id: number | null;
  slug: string;
  name: string;
  description: string;
  address: string;
  dress_code: string;
  regular_price: string;
  duration: string;
  cancelation: string;
  parking: string;

  age: string;
  status: string;
  thumbnail: string;
  aditionals: string;
  gallery: string;
  fk_category: number;
  seats: number;
  seats_free?: number;
  events: any[];
  images: IImage[];
  suggestions: any[];
  urlmap: string;
  politica: string;
  calification_ranking?: any;
  calification_number?: any;
}

export interface ReservationInformation {
  id: number;
  user_name: string;
  user_email: string;
  user_address: string | null;
  order_comments: string | null;
  order_seats: string | null;
  order_check_terms: boolean | null;
  order_check_get_more_info: boolean | null;
  order_paymentAt: Date;
  order_code: string | null;
  order_hours_cancelation: number | null;
  order_total: number;
  status: 'created' | 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  experience_name: string;
  experience_calification: number;
  event_date: string;
  event_hour: number;
  event_minute: number;
  extras: string[];
}

export interface IImage {}
