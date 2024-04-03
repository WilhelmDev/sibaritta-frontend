export interface Sugerencia {
  id: number;
  imgs: string;
  title: string;
  description: string;
  precio: number;
  cantidad?: number;
  count: number;
}

export interface Reserva {
  personas: number;
  tipoReserva: string;
  fecha: string | null;
  horario: string | null;
  fk_experience_id: number;
  order_fk_event_id: number;
  sugerencias: Sugerencia[];
  nameExperience: string;
  priceExperience: string;
  idReservation: number;

}
