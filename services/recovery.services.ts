import { baseApi } from "@/lib/baseApi";

const updatePassword = "v1/authentication/confirmrecover";

const passwordRecovery = "v1/authentication/recover";

const fechtRecoveryPassword = async (data: any) => {
  try {
    const result = await baseApi.post(passwordRecovery, data);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const fechtUpdatePassowrd = async (data: any) => {
  try {
    const result = await baseApi.post(updatePassword, data);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export { fechtRecoveryPassword, fechtUpdatePassowrd };
