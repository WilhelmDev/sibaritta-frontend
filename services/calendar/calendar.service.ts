import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";
const calendar = "v1/experience_partner_calendar/";
const getCalendar = async (id: any, paramsObj: any) => {
  try {
    const result = await baseApi.get(`${calendar}${id}`, {
      ...getConfig(),
      params: paramsObj,
    });
    return result;
  } catch (error) {
    throw error;
  }
};
export { getCalendar };
