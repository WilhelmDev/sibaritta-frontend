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
    update?.classList.add('fondoPerfil')
  }, [])
  
  return (
    <main className="reservaciones">
        <div className="migajaPan">
            <div className="container-general">
            <div className="migajaPan__card ">
                <ul className="flex">
                <li>
                    &gt; Home
                </li>

                <li className="activeMigaja">
                    &gt; reservaciones
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div className='reservaciones__titulo'>
            <h1 className='text-center tituloh2'>RESERVACIONES</h1>
        </div>
        <div className='reservaciones__card'>
            <div className='container-general'>
                <div className='reservaciones__card__tabs  '>
                    <div className='flex'>
                        <div className='w-full '>
                            <div className='reservaciones__card__tabs__cards hidden lg:block'>
                                <ul>
                                    <li>
                                        <a href="#" className='active'>RESERVACIONES ACTUALES</a>
                                    </li>
                                    <li>
                                        <a href="#">RESERVACIONES PASADAS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='reservaciones__card__tabs__cards perfil__insignias__titulo lg:hidden'>
                               <select name="" id="">
                                    <option value="">
                                        RESERVACIONES ACTUALES
                                    </option>
                                    <option value="">
                                        RESERVACIONES PASADAS
                                    </option>
                               </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reservaciones__card__bottom'>
                    <div className='block xl:flex'>
                        <div className=" xl:w-1/2 w-100 xl:pr-5 xl:mr-5">
                            <div className='reservaciones__card__bottom__card'>
                                <h3 className='tituloh3 xl:pr-5 xl:mr-5 xl:pl-5 xl:ml-5'>VIAJE A TRAVÉS DE LOS OJOS DE HEMINGWAY</h3>
                                <h5 className='tituloh4 xl:pr-5  xl:pl-5 '>
                                    <span className='xl:mr-5  xl:ml-5 '>MONTERREY</span>
                                </h5>
                                <div className='reservaciones__card__bottom__card__contenedor xl:pr-5 xl:mr-5 xl:pl-5 xl:ml-5'>
                                    <table className='table-auto'>
                                        <tr>
                                            <td>
                                                ESTADO
                                            </td>
                                            <td className='textoNaranja'>
                                                COMPLETADO
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                N° DE PERSONAS 
                                            </td>
                                            <td className='textoNaranja'>
                                                $ 3800
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CÓDIGO DE RESERVACIÓN
                                            </td>
                                            <td className='textoNaranja'>
                                                ED4H6S
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                FECHA Y HORA DE EXPERIENCIA
                                            </td>
                                            <td className='textoNaranja'>
                                                23 DE NOV 2024, 12:00 pm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                FECHA Y HORA DE PAGO
                                            </td>
                                            <td className='textoNaranja'>
                                                15 DE NOV 2024, 2:45 pm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                MÉTODO DE PAGO
                                            </td>
                                            <td className='textoNaranja'>
                                                TARJETA TERMINADA EN 3334*
                                            </td>
                                        </tr>
                                    </table>
                                    <div className='reservaciones__card__bottom__card__contenedor__botones'>
                                        <div className="boton ">
                                            <Link href={newRoutes.home} className="m-auto">CALIFICAR EXPERIENCIA</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" xl:w-1/2 w-100 xl:pl-5 xl:ml-5">
                            <div className='reservaciones__card__bottom__card'>
                                <h3 className='tituloh3 xl:pr-5 xl:mr-5 xl:pl-5 xl:ml-5'>VIAJE AL REINO THAILANDIA</h3>
                                <h5 className='tituloh4 xl:pr-5  xl:pl-5 '>
                                    <span className='xl:mr-5  xl:ml-5 '>MONTERREY</span>
                                </h5>
                                <div className='reservaciones__card__bottom__card__contenedor xl:pr-5 xl:mr-5 xl:pl-5 xl:ml-5'>
                                    <table className='table-auto'>
                                        <tr>
                                            <td>
                                                ESTADO
                                            </td>
                                            <td className='textoNaranja'>
                                                COMPLETADO
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                N° DE PERSONAS
                                            </td>
                                            <td className='textoNaranja'>
                                                $ 3800
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CÓDIGO DE RESERVACIÓN
                                            </td>
                                            <td className='textoNaranja'>
                                                ED4H6S
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                FECHA Y HORA DE EXPERIENCIA
                                            </td>
                                            <td className='textoNaranja'>
                                                23 DE NOV 2024, 12:00 pm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                FECHA Y HORA DE PAGO
                                            </td>
                                            <td className='textoNaranja'>
                                                15 DE NOV 2024, 2:45 pm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                MÉTODO DE PAGO
                                            </td>
                                            <td className='textoNaranja'>
                                                TARJETA TERMINADA EN 3334*
                                            </td>
                                        </tr>
                                    </table>
                                    <div className='reservaciones__card__bottom__card__contenedor__botones'>
                                        <div className="boton ">
                                            <Link href={newRoutes.home} className="m-auto">CALIFICAR EXPERIENCIA</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
