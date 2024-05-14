import { baseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";
const saveSuscriber = "v1/suscribers/save";

interface dataNewSuscriber {
  name: string,
  email: string,
  phone: string
}

export const saveNewSuscriber = async (data:dataNewSuscriber) => {
  try {
    const res = await baseApi.post(saveSuscriber, data)
    return res.data
  } catch (error) {
    throw Error('Ha ocurrido un error')
  }
}