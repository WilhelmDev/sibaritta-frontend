import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

const urlPut = "v1/partner/";

interface Partner {
  id: number;
  full_name: string;
  comercial_name: string;
  responsable_name: string;
  business_email: string;
  address: string | null;
  postal_code: string | null;
  rfc: string | null;
  phone1: string | null;
  phone2: string | null;
  position_id: number;
  contact_body: string | null;
  status: 'active' | 'pending' | 'deleted';
  createdAt: Date;
  updatedAt: Date;
}

const getPartnerByUserId = async (id: number): Promise<Partner> => {
  try {
    const result = await baseApi.get(`/v1/user/${id}/partner`, getConfig());
    return result.data.data;
  } catch (error) {
    throw error;
  }
}

const updatePerfil = async (id: any, data: any) => {
  try {
    const result = await baseApi.put(urlPut + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

const createPartner = async (data: any) => {
  try {
    const result = await baseApi.post("v1/partner/create", data, {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

const partner_sendemail = async (data: any) => {
  try {
    const result = await baseApi.post("v1/partner_sendemail", data, {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export { updatePerfil, createPartner, partner_sendemail, getPartnerByUserId };

//  const formData = new FormData();

//  formData.append("userfile", data.file);
