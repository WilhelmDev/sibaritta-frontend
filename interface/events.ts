export interface Events {
  id:               number;
  type:             string;
  seats:            number;
  total_seats:      number;
  date:             Date;
  hour:             number;
  minute:           number;
  price:            string;
  status:           string;
  fk_experience_id: number;
}