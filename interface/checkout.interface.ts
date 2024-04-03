export interface IReservation {
  fecha?: string;
  horario?: string;
  personas?: number;
  sugerencias?: ISugerencias[];
  tipoReserva?: string;
  nameExperience: string;
  priceExperience: string;
  fk_experience_id: number;
  order_fk_event_id: number;
  idReservation: number;
  startDate: string;
  timeDate: string;
  addres: string;
}

export interface ISugerencias {
  cantidad?: number;
  description?: string;
  id?: number;
  imgs?: string;
  precio?: string;
  title?: string;
  regular_price: string;
  count?: number;
}
