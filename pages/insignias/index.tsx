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
import Link from 'next/link';
import { newRoutes } from '@/utils/routes';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Insignia () {

  useEffect(() => {
    AOS.init();

    const update = document.querySelector('body')
    update?.classList.add('Experienciabg')
  }, [])

  return (
    <main className="internaInsignia">

        <div className="migajaPan">
            <div className="container-general">
            <div className="migajaPan__card ">
                <ul className="flex">
                <li>
                  <Link href={newRoutes.home} className=' hover:text-yellow-600'>
                    &gt; Home
                  </Link>
                </li>

                <li className="activeMigaja">
                    &gt; INSIGNIAS
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div className="internaExperiencia__titulo" data-aos="fade-up" data-aos-duration="3000">
          <div className="flex">
            <div className="w-full">
              <div className="internaExperiencia__titulo__card text-center">
                <h2  className="tituloh2 uppercase">insignias sibaritta</h2>
                <h5  className="tituloh5">Con cada experiencia, aprenderás diferentes habilidades y estarás<br/> un paso más cerca de ser un Maestro Sibaritta.</h5>
                <svg className='m-auto mt-5 pt-5' width="3" height="71" viewBox="0 0 3 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.84961 70.4575L2.84961 0.542491C2.84961 0.242881 2.22729 0 1.45961 0L1.38961 0C0.621934 0 -0.000389099 0.242881 -0.000389099 0.542491L-0.000389099 70.4575C-0.000389099 70.7571 0.621934 71 1.38961 71H1.45961C2.22729 71 2.84961 70.7571 2.84961 70.4575Z" fill="#F4A560"/>
                </svg>
                <img src={"/insignia/insignia.png"} alt='logo' className='m-auto'/>

              </div>
            </div>
          </div>
        </div>
        <div className='internaInsignia__alcanza'>
          <div className='container-general'>
            <div className="lg:flex items-center">
              <div className="lg:w-1/6 w-full">

              </div>
              <div className="lg:w-2/5 w-full">
                <div className="internaInsignia__alcanza__left " data-aos="fade-right" data-aos-duration="3000">
                  <h2 className="tituloh2">ALCANZA<br/>LA MAESTRÍA</h2>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="internaInsignia__alcanza__right" data-aos="fade-left" data-aos-duration="3000">
                  <img src={"/insignia/logo.png"} alt='logo' className='m-auto'/>
                  <p>Una comunidad que se divierte, se deja sorprender, y conecta con otras personas que comparten su afición por el buen gusto. Comunidad que se divierte, se deja sorprender, y conecta con otras personas que comparten su afición.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__colecciona z-0 relative">
          <div className="container-general">
            <div className="flex flex-wrap">
              <div className="w-100 lg:w-2/5">
                <div className="home__colecciona__left" data-aos="fade-right" data-aos-duration="3000">
                  <div className="relative">
                    <h2 className="tituloh2">DESBLOQUEA<br/>INSIGNIAS</h2>
                    <p>
                      Por definición, Sibarita significa una “persona amante de los buenos placeres”<br/>
                      Sin embargo nosotros<br/>                    
                      Somos mucho más que eso...
                    </p>
                    {/* <div className="boton ">
                      <a href="#">INSIGNIAS SIBARITTA</a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 flex w-100 items-center">
                <div className="home__colecciona__right ">
                  <ul className="flex">
                    <li>
                      <Image src={"/home/cart1.png"} width={345} height={345} alt='logo' data-aos="fade-left" data-aos-duration="3000"/>
                    </li>
                    <li>
                      <Image src={"/home/cart2.png"} width={345} height={345} alt='logo' data-aos="fade-left" data-aos-duration="2000"/>
                    </li>
                    <li>
                      <Image src={"/home/cart3.png"} width={345} height={345} alt='logo' data-aos="fade-left" data-aos-duration="1000"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quienesSomos__inicia z-10	relative">
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
    </main>
  );
}
