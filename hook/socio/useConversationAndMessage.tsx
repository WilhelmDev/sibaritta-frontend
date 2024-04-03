import { IMessage } from '@/interface/chatInterface';
import { createConversation } from '@/services/chatMessage.service';
import { useEffect, useState } from 'react';


export const useConversationAndMessage = ({nameExpe,setchat}:any) => {

    const createConversationAndMessage = async () => {
        try {
          // aqui creo la covnersacion
          const reservaId = localStorage.getItem('experienId');
          const conversationData = {
            description: nameExpe ,
            fk_reservation_id: reservaId,
          };
          const { data } = await createConversation(conversationData);
          setchat(data as IMessage);
        } catch (error) {
          console.log(error);
        }
      };

      return { createConversationAndMessage}

}

export default useConversationAndMessage;