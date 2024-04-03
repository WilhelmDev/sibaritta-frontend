import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";
const supportEndpoint = "v1/support/create";
const fetchSupport = async (data: any) => {
  try {
    const config = getConfig() || {};
    const result = await baseApi.post(supportEndpoint, data, config);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export { fetchSupport };
