import { IMessage } from '@/interface/chatInterface';
import { getAllByReservationMessage } from '@/services/chatMessage.service';
import { useEffect, useRef, useState } from 'react';


export const useMesaReservations = ({setchat,createConversationAndMessage,createConversationAndMessageCalled}:any) => {
    
    
    const getMessage = async () => {
        try {
          const reservaId = localStorage.getItem('experienId');
          
          const { data } = await getAllByReservationMessage(reservaId);
          if (data.length !== 0) {
            setchat(data as IMessage);
          } else {
            if (!createConversationAndMessageCalled.current) {
              createConversationAndMessage();
              createConversationAndMessageCalled.current = true;
            }
          }
        } catch (error) {
          console.log(error);
        }
      };

      return { getMessage }
};

export default useMesaReservations;