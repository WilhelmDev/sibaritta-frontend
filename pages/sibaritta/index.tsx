import Head from 'next/head'
import style from '../Home/Home.module.css'
import SwiperProvider from '../Home/heroSwiper/SwiperContext'
import HeroSwiper from '../Home/heroSwiper'
import NavPoints from '@/components2/NavPoints'
import RestauranteFooter from '../Home/restauranteFooter'
import SectionBase from '@/components2/SectionBase'
import SectionExperience from '../Home/sections/experience'
import SectionReserva from '../Home/sections/reserva'
import SectionDescription from '../Home/sections/description'
import SectionPartners from '../Home/sections/partners'
import SectionConcierge from '../Home/sections/concierge'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'



export default function Sibarita() {

  const [eventMouse, seteventMouse] = useState();

  const router = useRouter();

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");

    // user_id === "1" ? router.push("/") : "";
    user_id === "2"?router.push("/home_partner"):"";
    user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    SecurityPrivileges();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleWheel = (e: any) => {
    seteventMouse(e);
  };


  

  
  return (
    < div onWheel={handleWheel}>
      <Head >
        <title>Sibaritta</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${style.main} main-page`}>
        <SwiperProvider>
          <HeroSwiper />
        </SwiperProvider>
        
        <NavPoints />
        <RestauranteFooter />

        <SectionBase direction='right'>
          <SectionExperience />
        </SectionBase>

        <SectionBase direction='left'>
          <SectionReserva />
        </SectionBase>

        <SectionDescription />

        <SectionPartners />

        <SectionConcierge />
      </main>
    </div>
  )
}
