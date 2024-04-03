import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";

const loginEndpoint = "v1/authentication/login";
const loginFacebook = "v1/authentication/facebook";
const loginGoogle = "v1/authentication/google";
const createUser = "v1/authentication/create";
const confirmEmail = "v1/authentication/confirm";

const fetchLogin = async (data: any) => {
  try {
    const result = await baseApi.post(loginEndpoint, data);
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchCreateFacebook = async (data: any) => {
  try {
    const result = await baseApi.post(loginFacebook, data);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const fetchCreateGoogle = async (data: any) => {
  try {
    const result = await baseApi.post(loginGoogle, data);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const fetchCreateUser = async (data: any) => {
  try {
    const result = await baseApi.post(createUser, data);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id: number) => {
  try {
    const response = await baseApi.get(`v1/user/${id}`, getConfig());
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchConfirm = async (data: any) => {
  try {
    const result = await baseApi.post(confirmEmail, data);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export {
  fetchLogin,
  fetchCreateFacebook,
  fetchCreateGoogle,
  fetchCreateUser,
  getUserById,
  fetchConfirm,
};
