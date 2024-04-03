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



export interface IImage {}
