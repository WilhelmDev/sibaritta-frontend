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
    update?.classList.add('fondoSoporte')
  }, [])
  
  return (
    <main className="soporteCard">

      <div className="migajaPan">
        <div className="container-general">
          <div className="migajaPan__card " >
            <ul className="flex">
              <li>
                <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                  &gt; Home
                </Link>
              </li>
              <li>
                <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                  &gt; PERFIL
                </Link>
              </li>
              <li className="activeMigaja">
                &gt; SOPORTE EN LÍNEA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='soporteCard__card'>
        <div className='soporteCard__card__titulo'>
            <h1 className='tituloh2 text-center'>SOPORTE EN LÍNEA</h1>
        </div>
        <div className='soporteCard__card__formulario'>
            <div className='container-general'>
                <div className="xl:flex block">
                    <div className="xl:w-1/3 w-full">
                        <div className='soporteCard__card__formulario__left hidden xl:block'>
                            <ul>
                                <li>
                                    <Link href={newRoutes.home} className='active'>
                                        CONTÁCTANOS
                                    </Link>
                                </li>
                                <li>
                                    <Link href={newRoutes.home}>
                                        PREGUNTAS FRECUENTES
                                    </Link>
                                </li>
                                <li>
                                    <Link href={newRoutes.home}>
                                        TÉRMINOS Y CONDICIONES
                                    </Link>
                                </li>
                                <li>
                                    <Link href={newRoutes.home}>
                                        POLÍTICAS DE PRIVACIDAD
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='soporteCard__card__formulario__left block xl:hidden'>
                           <select name="" id="">
                                <option value="">CONTÁCTANOS</option>
                                <option value="">PREGUNTAS FRECUENTES</option>
                                <option value="">TÉRMINOS Y CONDICIONES</option>
                                <option value="">POLÍTICAS DE PRIVACIDAD</option>

                           </select>
                        </div>
                    </div>
                    <div className="xl:w-2/3  w-full">
                        <div className='soporteCard__card__formulario__right'>
                            <Medium />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
