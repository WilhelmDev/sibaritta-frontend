import { baseApi, generalBaseApi } from "@/lib/baseApi";
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

export const getAllPayments = async (): Promise<Payment[]> => {
  try {
    const payments = await baseApi.get("/v1/payment", getConfig());
    if(!payments.data.success)
      throw new Error(payments.data.message);
    return payments.data.data;
  } catch (error) {
    throw error;
  }
}

export const getAllPartnerPayments = async (
  partner_id: number
): Promise<Payment[]> => {
  try {
    const payments = await baseApi.get(
      `/v1/payment/partner/${partner_id}`,
      getConfig()
    );
    if(!payments.data.success)
      throw new Error(payments.data.message);
    return payments.data.data;
  } catch (error) {
    throw error;
  }
};

export const createPaymentWithInvoice = async (
  payment: Payment,
  file: File
): Promise<Payment> => {
  try {
    const formData = new FormData();
    (Object.keys(payment) as (keyof Payment)[]).forEach((key: keyof Payment) => {
      formData.append(key, String(payment[key]));
    });
    formData.append("file", file);

    const response = await generalBaseApi.post(
      "/v1/payment/create/upload_invoice",
      formData,
      getConfig()
    );
    if(!response.data.success)
      throw new Error(response.data.message);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const uploadReceipt = async (
  payment_id: number,
  file: File
): Promise<Payment> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await generalBaseApi.post(
      `/v1/payment/${payment_id}/upload_receipt`,
      formData,
      getConfig()
    );
    if(!response.data.success)
      throw new Error(response.data.message);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
