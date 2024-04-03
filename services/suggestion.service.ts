import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

const suggestion = "v1/suggestion";
const getAllSuggestion = async () => {
  try {
    const result = await baseApi.get(suggestion, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

export { getAllSuggestion };
