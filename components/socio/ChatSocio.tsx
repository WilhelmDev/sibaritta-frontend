import { formatearFechaReserva } from '@/utils/formaterDate'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function ChatSocio({socioChats , partnerChats }:any) {
  
    const [useTypeNumber, setUseTypeNumber] = useState<any>(null);


    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
          const storedUserId = localStorage.getItem("fk_typeuser");
          const userId = storedUserId ? parseInt(storedUserId, 10) : null;
          setUseTypeNumber(userId);
        }
      }, []);


  return (
    <>
    {
        useTypeNumber === 1 && <>
         <div className='chat-response'>
        <div className='perfil-chat-user'>
          <p onClick={() => router.push('/notificaciones')}>
            Volver a notificaciones
          </p>
          <div className='perfil-info-user-chat'>
            <h2>{socioChats.chat?.reservation?.user_name || "name"}</h2>
            <p>{socioChats.chat?.reservation?.user_email || "email"}</p>
            <h4>+ {socioChats.chat?.user_meta?.map((use:any) => <span key={use.id}>{use?.meta_value}</span>) || "nubmer"}</h4>
            <h3>Orden: {(+socioChats?.chat?.reservation?.id || 0) + 300}</h3>
          </div>
        </div>
        <div className='message-chat-response'>
          <h2>Notificaciones</h2>
          <h4>{socioChats.chat?.description || '-------'}</h4>
          <div className='  overflow-y-scroll p-[2rem] '>
            {socioChats.chat?.details?.sort((a:{id : number}, b:{id : number}) => a.id - b.id)?.map((mesa:any) => (
                <div key={mesa.id} className='user-message- '>
                  <div className='user-message-date'>
                    <h3 className={`${mesa?.fk_partner_id && "!text-[#F89C53]"}`}>
                    {mesa?.fk_user_id  && socioChats.users ||
                        mesa?.fk_partner_id && socioChats?.partnerName }
                    
                    </h3>
                    <p>
                      {formatearFechaReserva(mesa?.createdAt) ||
                        '14/01/2024 8:25am'}
                    </p>
                  </div>
                  <p className='message-user-__-'>
                    {mesa?.description ||
                      'Hola tengo  tuve un problema en la mesa y quisiera contactar a algun agente'}{' '}
                  </p>
                </div>
              ))}
          </div>

          <div className='chat-send-btns'>
            <textarea
              value={socioChats.descriptionArea}
              onChange={socioChats.capturaArea}
              placeholder='Escriba el mensaje ...........'
            ></textarea>
            <button onClick={socioChats.posCreateMessage}>Enviar</button>
          </div>
        </div>
        <div></div>
      </div>
        
        </>
    }
    {
        useTypeNumber === 2 && 
        <div className='chat-response'>
        <div className='perfil-chat-user'>
          <p onClick={() => router.push('/notificacion_partner')}>
            Volver a notificaciones
          </p>
          <div className='perfil-info-user-chat'>
            <h2>{partnerChats?.chat?.reservation?.user_name || "name"}</h2>
            <p>{partnerChats?.chat?.reservation?.user_email || "email"}</p>
            <h4>+ {partnerChats?.chat?.user_meta?.map((use:any) => <span key={use.id}>{use?.meta_value}</span>) || "nubmer"}</h4>
            <h3>Orden: {(+partnerChats?.chat?.reservation?.id || 0) + 300}</h3>
          </div>
        </div>
        <div className='message-chat-response'>
          <h2>Notificaciones</h2>
          <h4>{partnerChats?.chat?.description || '-------'}</h4>
          <div className='  overflow-y-scroll p-[2rem] '>
            {partnerChats?.chat?.details?.sort((a:{id : number}, b:{id : number}) => a.id - b.id)?.map((mesa:any) => (
                <div key={mesa.id} className='user-message- '>
                  <div className='user-message-date'>
                    <h3 className={`${mesa?.fk_partner_id && "!text-[#F89C53]"}`}>
                    {mesa?.fk_user_id  && partnerChats?.socio ||
                        mesa?.fk_partner_id &&  partnerChats?.usersPartner }
                    </h3>
                    <p>
                      {formatearFechaReserva(mesa?.createdAt) ||
                        '14/01/2024 8:25am'}
                    </p>
                  </div>
                  <p className='message-user-__-'>
                    {mesa?.description ||
                      'Hola tengo  tuve un problema en la mesa y quisiera contactar a algun agente'}{' '}
                  </p>
                </div>
                
              ))}
          </div>

          <div className='chat-send-btns'>
            <textarea
              value={partnerChats?.descriptionAreaPartner}
              onChange={partnerChats?.capturaAreaPart}
              placeholder='Escriba el mensaje ...........'
            ></textarea>
            <button onClick={partnerChats?.posCreateMessagePartner}>Enviar</button>
          </div>
        </div>
        <div></div>
      </div>
    }
    </>
   
  )
}

export default ChatSocio