import PerfilSocio from '@/components/socio/PerfilSocio';
import { useEffect } from 'react';
import SecurityPrivileges from '@/security/SecurityPrivileges';
import Encuesta from "../../components/encuesta/Encuesta";
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Profile = dynamic(() => import('@/components3/socio/Perfil'), { ssr: false })

export default function Perfil () {
  useEffect(() => {
    const update = document.querySelector('body')
    update?.classList.add('fondoPerfil')
  }, [])
  return (
    <SecurityPrivileges>
      <Profile />
    </SecurityPrivileges>
  );
}

