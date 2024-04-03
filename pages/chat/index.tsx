import React, { useEffect, useRef, useState } from 'react';
import { IMessage } from '@/interface/chatInterface';
import ChatSocio from '@/components/socio/ChatSocio';
import SecurityPrivileges from '@/security/SecurityPrivileges';
import { useRouter } from 'next/router';
import useMesaReservations from '../../hook/socio/useMesaReservations';
import useConversationAndMessage from '@/hook/socio/useConversationAndMessage';
import useMessage from '@/hook/socio/useMessage';
import usePosCreateMessage from '@/hook/socio/usePosCreateMessage';

function Index() {
  const [chat, setchat] = useState<IMessage>();
  const [descriptionArea, setdescriptionArea] = useState<string>('');
  const createConversationAndMessageCalled = useRef(false);

  let notifyId;

  if (typeof window !== 'undefined') {
    // Access localStorage only in the client-side environment
    notifyId = localStorage.getItem('notifyId');
  }

  let reservaId;
  if(typeof window !== 'undefined'){
    reservaId = localStorage.getItem("experienId");
  } 
  const router = useRouter();

  const nameExpe = router.query.data;

  const { createConversationAndMessage } = useConversationAndMessage({
    nameExpe,
    setchat,
  });

  const { getMessage } = useMesaReservations({
    setchat,
    createConversationAndMessage,
    createConversationAndMessageCalled
  });

  const { getMessage2 } = useMessage({ setchat, notifyId });

  const { posCreateMessage } = usePosCreateMessage({
    descriptionArea,
    chat,
    getMessage,
    getMessage2,
    setdescriptionArea,
  });

  useEffect(() => {
    const reservaId = localStorage.getItem("experienId");
    
    // Verifica primero si hay un reservaId
    if (reservaId) {
      getMessage();
    } else  {
      // Si no hay reservaId pero hay notifyId, llama a getMessage2
      getMessage2();
    }
  }, []);

  const capturaArea = (e: any) => {
    setdescriptionArea(e.target.value);
  };

  const users = chat?.reservation?.user_name;
  const partnerName = chat?.partner?.comercial_name;

  const socioChats = {
    chat: chat,
    descriptionArea: descriptionArea,
    users: users,
    capturaArea: capturaArea,
    posCreateMessage: posCreateMessage,
    partnerName: partnerName,
  };
  return (
    <SecurityPrivileges>
      <div className='chat-box_ main-page'>
        <ChatSocio socioChats={socioChats} />
      </div>
    </SecurityPrivileges>
  );
}

export default Index;
