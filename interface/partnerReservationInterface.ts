export interface IpartnerReservation {
  experience_type: string;
  calification_comments: string;
  calification_ranking: string;
  extras: string;
  order_code: string;
  order_number: string;
  seats: string;
  status: string;
  user_name: string;  
  data?: any;
  date?: string;
  header: IHeader;
}

export interface IHeader {

  experience_name: string;
  experience_type: string;
  date?: any;
  hour: number;
  minute: number;
  seats_free: number;
  data?: any;
  seats:number;
}
