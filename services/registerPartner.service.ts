import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

const registerPartner = "v1/partner/subscription";

const partnerRegister = async (dat: any) => {
  const info = {
    full_name: dat.full_name,
    comercial_name: dat.comercial_name,
    responsable_name: dat.responsable_name,
    business_email: dat.business_email,
    address: dat.address,
    city: dat.city,
    postal_code: dat.postal_code,
    rfc: dat.rfc,
    phone: dat.phone,
    google_ranking: dat.google_ranking,
    position: dat.position,
    comment: dat.comment,
    callback_url: dat.callback_url,
  };
  try {
    const result = await baseApi.post(registerPartner, info, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

export { partnerRegister };
