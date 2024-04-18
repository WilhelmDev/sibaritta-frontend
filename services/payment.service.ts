import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

export interface Payment {
  id: number;
  payment_date: Date | null;
  invoicing_date: Date | null;
  amount: number;
  commission: number;
  fk_partner_id: number;
  status: boolean;
  payment_method: string | null;
  invoice_file_path: string | null;
  receipt_file_path: string | null;
  payment_period_start_date: Date;
  payment_period_end_date: Date;
  createdAt: Date;
  updatedAt: Date;
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
