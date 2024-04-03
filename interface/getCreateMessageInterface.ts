export interface INotify {
  createdAt: string ;
  description: string;
  fk_user_id: number;
  id: number;
  item_id: number;
  item_value: any;
  read_partner: boolean;
  read_user: boolean;
  status: string;
  type: string;
  updatedAt: string | Date;
}
