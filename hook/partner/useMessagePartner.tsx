import { createMessagePartner } from '@/services/partner/chatMessagePartner.service';



export const useMessagePartner = ({descriptionAreaPartner, chat ,getMessage2,setdescriptionAreaPartner}:any) => {


    const posCreateMessagePartner = async () => {
        try {
          const userlogin = localStorage.getItem("fk_partner_id")
          const user = {
            description: descriptionAreaPartner,
            fk_message_id: chat?.id,
            fk_partner_id: userlogin,
          };
          const data = await createMessagePartner(user);
          getMessage2()
          setdescriptionAreaPartner('');
        } catch (error) {
          console.log(error);
        }
      };
       return { posCreateMessagePartner }
};

export default useMessagePartner;