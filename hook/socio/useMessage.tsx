import { IMessage } from '@/interface/chatInterface';
import { getMessageNotify } from '@/services/notifyMessage.service';


export const useMessage = ({setchat,notifyId}:any) => {
  
    const getMessage2 = async () => {

        try {
          
          const { data } = await getMessageNotify(notifyId);
          if (data.length !== 0) {
            
            setchat(data as IMessage);
          }
          
        } catch (error) {
          console.log(error);
        }
      };

      return {getMessage2}
};

export default useMessage;