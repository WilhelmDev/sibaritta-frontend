import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";
const updateUserURL = "v2/user/";
const getUserByIdd = "v1/user/";

const getUserById = async (id: number) => {
  try {
    const result = await baseApi.get(getUserByIdd + id, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id: any, data: any) => {
  try {
    const result = await baseApi.put(updateUserURL + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

// const updateUser = async (data: any, id: number) => {
//   try {
//     const result = await baseApi.put(updateUserURL + id, data, getConfig());
//     return result.data;
//   } catch (error) {
//     throw error;
//   }
// };

export { updateUser, getUserById };
