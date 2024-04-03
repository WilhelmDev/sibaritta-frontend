import { baseApi } from '@/lib/baseApi';
import getConfig from '@/utils/getConfig';


const createMessage = 'v1/message_detail/create';

const createMessagePartner = async (message: any) => {
    try {
      const mssg = {
        description: message.description,
        fk_message_id: message.fk_message_id,
        fk_partner_id: message.fk_partner_id,
      };
      const result = await baseApi.post(createMessage, mssg, getConfig());
      return result.data;
    } catch (error) {
      throw error;
    }
  };


  export {
    createMessagePartner
  }