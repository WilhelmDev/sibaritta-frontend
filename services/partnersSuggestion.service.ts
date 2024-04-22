import { baseApi } from '@/lib/baseApi';
import getConfig from '@/utils/getConfig';

const createSuggestion = 'v1/suggestion/create';
const allPartnersReservations = "v1/reservation_partner"
const allPartnersReservationsOrder = "v1/reservation_partner_order"

const CreateSuggestions = async (data: any) => {
  try {
    
    const result = await baseApi.post(createSuggestion, data, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};


const getAllServicePartners = async (partners:any) => {
  try {
    const  part = {
      fk_user_id: partners.fk_user_id
    }
    const result = await baseApi.post(allPartnersReservations, part ,getConfig());
    return result.data
  } catch (error) {
    throw error
  }
}

const getAllServicePartnersOrder = async (partners:any) => {
  try {
    const  part = {
      fk_user_id: partners.fk_user_id
    }
    const result = await baseApi.post(allPartnersReservationsOrder, part ,getConfig());
    return result.data
  } catch (error) {
    throw error
  }
}



export  { CreateSuggestions , getAllServicePartners, getAllServicePartnersOrder }
