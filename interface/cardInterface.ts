export interface ICard {
  id: number;
  imgs: string;
  estrella: string;
  usuarios: string;
  puntaje: string;
  user: string;
  restaurante: string;
  chef: string;
  disponilbes: string;
  description: string;
  duration: string;
  precio: string;
}

export interface ICard2 {
  id?: number;
  address?: string;
  aditionals?: string;
  age?: string;
  branch_id?: number;
  cancelation?: string;
  description?: string;
  dress_code?: string;
  duration?: string;
  fk_category?: number;
  gallery?: string;
  name?: string;
  parking?: string;
  regular_price?: string;
  seats?: number;
  slug?: string;
  status?: string;
  thumbnail?: string;
}
