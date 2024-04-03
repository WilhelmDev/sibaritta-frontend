import { baseApi } from '@/lib/baseApi';
import getConfig from '@/utils/getConfig';

const createCalification = 'v1/calification/create';

const getCalificationUser = 'v1/calification_reservation/';

const createCalificationSocio = async (cal: any) => {
  try {
    const califi = {
      message: cal.message,
      ranking: cal.ranking,
      fk_reservation_id: cal.fk_reservation_id,
      fk_user_id: cal.fk_user_id,
    };
    const result = await baseApi.post(createCalification, califi, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getCalificationSocio = async (datSocio:any) => {
    try {
        const socio = {
            fk_reservation_id: datSocio.fk_reservation_id,
            fk_user_id: datSocio.fk_user_id
        }
        const result = await baseApi.post(getCalificationUser,socio, getConfig());
        return result.data
    } catch (error) {
        throw error
    }
}





export { createCalificationSocio, getCalificationSocio }