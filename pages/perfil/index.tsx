import PerfilSocio from '@/components/socio/PerfilSocio';
import React from 'react';
import SecurityPrivileges from '@/security/SecurityPrivileges';

function index() {
  return (
    <SecurityPrivileges>
      <div>
        <PerfilSocio />
      </div>
    </SecurityPrivileges>
  );
}

export default index;
