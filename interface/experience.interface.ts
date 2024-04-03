export interface IExprecience {
  data: IDataExprecience;
}

export interface IDataExprecience {
  branch_id: number;
  fk_partner_id: number;
  fk_city: number;
  fk_category: number;
  slug: string;
  name: string;
  description: string;
  address: string;
  dress_code: string;
  regular_price: number;
  duration: number;
  cancelation: number;
  parking: string;
  aditionals: string;
  age: string;
  seats: number;
  thumbnail: string;
  gallery: string;
}
