import { baseApi } from '@/lib/baseApi';
import getConfig from '@/utils/getConfig';


const messageByReservation = 'v1/message_reservation/';

const createMessage = 'v1/message_detail/create';

const getAllMessageCreate = 'v1/message';

const createConversationE = 'v1/message/create';

const getAllByReservationMessage = async (user: any) => {
  try {
    const userid = {
      fk_reservation_id: user,
    };
    const result = await baseApi.post(
      messageByReservation,
      userid,
      getConfig()
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

const createMessageSocio = async (message: any) => {
  try {
    const mssg = {
      description: message.description,
      fk_message_id: message.fk_message_id,
      fk_user_id: message.fk_user_id,
    };
    const result = await baseApi.post(createMessage, mssg, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getAllMessage = async () => {
  try {
    const result = await baseApi.get(getAllMessageCreate, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const createConversation = async (created: any) => {
  try {
    const sss = {
        description : created.description,
        fk_reservation_id: created.fk_reservation_id,
    };
    const result = await baseApi.post(createConversationE, sss , getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

export {
  getAllByReservationMessage,
  createMessageSocio,
  getAllMessage,
  createConversation,
};
