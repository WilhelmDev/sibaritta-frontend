'use client'
import Image from 'next/image'
import HomeBanner from '@/components/organisms/HomeBanner';
import Footer from "@/components/ui/Footer";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { newRoutes } from '@/utils/routes';
import Carrousel from '@/components/carousel';
import ModalSession from '@/components/molecules/ModalSession';


export default function Nosotros () {
  const [openLogin, setOpenLogin] = useState(true)
  const [openRegistro, setOpenRegistro] = useState(false)
  const [openForgot, setOpenForgot] = useState(false)

  const closeModalLogin = () => {
    setOpenLogin(false);
  };

  const openModalRegistro = () => {
    setOpenRegistro(true);
    closeModalLogin();
  };

  const openModalForgot = () => {
    setOpenForgot(true);
    closeModalLogin();
  };

  useEffect(() => {
    AOS.init();

    const update = document.querySelector('body')
    update?.classList.add('fondoNosotros')
  }, [])

  return (
    <main className="quienesSomos">

      <div className="migajaPan">
        <div className="container-general">
          <div className="migajaPan__card " >
            <ul className="flex">
              <li>
                <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                  &gt; Home
                </Link>
              </li>
              <li className="activeMigaja">
                &gt; Eres sibaritta?
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="quienesSomos__top">
        <div className="container-general">
          <div className="quienesSomos__top__card" data-aos="fade-up" data-aos-duration="3000">
            <div className="flex   justify-center content-center	">
              <div className="lg:w-1/2 w-full">
                <div className="quienesSomos__top__card__titulo text-center">
                  <h5 className='tituloh5'>
                  CONVIÉRTETE EN UN CONOCEDOR SIBARITTA AUTÉNTICO, CAPAZ DE DISFRUTAR Y DISCERNIR HASTA LOS MATICES MÁS SUTILES

                  </h5>
                  <img src={"/abbout/imagenprincipal.png"} width={800} height={800} alt='logo'/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="quienesSomos__existo">
        <div className="container-general">
          <div className="lg:flex block">
            <div className="lg:w-1/3 w-full">
              <div className="quienesSomos__existo__left" data-aos="fade-right" data-aos-duration="3000">
                <h2 className="tituloh2">¿PARA QUIÉN <br/>EXISTO?</h2>
                <p>
                  Para los conocedores,<br/>
                  los selectos y curiosos,<br/>
                  los sensibles a la estética<br/>
                  y el buen gusto 

                </p>

              </div>
            </div>
            <div className="lg:w-1/4 w-full">
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="quienesSomos__existo__right flex items-end		justify-center	" data-aos="fade-left" data-aos-duration="3000">
                <div className="quienesSomos__existo__right__card">
                  <img src={"/Wisky.png"} className="w-100" alt='logo'/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quienesSomos__camino">
        <div className="container-fluid w-full">
          <div className="flex  flex-col-reverse lg:flex-row align-middle	">
            <div className="lg:w-1/2 w-100">
              <div className="quienesSomos__camino__left" data-aos="fade-right" data-aos-duration="3000">
                <img src={"/abbout/vinobotell.png"} width={1000} height={1000} alt='logo'/>

              </div>
            </div>

            <div className="lg:w-2/5 w-100 ">
              <div className="quienesSomos__camino__right" data-aos="fade-left" data-aos-duration="3000">
                <h2 className="tituloh2">Lo que aprenderás <br/>en el camino</h2>
                <p>
                  Aquí comienza tu nuevo estilo de vida donde aprenderás que un Sibarita® no es aquel que busca un simple sabor o una sensación pasajera.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quienesSomos__promesa">
        <div className="container-fluid w-full">
          <div className="lg:flex block">
            <div className="lg:w-1/2 w-100">
              <div className="quienesSomos__promesa__left">
                <div className="quienesSomos__promesa__left__titulo" data-aos="fade-right" data-aos-duration="3000">
                  <h2 className="tituloh2">Nuestra Promesa</h2>
                  <p>Conocerás la historia y la profundidad de cada sabor, textura, olor, sonido y sensación. Afinarás tu paladar, tus gustos y tu intelecto.</p>

                </div>
                <div className="quienesSomos__promesa__left__tenedor">
                  <img src={"/abbout/spaghettii.png"} width={745} height={921} alt='logo' data-aos="fade-up" data-aos-duration="3000"/>

                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-100">
              <div className="quienesSomos__promesa__right" data-aos="fade-left" data-aos-duration="3000">
                <img src={"/sopa.png"} alt='logo'/>
                <h2 className="tituloh2">¿QUIEN SOY <br/>EN TU VIDA?</h2>
                <p> 

                  Soy quien buscas cuando quieres desconectarte para conectarte<br/>
                  Soy la confianza y tu guía para descubrir nuevos lugares<br/>
                  Soy quien diseña cada experiencia y cuida cada detalle para que vivas cada momento como todo un MAESTRO SIBARITTA


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quienesSomos__inicia">
        <div className="container-general">
          <div className="lg:flex block justify-center">
            <div className="lg:w-1/4 w-100">
              <div className="quienesSomos__inicia__card text-center" data-aos="fade-up" data-aos-duration="3000">
                <h5 className="tituloh5">INICIA TU<br/> CAMINO<br/> SIBARITTA®</h5>
                <div className="boton boton--transparente ">
                  <Link href={newRoutes.experiencias} className="m-auto">VER EXPERIENCIAS</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalSession
            closeModalLogin={closeModalLogin}
            openModalRegistro={openModalRegistro}
            openRegistro={openRegistro}
            openLogin={openLogin}
            openModalForgot={openModalForgot}
          /> */}
      <Footer/>
    </main>
  );
}
