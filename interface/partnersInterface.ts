interface ReservationDetails {
    createdAt: string;
    date: string;
    fk_event_id: number;
    fk_experience_id: number;
    fk_reservation_id: number;
    fk_suggestion_id: number | null;
    hour: number;
    id: number;
    minute: number;
    name: string;
    price_item: string;
    quantity: string;
    seats: number;
    type: string;
    updatedAt: string;
  }
  
  export interface Reservation {
    createdAt: string;
    details: ReservationDetails[];
    fk_experience_id: number;
    fk_user_id: number;
    id: number;
    order_check_get_more_info: boolean;
    order_check_terms: boolean;
    order_code: string;
    order_comments: string;
    order_hours_cancelation: number;
    order_number: string;
    order_paymentAt: string;
    order_seats: string;
    order_total: string;
    status: string;
    updatedAt: string;
    user_address: string;
    user_email: string;
    user_name: string;
    suggestions: any;
  }