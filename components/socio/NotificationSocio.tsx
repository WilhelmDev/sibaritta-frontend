import React, { useEffect, useState } from 'react';
import { Container } from '../globals/Container';
import { useRouter } from 'next/router';
import { formatearHoraotification } from '@/utils/formaterDate';
import { updateSocioNotify } from '@/services/notifyMessage.service';
import { updatePartnerNotify } from '@/services/partner/updateNotification.service';
import ModalNotifyCalification from './ModalNotifyCalification';
import useOpenModal from '@/hook/global/useOpenModal';

function NotificationSocio({ notifiProps, nofityPropsPartner }: any) {
  
  const [useTypeNumber, setUseTypeNumber] = useState<any>(null);

  const { visible , closeModals , opeModals } = useOpenModal()

  const [numberOne, setnumberOne] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserId = localStorage.getItem('fk_typeuser');
      const userId = storedUserId ? parseInt(storedUserId, 10) : null;
      setUseTypeNumber(userId);
    }
  }, []);

  const [currentTime, setCurrentTime] = useState(Date.now());

  const updateCurrentTime = () => {
    setCurrentTime(Date.now());
  };

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 60000); // Actualiza cada minuto

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []);
  const router = useRouter();

  
  const updateNotificationsPartner = async (id:any) => {
    try {
      const idNotifications =  id
      const read = { read_partner: true }
      const datos = await updatePartnerNotify(idNotifications,read);
      console.log(datos)
    } catch (error) {
      console.log(error)
    }
  } 
 

  const updateNotificationsSocio = async (id:any) => {
    try {
      const idNotifications =  id
      const read = { read_user: true }
      const datos = await updateSocioNotify(idNotifications,read);
    } catch (error) {
      console.log(error)
    }
  } 
  


  return (
    <div
      className={`${
        useTypeNumber === 1
          ? 'payments-container'
          : 'container_partner_notifications'
      }  bg-[#252127] `}
    >
      <Container className='paymenst-box-notifis--_ '>
        {useTypeNumber === 1 && (
          <>
            {notifiProps?.read === 1 && (
              <>
                <div className={`paymets-notify`}>
                  <h2>Notificaciones</h2>
                  <div className='paymets-notify-btns'>
                    <button
                      onClick={() => notifiProps?.setread(1)}
                      className={`${notifiProps?.read !== 1 && 'bg-[white]'}`}
                    >
                      Todas
                    </button>
                    <button
                      onClick={() => notifiProps?.setread(2)}
                      className='btns-two-notify-'
                    >
                      No leidas
                    </button>
                  </div>
                </div>
                <div className='unread_notifications'>
                  <h3>Nuevas (No leidas)</h3>
                  <div className='box_notify-alert'>
                    {notifiProps?.parnet
                      ?.sort(
                        (a: { id: number }, b: { id: number }) => a.id - b.id
                      )
                      .map((consul: any) => (
                        <div
                          key={consul?.id}
                          className='unread_notifications--'
                        >
                          <h4>{consul?.description}</h4>
                          <div className='unread_notifications--btns'>
                            <button className='btn--notify-unread-1'>
                              {' '}
                              {formatearHoraotification(
                                consul?.createdAt,
                                currentTime
                              )}
                            </button>
                            <button
                               onClick={() => {
                                localStorage.setItem(
                                  'notifyId',
                                  `${consul?.item_id}`
                                );
                                updateNotificationsSocio(consul?.id)
                                consul?.type === "consulta" && router.push('/chat');
                              }}
                              className='btn--notify-unread'
                            >
                              Ver
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className='launch-notification'>
                  <div className='notification-launch-'>
                    <p>Has recibido una votacion</p>
                    <div className='notification-btns-launch'>
                      <button className='btn--notify-unread-1'>Hace 1hr</button>
                      <button className='btn--notify-unread'>Ver</button>
                    </div>
                  </div>
                </div>

                <div className='unread_notifications'>
                  <h3>Anteriores (ya leidas)</h3>
                  <div className='box_notify-alert'>
                    {notifiProps?.parnetTwo
                      ?.sort(
                        (a: { id: number }, b: { id: number }) => a.id - b.id
                      )
                      .map((consul: any) => (
                        <div
                          key={consul?.id}
                          className='unread_notifications--'
                        >
                          <h4>{consul?.description}</h4>
                          <div className='unread_notifications--btns'>
                            <button className='btn--notify-unread-1'>
                              {' '}
                              {formatearHoraotification(
                                consul?.createdAt,
                                currentTime
                              )}
                            </button>
                            <button
                              onClick={() => {
                                localStorage.setItem(
                                  'notifyId',
                                  `${consul?.item_id}`
                                );
                                updateNotificationsSocio(consul?.id)
                                consul?.type === "consulta" && router.push('/chat');
                                
                              }}
                              className='btn--notify-unread'
                            >
                              Ver
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
            {notifiProps?.read === 2 && (
              <>
                <div className={`paymets-notify`}>
                  <h2>Notificaciones</h2>
                  <div className='paymets-notify-btns'>
                    <button
                      onClick={() => notifiProps?.setread(1)}
                      className={`${
                        notifiProps?.read === 2 && '!bg-[#E1D4C4]'
                      }`}
                    >
                      Todas
                    </button>
                    <button
                      onClick={() => notifiProps?.setread(2)}
                      className={`btns-two-notify-  ${
                        notifiProps.read === 2 && '!bg-[#F89C53]'
                      }`}
                    >
                      No leidas
                    </button>
                  </div>
                </div>

                <div className='unread_notifications'>
                  <h3>Nuevas (No leidas)</h3>
                  <div className='box_notify-alert-Two'>
                    {notifiProps?.parnet
                      ?.sort(
                        (a: { id: number }, b: { id: number }) => a.id - b.id
                      )
                      .map((consul: any) => (
                        <div key={consul.id} className='unread_notifications--'>
                          <h4>{consul?.description}</h4>
                          <div className='unread_notifications--btns'>
                            <button className='btn--notify-unread-1'>
                              {formatearHoraotification(
                                consul.createdAt,
                                currentTime
                              )}
                            </button>
                            <button
                              onClick={() => {
                                localStorage.setItem(
                                  'notifyId',
                                  `${consul?.item_id}`
                                );
                                updateNotificationsSocio(consul?.id)
                                consul?.type === "consulta" && router.push('/chat');
                                
                              }}
                              className='btn--notify-unread'
                            >
                              Ver
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
        {useTypeNumber === 2 && (
          <>
            <Container className='paymenst-box-notifis--_ main-page'>
              <>
                {numberOne === 1 && (
                  <>
                    <div className={`paymets-notify`}>
                      <h2>Notificaciones</h2>
                      <div className='paymets-notify-btns'>
                        <button
                          onClick={() => setnumberOne(1)}
                          className={`${numberOne !== 1 && 'bg-[white]'}`}
                        >
                          Todas
                        </button>
                        <button
                          onClick={() => setnumberOne(2)}
                          className='btns-two-notify-'
                        >
                          No leidas
                        </button>
                      </div>
                    </div>
                    <div className='unread_notifications'>
                      <h3>Nuevas (No leidas)</h3>
                      <div className='box_notify-alert'>
                        {nofityPropsPartner?.parnet
                          ?.sort(
                            (a: { id: number }, b: { id: number }) =>
                              a.id - b.id
                          )
                          .map((consul: any) => (
                            <div
                              key={consul?.id}
                              className='unread_notifications--'
                            >
                              <h4>{consul?.description}</h4>
                              <div className='unread_notifications--btns'>
                                <button className='btn--notify-unread-1'>
                                  {' '}
                                  {formatearHoraotification(
                                    consul?.createdAt,
                                    currentTime
                                  )}
                                </button>
                                <button
                                  onClick={() => {
                                    updateNotificationsPartner(consul?.id)
                                    if(consul?.type === "consulta"){
                                      localStorage.setItem('notifyId',`${consul?.item_id}`);
                                        router.push('/partner_chat');
                                        
                                    };
                                    
                                    if( consul?.type === "calif_socio"){
                                     opeModals()
                                    }
                                  }}
                                  className='btn--notify-unread'
                                >
                                  Ver
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className='launch-notification'>
                      <div className='notification-launch-'>
                        <p>Has recibido una votacion</p>
                        <div className='notification-btns-launch'>
                          <button className='btn--notify-unread-1'>
                            Hace 1hr
                          </button>
                          <button className='btn--notify-unread'>Ver</button>
                        </div>
                      </div>
                    </div>

                    <div className='unread_notifications'>
                      <h3>Anteriores (ya leidas)</h3>
                      <div className='box_notify-alert'>
                        {nofityPropsPartner?.parnetTwo
                          ?.sort(
                            (a: { id: number }, b: { id: number }) =>
                              a.id - b.id
                          )
                          .map((consul: any) => (
                            <div
                              key={consul?.id}
                              className='unread_notifications--'
                            >
                              <h4>{consul?.description}</h4>
                              <div className='unread_notifications--btns'>
                                <button className='btn--notify-unread-1'>
                                  {' '}
                                  {formatearHoraotification(
                                    consul?.createdAt,
                                    currentTime
                                  )}
                                </button>
                                <button
                                   onClick={() => {
                                    updateNotificationsPartner(consul?.id)
                                    if(consul?.type === "consulta"){
                                      localStorage.setItem('notifyId',`${consul?.item_id}`);
                                        router.push('/partner_chat');
                                        
                                    };
                                    
                                    if( consul?.type === "calif_socio"){
                                     opeModals()
                                    }
                                  }}
                                  className='btn--notify-unread'
                                >
                                  Ver
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                )}
                {numberOne === 2 && (
                  <>
                    <div className={`paymets-notify`}>
                      <h2>Notificaciones</h2>
                      <div className='paymets-notify-btns'>
                        <button
                          onClick={() => setnumberOne(1)}
                          className={`${numberOne === 2 && '!bg-[#E1D4C4]'}`}
                        >
                          Todas
                        </button>
                        <button
                          onClick={() => setnumberOne(2)}
                          className={`btns-two-notify-  ${
                            numberOne === 2 && '!bg-[#F89C53]'
                          }`}
                        >
                          No leidas
                        </button>
                      </div>
                    </div>

                    <div className='unread_notifications'>
                      <h3>Nuevas (No leidas)</h3>
                      <div className='box_notify-alert-Two'>
                        {nofityPropsPartner?.parnet
                          ?.sort(
                            (a: { id: number }, b: { id: number }) =>
                              a.id - b.id
                          )
                          .map((consul: any) => (
                            <div
                              key={consul.id}
                              className='unread_notifications--'
                            >
                              <h4>{consul?.description}</h4>
                              <div className='unread_notifications--btns'>
                                <button className='btn--notify-unread-1'>
                                  {formatearHoraotification(
                                    consul.createdAt,
                                    currentTime
                                  )}
                                </button>
                                <button
                                   onClick={() => {
                                    updateNotificationsPartner(consul?.id)
                                    if(consul?.type === "consulta"){
                                      localStorage.setItem('notifyId',`${consul?.item_id}`);
                                        router.push('/partner_chat');
                                        
                                    };
                                    
                                    if( consul?.type === "calif_socio"){
                                     opeModals()
                                    }
                                  }}
                                  className='btn--notify-unread'
                                >
                                  Ver
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                )}
              </>
            </Container>
          </>
        )}
      </Container>
      <ModalNotifyCalification visible={visible} closeModal={closeModals}/>
    </div>
  );
}

export default NotificationSocio;
