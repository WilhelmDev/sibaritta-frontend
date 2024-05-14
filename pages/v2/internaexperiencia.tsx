'use client'
import Image from 'next/image'
import HomeBanner from '@/components/organisms/HomeBanner';
import Footer from "@/components/ui/Footer";
import HomeBusiness from "@/components/organisms/HomeBusiness";

import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { productsDataTest} from '@/utils/data'
import Carrousel from '@/components/carousel';
import CarouselV2 from '@/components/carousel/v2';
import Eventos from '@/components/carousel/v2';
import ModalExperiencia from './modalanyer';
import Link from 'next/link';
import { newRoutes } from '@/utils/routes';
import { IDetalle } from '@/interface/reservacion';


export default function Experiencia () {

  const [products, setProducts] = useState(productsDataTest);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product:any) => {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  };

  const productTemplate = (product:any) => {
    return (
        <div className="border-1 surface-border p-jc-center border-round m-2 text-center py-5 px-3" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <div className="mb-3">
                <img src={"/abbout/imagenprincipal.png"} alt={product.name} className="w-full"  />
            </div>
            <div>
                {/* <h4 className="mb-1">{product.name}</h4> */}
                {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
                {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                    <Button icon="pi pi-search" rounded />
                    <Button icon="pi pi-star-fill" rounded severity="success" />
                </div> */}
            </div>
        </div>
    );
};

  useEffect(() => {
    const update = document.querySelector('body')
    update?.classList.add('InternaInsignia')
  }, [])

  return (
    <main className="internaExperiencia">
        <div className='menuGlobal'>
            <div className='menuGlobal__general menuGlobal--general hidden'>
              <div className='menuGlobal__general__top'>
                <div className='flex items-center'>
                  <div className="w-1/2">
                    <div className='menuGlobal__general__left'>
                      <Link href={newRoutes.nosotros}>
                          <Image src={"/header_partner/logogeneral.png"} width={50} height={50} alt='logo'/>

                      </Link>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className='menuGlobal__general__right text-right'>
                      <button>
                        <Image src={"/header_partner/menuright.png"} className='ml-auto' width={50} height={50} alt='logo'/>

                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='menuGlobal__general__item'>
                <ul>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      ¿Quiénes somos?
                      <span>
                        <img src={"/header_partner/user.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Sibaritta Partners
                      <span>
                        <img src={"/header_partner/sibaritta.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      ¿Cómo funciona?
                      <span>
                        <img src={"/header_partner/funciona.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Insignias
                      <span>
                        <img src={"/header_partner/lock.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                </ul>
              </div>
            </div>
            <div className='menuGlobal__general menuGlobal--perfil hidden'>
              <div className='menuGlobal__general__top'>
                <div className='flex items-center'>
                  <div className="w-1/2">
                    <div className='menuGlobal__general__left'>
                      <Link href={newRoutes.nosotros}>
                        <Image src={"/header_partner/logogeneral.png"} width={50} height={50} alt='logo'/>

                      </Link>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className='menuGlobal__general__right text-right'>
                      <button>
                        <Image src={"/header_partner/menuright.png"} className='ml-auto' width={50} height={50} alt='logo'/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='menuGlobal__general__item'>
                <ul>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Información personal
                      <span>
                        <img src={"/header_partner/user.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Reservaciones
                      <span>
                        <img src={"/header_partner/sibaritta.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Pagos
                      <span>
                        <img src={"/header_partner/funciona.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Seguridad
                      <span>
                        <img src={"/header_partner/lock.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Soporte en línea
                      <span>
                        <img src={"/header_partner/soporte.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                  <li>
                    <Link href={newRoutes.nosotros}>
                      Cerrar sesión
                      <span>
                        <img src={"/header_partner/cerrar.png"}  alt='logo'/>

                      </span>
                    </Link>

                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div className="migajaPan">
          <div className="container-general">
            <div className="migajaPan__card ">
                <ul className="flex">
                <li>
                    &gt; Home
                </li>
                <li>
                    &gt; EXPERIENCIAS
                </li>
                <li className="activeMigaja">
                    &gt; CENA MOLECULAR
                </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="internaExperiencia__slider">
            <div className='flex'>
              <div className='w-full'>
                <CarouselV2 data={{} as IDetalle}/>

              </div>
            </div>
        </div>
        <div className="internaExperiencia__titulo">
          <div className="flex">
            <div className="w-full">
              <div className="internaExperiencia__titulo__card text-center">
                <h2  className="tituloh2">CENA MOLECULAR</h2>
                <h5  className="tituloh5">PREPARA TU PALADAR PARA VIVIR<br/>UNA EXPERIENCIA INOLVIDABLE</h5>
                <svg className='m-auto mt-5 pt-5' width="3" height="71" viewBox="0 0 3 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.84961 70.4575L2.84961 0.542491C2.84961 0.242881 2.22729 0 1.45961 0L1.38961 0C0.621934 0 -0.000389099 0.242881 -0.000389099 0.542491L-0.000389099 70.4575C-0.000389099 70.7571 0.621934 71 1.38961 71H1.45961C2.22729 71 2.84961 70.7571 2.84961 70.4575Z" fill="#F4A560"/>
                </svg>

              </div>
            </div>
          </div>
        </div>
        <div className="internaExperiencia__intro">
          <div className="container-general">
            <div className="lg:flex justify-center">
              <div className="w-full lg:w-2/5">
                <div className="internaExperiencia__intro__left">
                  <h2 className="tituloh2">
                    CAUTÍVATE CON<br/>CADA DETALLE
                  </h2>
                  <div className="boton ">
                      <a href="#">RESERVA TU EXPERIENCIA</a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <div className="internaExperiencia__intro__right">
                  <p> <b>EL MAR EN TU PALADAR</b> </p>
                  <p>
                    Una comunidad que se divierte, se deja sorprender, y conecta con otras personas que comparten su afición por el buen gusto.
                    Comunidad que se divierte, se deja sorprender, y conecta con otras personas que comparten su afición.
                    <br/><br/>
                    Una comunidad que se divierte, se deja sorprender, y conecta con otras personas que comparten su afición por el buen gusto.
                    Comunidad que se divierte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="internaExperiencia__lugar">
          <div className="container-general">
            <div className="lg:flex">
              <div className="w-full lg:w-3/5">
                <div className="internaExperiencia__lugar__left">
                  <h2 className="tituloh2">EL LUGAR</h2>
                  <p>
                  Una comunidad que se divierte, se deja sorprender, y conecta con otras personas que comparten su afición por el buen gusto. Comunidad que se divierte, se deja sorprender, y conecta con otras personas que comparten su afición.
                  </p>
                  <div className="boton boton--transparente ">
                    <a href="#">UBICACIÓN</a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="internaExperiencia__lugar__right">
                  <img src={"/experiencia/comidaright.png"} alt='logo'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__colecciona">
          <div className="container-general">
            <div className="flex flex-wrap justify-center">

              <div className="lg:w-2/5 flex w-100 items-center">
                <div className="home__colecciona__right ">
                  <ul className="flex">

                    <li>
                      <Image src={"/home/cart2.png"} width={345} height={345} alt='logo'/>
                    </li>
                    <li>
                      <Image src={"/home/cart3.png"} width={345} height={345} alt='logo'/>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-100 lg:w-2/5">
                <div className="home__colecciona__left">
                  <div className="relative">
                    <h2 className="tituloh2">TU CAMINO SIBARITTA</h2>
                    <p>
                      Con esta experiencia, desbloquearás estas insignias y estarás a un paso menos de convertirte en Maestro Sibaritta
                    </p>
                    <div className="boton ">
                      <a href="#">INSIGNIAS SIBARITTA</a>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="internaExperiencia__reserva">
          <div className="container-general">
            <div className="lg:flex justify-center">
              <div className="lg:w-2/5">
                <div className="internaExperiencia__reserva__left">
                  <h2 className="tituloh2">
                    RESERVA TU<br/>EXPERIENCIA
                  </h2>
                  <p>
                    CENA MOLECULAR<br/>
                    Valor de la experiencia · <span className="textoNaranja">$300</span>
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="internaExperiencia__reserva__right">
                  <div className="internaExperiencia__reserva__right__contenedor">
                    <div className="internaExperiencia__reserva__right__contenedor__card">
                      <h3 className="tituloh3">
                        FEB
                      </h3>
                      <hr/>
                      <h4>23</h4>
                      <p>
                        VIERNES
                      </p>
                      <hr/>
                      <h5 className="tituloh5">7:00 pm</h5>
                    </div>
                    <div className="internaExperiencia__reserva__right__contenedor__card">
                      <h3 className="tituloh3">
                        FEB
                      </h3>
                      <hr/>
                      <h4>24</h4>
                      <p>
                        SÁBADO
                      </p>
                      <hr/>
                      <h5 className="tituloh5">7:00 pm</h5>
                    </div>
                    <div className="internaExperiencia__reserva__right__contenedor__card active">
                      <h3 className="tituloh3">
                        MAR
                      </h3>
                      <hr/>
                      <h4>7</h4>
                      <p>
                        VIERNES
                      </p>
                      <hr/>
                      <h5 className="tituloh5">7:00 pm</h5>
                    </div>
                  </div>
                  <div className="internaExperiencia__reserva__right__limite text-center mt-5">
                    <p>*Quedan 10 cupos para este día</p>
                  </div>
                  <div className="internaExperiencia__reserva__right__agregar">
                    <div className="internaExperiencia__reserva__right__agregar__left">
                      <p>Elige el número de personas</p>
                    </div>
                    <div className="internaExperiencia__reserva__right__agregar__right flex justify-center items-center">
                      <svg className='mr-4' width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.125 25.4999C31.125 22.6697 28.4119 20.2621 24.625 19.3698M21.375 25.5C21.375 21.9101 17.0098 19 11.625 19C6.24022 19 1.875 21.9101 1.875 25.5M21.375 14.125C24.9649 14.125 27.875 11.2149 27.875 7.625C27.875 4.03515 24.9649 1.125 21.375 1.125M11.625 14.125C8.03515 14.125 5.125 11.2149 5.125 7.625C5.125 4.03515 8.03515 1.125 11.625 1.125C15.2149 1.125 18.125 4.03515 18.125 7.625C18.125 11.2149 15.2149 14.125 11.625 14.125Z" stroke="#F89C53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className='internaExperiencia__reserva__right__agregar__right__botones flex'>
                        <button>
                          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.5" width="36" height="36" rx="10" fill="#443E45"/>
                          <path d="M22.5 18.5H13.5" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <input type="text" />
                        <button>
                          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.5" width="36" height="36" rx="10" fill="#443E45"/>
                          <path d="M18 14V18.5M18 18.5V23M18 18.5H22.5M18 18.5L13.5 18.5" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>

                      </div>
                     
                    </div>
                  </div>
                  <div className="boton   text-center">
                    <a href="#" className="m-auto">COMPLETA TU RESERVA</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <ModalExperiencia/> */}
    </main>
  );
}
