import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

const experienceEndpoint = "v1/experience/findparams?page=0&size=100";
const experienceOther = "v1/experience_other?page=0&size=5";

const fetchExperienceByCategory = async (data: any) => {
  try {
    const requestBody = {
      fk_category: data.fk_category,
      seats: data.count,
      fk_city: data.selectCityId,
      date_experience: data.dateFormart,
    };

    const result = await baseApi.post(experienceEndpoint, requestBody);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const checkoutExperience = async () => {
  try {
    const result = await baseApi.get(experienceOther, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const fetchExperienceByCategoryPartner = async (data: any) => {
  try {
    const requestBody = {
      fk_partner_id: data.fk_partner_id,
      seats: data.count,
      fk_city: data.selectCityId,
      date_experience: data.dateFormart,
    };

    const result = await baseApi.post(experienceEndpoint, requestBody);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export { fetchExperienceByCategory, checkoutExperience,fetchExperienceByCategoryPartner };
