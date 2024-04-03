import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

const urlPut = "v1/partner/";

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

export { updatePerfil, createPartner, partner_sendemail };

//  const formData = new FormData();

//  formData.append("userfile", data.file);
