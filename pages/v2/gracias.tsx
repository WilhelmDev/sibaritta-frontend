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
import Medium from '@/components/organisms/contact/Medium';

export default function Nosotros () {

  useEffect(() => {
    AOS.init();

    const update = document.querySelector('body')
    update?.classList.add('fondoGracias')
  }, [])
  
  return (
    <main className="gracias">
        <div className='gracias__titulo'  data-aos="fade-up" data-aos-duration="3000">
            <h1 className='tituloh2 uppercase text-center'>
                gracias por tu rereservación
                <svg className='m-auto mt-5 pt-5 mbt-5 pt-5' width="3" height="71" viewBox="0 0 3 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5161_6941)">
                <path d="M2.85156 70.4575L2.85156 0.542491C2.85156 0.242881 2.22924 0 1.46156 0L1.39156 0C0.623888 0 0.00156403 0.242881 0.00156403 0.542491L0.00156403 70.4575C0.00156403 70.7571 0.623888 71 1.39156 71H1.46156C2.22924 71 2.85156 70.7571 2.85156 70.4575Z" fill="#F4A560"/>
                </g>
                <defs>
                <clipPath id="clip0_5161_6941">
                <rect width="2.85" height="71" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </h1>
        </div>
        <div className='gracias__codigo'  data-aos="zoom-in" data-aos-duration="3000">
            <div className='container-general'>
                <div className='flex justify-center'>
                    <div className='md:w-2/5'>
                        <div className='gracias__codigo__card'>
                            <h3 className='tituloh3 text-center'>TU CÓDIGO DE RESERVACIÓN</h3>
                            <img src={"/gracias/qr.png"} className="m-auto" alt='logo'/>
                            <h4 className='text-center'>4FKIAHD</h4>
                            <p className='text-center'>
                                Recuerda llegar 10 minutos antes de la hora de tu reservación<br/><br/>

                                Si quieres recibir el 100% de tu reembolso y cancelar tu reservación, recuerda que tienes hasta 24 horas antes de la hora de tu experiencia para hacer la solicitud. Ingresa a “Reservaciones actuales” en “Solicitar reembolso”

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home__experiencia" id="formulario">
        <div className="container-general ">
          <div className="lg:flex block flex-wrap">
            <div className="lg:w-2/5 w-100  flex items-center justify-center">
              <div className="home__intro__left " data-aos="fade-right" data-aos-duration="3000">
                <h2 className="tituloh2 md:text-center lg:text-left">SUGERENCIAS<br/>SIBARITTA</h2>
                <p className='md:text-center lg:text-left'>
                Continúa tu camino para convertirte en maestro Sibaritta
                </p>
                <div className="boton ">
                  <a href="#">VER EXPERIENCIAS</a>
                </div> 
              </div>
            </div>
            <div className="w-1/6">
            </div>
            <div className="lg:w-2/5 w-100 	">
              <div className="home__intro__right" data-aos="fade-left" data-aos-duration="3000">
               
             
              </div>
             
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
