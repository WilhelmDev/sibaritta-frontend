'use client'
import Image from 'next/image'
import HomeBanner from '@/components/organisms/HomeBanner';
import Footer from "@/components/ui/Footer";
import { useEffect } from 'react';
import HomeBusiness from "@/components/organisms/HomeBusiness";
import { newRoutes } from '@/utils/routes';

import Link from 'next/link';

export default function Experiencia () {

  useEffect(() => {
    const update = document.querySelector('body')
    update?.classList.add('Experienciabg')
  }, [])

  return (
    <main className="checkout">
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
                    &gt; RESERVACIÓN
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div className='checkout__contenedor'>
            <div className='container-general'>
                <div className="flex space-x-5">
                    <div className="w-3/5">
                        <div className='checkout__contenedor__left'>
                            <div className='checkout__contenedor__left__top'>
                                <h5 className='tituloh5 mb-5'>Observaciones del Socio para el establecimiento</h5>
                                <textarea name="" id="" placeholder='Escribe aquí'></textarea>
                                <p>Si tienes alguna observación adicional que no incluyas en esta casilla, por favor comunicarlo al personal del establecimiento el día del evento</p>
                                <Link href={newRoutes.home}>Términos y condiciones</Link>

                            </div>
                            <div className='checkout__contenedor__left__bottom'>
                                <h5 className='tituloh5'>Detalles del pago</h5>
                                <div className='checkout__contenedor__left__bottom__card'>
                                    <label htmlFor="" className='mb-4 block'>Correo</label>
                                    <input type="text"  placeholder='davidduqueorozco@gmail.com'/>
                                </div>
                                <div className='checkout__contenedor__left__bottom__card'>
                                    <div className="flex space-x-4 mb-4">
                                        <div className="w-3/4">
                                            <label htmlFor="">Método de pago</label>
                                        </div>
                                        <div className="w-1/6">
                                            <div className='checkout__contenedor__left__bottom__card__label'>
                                                <button>
                                                    Editar
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 20.0001H20M4 20.0001V16.0001L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L8 20.0001L4 20.0001Z" stroke="#E1D4C4" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-1/6">
                                            <div className='checkout__contenedor__left__bottom__card__label'>
                                                <button>
                                                    agregar
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 20.0001H20M4 20.0001V16.0001L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L8 20.0001L4 20.0001Z" stroke="#E1D4C4" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="w-1/2">
                                            <input type="text"  placeholder='davidduqueorozco@gmail.com'/>
                                        </div>
                                        <div className="w-1/4">
                                            <div className='checkout__contenedor__left__bottom__card__label'>
                                                <input type="date"  placeholder='MM  /  YYYY'/>
                                            </div>
                                        </div>
                                        <div className="w-1/4">
                                            <div className='checkout__contenedor__left__bottom__card__label'>
                                                <input type="number"  placeholder='CVV'/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='checkout__contenedor__left__bottom__card mb-0'>
                                    <label htmlFor="" className='mb-4 block'>Dirección</label>
                                    <input type="text"  placeholder='Cra 50a #176-30, casa, segundo piso  /  Bogotá, Barrio Nueva Zelandia'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5">
                        <div className='checkout__contenedor__right'>
                            <div className="checkout__contenedor__right__card__top">
                                <h5 className='tituloh5 mb-5'>Resumen de la orden</h5>
                                <div className='checkout__contenedor__right__hora'>

                                </div>
                                <div className='flex'>
                                    <div className="w-3/5">
                                        <div className='checkout__contenedor__right__hora__left'>
                                            <p>Tiempo para conservar tu reservación</p>

                                        </div>
                                    </div>
                                    <div className="w-2/5">
                                        <div className='checkout__contenedor__right__hora__right'>
                                            <h3 className='tituloh3'>00:10:00</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='checkout__contenedor__right__card__bottom'>
                                <div className='checkout__contenedor__right__card__bottom__card'>
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                <p>x1 Experiencia</p>
                                            </div>
                                            
                                        </div>
                                        <div className="w-1/2">
                                            <div className='checkout__contenedor__right__card__bottom__card__right'>
                                                <button className='flex justify-end w-full'>
                                                    $ 2600
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#E1D4C4" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='checkout__contenedor__right__card__bottom__card'>
                                    <div className="flex items-center	">
                                        <div className="w-1/2">
                                            <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                <p>x1 Bebida extra</p>
                                            </div>
                                            
                                        </div>
                                        <div className="w-1/2">
                                            <div className='checkout__contenedor__right__card__bottom__card__right  flex  justify-center'>
                                                <button className='flex justify-center	 w-full checkout__contenedor__right__card__bottom__card__right__button'>
                                                    Modificar

                                                </button>
                                                <button className='flex justify-end w-full'>
                                                    $ 2600
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#E1D4C4" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='checkout__contenedor__right__card__bottom__card checkout__contenedor__right__card__bottom__card--agregar'>
                                    <div className="flex items-center	justify-center">
                                        <div className="w-2/5">
                                            <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                <p>Agredar código</p>
                                            </div>
                                            
                                        </div>
                                        <div className="w-3/5">
                                            <div className='checkout__contenedor__right__card__bottom__card__right justify-center flex'>
                                                <p>AXCDFSV</p>
                                                <button className='flex justify-center	 w-full checkout__contenedor__right__card__bottom__card__right__button'>
                                                    Agregar

                                                </button>
                                                <button className='flex justify-end w-full'>
                                                    $ 2600
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#E1D4C4" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='checkout__contenedor__right__card__bottom__card checkout__contenedor__right__card__bottom__card--2'>
                                    <div className="flex items-center	">
                                        <div className="w-1/2">
                                            <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                <p>Nº de personas</p>
                                            </div>
                                            
                                        </div>
                                        <div className="w-1/2">
                                            <div className='checkout__contenedor__right__card__bottom__card__right  '>
                                               
                                                <p className='text-end'>3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='checkout__contenedor__right__card__bottom__card'>
                                    <div className="flex items-center	">
                                        <div className="w-1/2">
                                            <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                <p>20 de diciembre de 2023</p>
                                            </div>
                                            
                                        </div>
                                        <div className="w-1/2">
                                            <div className='checkout__contenedor__right__card__bottom__card__right  '>
                                               
                                                <p className='text-end'>12:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='checkout__contenedor__right__card__bottom__card checkout__contenedor__right__card__bottom__card--agregar'>
                                    <div className="flex items-center	justify-center">
                                        <div className="w-2/5">
                                            <div className='checkout__contenedor__right__card__bottom__card__left'>
                                                <p>Total</p>
                                            </div>
                                            
                                        </div>
                                        <div className="w-3/5">
                                            <div className='checkout__contenedor__right__card__bottom__card__right'>
                                                <p className="text-end">$3000</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='checkout__contenedor__right__end'>
                                <div className='checkout__contenedor__right__end__card'>
                                    <div>
                                        <label className="containerCheck">Acepto <span>términos y<br/> condiciones</span>
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="containerCheck">Me gustaría recibir alertas y notificaciones de nuevas experiencias
                                            <input type="checkbox"  />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <Link href={newRoutes.home}>Políticas de cancelación</Link>
                                    </div>
                                    <div className='boton boton--naranja mt-5'>
                                        <button>
                                            CONFIRMAR
                                        </button>
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
