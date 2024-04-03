// Ajusta la interfaz Header para incluir experience_type
interface Header {

  experience_name: string;
  experience_type: string;
  date: string;
  hour: number;
  minute: number;
  seats_free: number;
  data: any;
}

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
  header: Header;
  data: any;
  date: string;
}
