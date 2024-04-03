import { baseApi } from '@/lib/baseApi';
import getConfig from '@/utils/getConfig';

const notifySocio = "v1/notification/findparams?page=0&size=10"
const idNotyfi = "v1/message/"

const getAllNotyfi = async (socio:any) => {
    try {
        const noty = {
            fk_user_id : socio
        }
        const result = await baseApi.post(notifySocio, noty , getConfig());
        return result.data ;
    } catch (error) {
        throw error
    }
}


const getMessageNotify = async (ides:any) => {
    try {
        const result = await baseApi.get(`${idNotyfi}${ides}` , getConfig())
        return result.data
    } catch (error) {
        throw error
    }
}


const updateSocioNotify = async (id:any,read:any) => {
    try {
        const read_socio = {
            read_user : read.read_user
        }

        const result = await baseApi.put(`v1/notification/${id}`,read_socio,getConfig());
        return result.data;
    } catch (error) {
        throw error
    }
}

export { getAllNotyfi, getMessageNotify , updateSocioNotify }


