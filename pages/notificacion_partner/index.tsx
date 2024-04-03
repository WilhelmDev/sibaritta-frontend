import NotificationSocio from '@/components/socio/NotificationSocio';
import useNotification from '@/hook/socio/useNotification';

import React from 'react';

function Index() {
  const { consultas } = useNotification();

  const parnet = consultas?.filter((consu) => {
    const parnets = consu?.read_partner === false;
    return parnets;
  });
  const parnetTwo = consultas?.filter((consu) => {
    const parnets = consu?.read_partner === true;
    return parnets;
  });

  const nofityPropsPartner = {
    parnetTwo: parnetTwo,
    parnet: parnet,
  };

  return (
    <div className=''>
      <NotificationSocio nofityPropsPartner={nofityPropsPartner} />
    </div>
  );
}

export default Index;
