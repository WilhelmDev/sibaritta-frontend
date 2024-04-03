import ChatSocio from '@/components/socio/ChatSocio';
import useMessagePartner from '@/hook/partner/useMessagePartner';
import useMessage from '@/hook/socio/useMessage';
import { IMessage } from '@/interface/chatInterface';
import { getMessageNotify } from '@/services/notifyMessage.service';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Index() {
  const [chat, setchat] = useState<IMessage>();

  const router = useRouter()

  const [descriptionAreaPartner, setdescriptionAreaPartner] =
    useState<string>('');

  let notifyId;
  if (typeof window !== 'undefined') {
    // Access localStorage only in the client-side environment
    notifyId = localStorage.getItem('notifyId');
  }

  const clientePartner = router.query.data;

 
  const getMessage5 = async () => {

    try {
      
      const { data } = await getMessageNotify(clientePartner);
      if (data.length !== 0) {
        
        setchat(data as IMessage);
      }
      
    } catch (error) {
      console.log(error);
    }
  };



  const { getMessage2 } = useMessage({ setchat, notifyId  });

  const { posCreateMessagePartner } = useMessagePartner({
    descriptionAreaPartner,
    chat,
    getMessage2,
    setdescriptionAreaPartner,
  });

  useEffect(() => {
    const notifyId = localStorage.getItem('notifyId');
    const clientePartner = router.query.data;
    if (notifyId) {
      
      getMessage2();
    }
    if(clientePartner){
      getMessage5()
    }
    
    
  }, []);

  const capturaAreaPart = (e: any) => {
    setdescriptionAreaPartner(e.target.value);
  };

  const usersPartner = chat?.partner?.comercial_name;
  const socio = chat?.reservation?.user_name;
  const partnerChats = {
    chat: chat,
    descriptionAreaPartner: descriptionAreaPartner,
    usersPartner: usersPartner,
    socio: socio,
    capturaAreaPart: capturaAreaPart,
    posCreateMessagePartner: posCreateMessagePartner,
  };

  return (
    <div className='chat-box_ main-page'>
      <ChatSocio partnerChats={partnerChats} />
    </div>
  );
}

export default Index;
