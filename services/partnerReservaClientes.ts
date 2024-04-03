import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

const getAllPartnerSell = async (id: any) => {
  try {
    const gellSellPartners = `/v1/reservation_partner_detail?fk_detail_id=${id}`;
    const result = await baseApi.get(gellSellPartners, getConfig());
    return result;
  } catch (error) {
    throw error;
  }
};

export { getAllPartnerSell };
