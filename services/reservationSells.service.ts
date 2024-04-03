import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

const getAllPartnerSell = async (
  start_date: any,
  end_date: any,
  user_id: any,
  completed_canceled_all: string
) => {
  try {
    const gellSellPartners =
      "v1/reservation_partner_sells?start_date=" +
      start_date +
      "&end_date=" +
      end_date +
      "&fk_user_id=" +
      `${
        completed_canceled_all !== "all"
          ? user_id + "&status=" + completed_canceled_all
          : user_id
      }`;
    const result = await baseApi.get(gellSellPartners, getConfig());
    return result;
  } catch (error) {
    throw error;
  }
};

export { getAllPartnerSell };
