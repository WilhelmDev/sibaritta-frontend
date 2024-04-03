import { createMessageSocio } from '@/services/chatMessage.service';
import { useEffect, useState } from 'react';


export const usePosCreateMessage = ({ descriptionArea, chat , getMessage, getMessage2,setdescriptionArea} :any) => {

    const posCreateMessage = async () => {
        try {
          
          const userlogin = localStorage.getItem("userid")
          
          const user = {
            description: descriptionArea,
            fk_message_id: chat?.id,
            fk_user_id: userlogin,
          };
          const data = await createMessageSocio(user);
          getMessage2()
          getMessage();
          setdescriptionArea('');
        } catch (error) {
          console.log(error);
        }
      };

      return { posCreateMessage}
};

export default usePosCreateMessage;