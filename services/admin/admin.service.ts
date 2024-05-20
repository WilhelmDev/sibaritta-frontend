import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";
const path = "/v1/partner/";

const getPartAll = async () => {
  try {
    const result = await baseApi.get(`/v1/user_type/2`, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getPartById = async (id: number) => {
  try {
    const result = await baseApi.get(`/v1/partner/${id}`, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getClient = async () => {
  try {
    const result = await baseApi.get(`/v1/user_type/1`, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getAllPartnerGeneral = async () => {
  try {
    const result = await baseApi.get(`/v1/partner`, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getAllSubscribers = async () => {
  try {
    const { data } = await baseApi.get(`/v1/suscribers`, getConfig());
    return data;
  } catch (error) {
    throw error;
  }
}

export { getPartAll, getPartById, getClient, getAllPartnerGeneral, getAllSubscribers };
