import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

export interface Payment {
  id: number;
  payment_date: string | null;
  invoicing_date: string | null;
  amount: number;
  commission: number;
  fk_partner_id: number;
  status: boolean;
  payment_method: string | null;
  invoice_file_path: string | null;
  receipt_file_path: string | null;
  payment_period_start_date: string;
  payment_period_end_date: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllPartnerPayments = async (
  partner_id: number
): Promise<Payment[]> => {
  try {
    const payments = await baseApi.get(
      `/v1/payment/partner/${partner_id}`,
      getConfig()
    );
    return payments.data.data;
  } catch (error) {
    throw error;
  }
};
