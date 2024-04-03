import React, { useState } from 'react';
import Image from 'next/image';

import NotificationSocio from '@/components/socio/NotificationSocio';
import SecurityPrivileges from '@/security/SecurityPrivileges';
import useNotification from '@/hook/socio/useNotification';

const Index = () => {
  const { consultas } = useNotification();

  const [read, setread] = useState<number>(1);

  const parnet = consultas?.filter((consu) => {
    const parnets = consu?.read_user === false;
    return parnets;
  });

  const parnetTwo = consultas?.filter((consu) => {
    const parnets = consu?.read_user === true;
    return parnets;
  });

  const notifiProps = {
    read: read,
    setread: setread,
    parnet: parnet,
    parnetTwo: parnetTwo,
  };

  return (
    <SecurityPrivileges>
      <div className='reservacion-container'>
        <div className='payments  main-page'>
          <div className='payments-img'>
            <Image
              alt=''
              src={'/payment/paymentBg.jpg'}
              width={1000}
              height={1000}
              className=' w-full h-full'
            />
          </div>

          <div className='payments-img-desktop'>
            <Image
              alt=''
              src={'/payment/paymentBg-desktop.jpg'}
              width={1000}
              height={1000}
              className=' w-full h-full'
            />
          </div>

          <NotificationSocio notifiProps={notifiProps} />
        </div>
      </div>
    </SecurityPrivileges>
  );
};

export default Index;
