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
import Questions from '@/components/organisms/contact/Questions';
import Conditions from '@/components/organisms/contact/Conditions';
import Legal from '@/components/organisms/contact/Legal';

export default function Nosotros () {

  useEffect(() => {
    AOS.init();

    const update = document.querySelector('body')
    update?.classList.add('fondoSoporte')
  }, [])

  const [submenu, setSubmenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "CONTÁCTOS"
  );
  const openSubmenu = () => {
    setSubmenu(!submenu);
  };
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSubmenu(false);
  };
  
  const item = [
    { id: 1, items: "CONTÁCTOS" },
    { id: 2, items: "PREGUNTAS FRECUENTES" },
    { id: 3, items: "TÉRMINOS Y CONDICIONES" },
    { id: 4, items: "POLÍTICAS DE PRIVACIDAD" },
  ];

  const selectedComponent = () => {
    switch (selectedOption) {
      case "CONTÁCTO":
        return <Medium />;
      case "PREGUNTAS FRECUENTES":
        return <Questions handleOptionClick={handleOptionClick} />;
      case "TÉRMINOS Y CONDICIONES":
        return <Conditions />;
      case "POLÍTICAS DE PRIVACIDAD":
        return <Legal />;
      default:
        return <Medium />;
    }
  };
  
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
                      <div className='soporteCard__card__formulario__left block xl:hidden mb-10'>
                        <div className="contact-select !bg-[#252127]" onClick={openSubmenu}>
                          <span>{selectedOption || "Soporte en línea"} </span>
                          <i className={`icon-arrow ${submenu && "rotate-active"}`}></i>
                        </div>
                        {submenu && (
                          <div className="submenu main-page1">
                            <div className="flex flex-col w-full">
                              <div className="container-submenu flex justify-center items-center">
                                {item.map((label) => (
                                  <span
                                    key={label.id}
                                    className={`cursor-pointer block w-full text-center ${
                                      selectedOption === label.items && "bg-[#4D3452]"
                                    }`}
                                    onClick={() => handleOptionClick(label.items)}
                                  >
                                    {label.items}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                        <div className='soporteCard__card__formulario__left hidden xl:block'>
                            <ul>
                              {item.map((i) => (
                                <li key={i.id}>
                                  <Link
                                    href={''}
                                    onClick={() => handleOptionClick(i.items)}
                                    className={`${selectedOption === i.items && 'active'}`}>
                                      {i.items}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                        </div>
                    </div>
                    <div className="xl:w-2/3  w-full">
                        <div className='soporteCard__card__formulario__right'>
                          {selectedComponent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
