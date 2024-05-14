import Image from "next/image";
import React, { useState } from "react";
import { LogoSibarita } from "./icons/LogoSibarita";
import { classNames } from "primereact/utils";
import Link from "next/link";
import ModalRegister from "../molecules/session/ModalRegister";
import ModalSession from "../molecules/ModalSession";
import { useRouter } from "next/router";
import RecoveryModal from "../molecules/recovery/RecoveryModal";
import ModalConfirmation from "../molecules/session/ModalConfirmation";
import ModalAcuerdo from "@/components/molecules/reservationExitosa/ModalAcuerdo";
import PoliticModal from "../organisms/contact/PoliticModal";
import { Instagram } from "./icons/Instagram";
import { Twiter } from "./icons/Twiter";
import { Tiktok } from "./icons/Tiktok";
import { Youtube } from "./icons/Youtube";
import { newRoutes } from '@/utils/routes';

const Footer = () => {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistro, setopenRegistro] = useState(false);
  const [openConfirmacion, setOpenConfirmacion] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [auttenti, setauttenti] = useState(false);
  const [acuerdoModal, setacuerdoModal] = useState<boolean>(false);
  const [politicaModal, setpoliticaModal] = useState<boolean>(false);
  const [modalAcuerdo, setModalAcuerdo] = useState(false)


  const openAcuerdoModal = () => {
    setacuerdoModal(true);
  };
  const openPoliticaModal = () => {
    setpoliticaModal(true);
  };

  const openModalLogin = () => {
    setOpenLogin(true);
    closeModalRegistro();
  };
  const closeModalLogin = () => {
    setOpenLogin(false);
  };

  //registro
  const openModalRegistro = () => {
    setopenRegistro(true);
    closeModalLogin();
  };
  const closeModalRegistro = () => {
    setopenRegistro(false);
  };

  // confirmarcion
  const openModalConfirmacion = () => {
    setOpenConfirmacion(true);
    closeModalRegistro();
  };

  const closeModalConfirmacion = () => {
    setOpenConfirmacion(false);
  };

  //forgot

  const openModalForgot = () => {
    setOpenForgot(true);
    closeModalLogin();
  };

  const closeModalForgot = () => {
    setOpenForgot(false);
  };

  const autenticationUser = () => {
    setauttenti(true);
  };

  return (
    <div className="footer ">
      <div className="container-general">
        <div className="footer__card">
          <div className="footer__card__top 	">
            <img src={"/footer/icono.png"} alt='logo' className="m-auto"/>
            <svg className="m-auto mt-5 mb-5" width="35" height="2" viewBox="0 0 35 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H34.93" stroke="black" strokeLinecap="butt"/>
            </svg>

            <h6 className="text-center">“SETTING YOU APART FROM THE REST”</h6>
          </div>
          <div className="footer__card__center ">
            <div className="lg:flex flex-wrap block">
              <div className="lg:w-1/3 w-100">
                <div className="footer__center__card ">
                  <h6 className="text-center">
                    SOCIOS SIBARITTA
                  </h6>
                  <ul className="text-center">
                    <li className="	">
                      <Link href={newRoutes.nosotros}>CONÓCEME</Link>
                    </li>
                    <li className="opacity-0	">
                      <Link href="#">REGÍSTRATE</Link>
                    </li>
                    <li className="opacity-0	">
                      <Link href="#">INICIO DE SESIÓN</Link>
                    </li>
                   
                    <li className="opacity-0	">
                      <Link href="#">SIBARITTA PARTNERS</Link>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="lg:w-1/3 w-100">
                <div className="footer__center__card ">
                  <h6 className="text-center">
                    SOPORTE EN LÍNEA
                  </h6>
                  <ul className="text-center">
                    <li>
                      <a href="#">LUNES A DOMINGO 10 AM – 10 PM</a>
                    </li>
                    <li>
                      <a href="mailto:SOCIOS@SIBARITTA.COM">SOCIOS@SIBARITTA.COM</a>
                    </li>
                    
                    <li>
                      <a href="https://wa.link/952ld9" target="_blank">WHATSAPP +52 81 42364447</a>
                    </li>
                    {/* <li>
                      <Link href="/soporte">FORMULARIO DE CONTACTO</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 w-100">
                <div className="footer__center__card footer__center__card--3 ">
                  <h6 className="text-center">
                    REDES SOCIALES
                  </h6>
                  <ul className="text-center">
                    <li>
                      <a href="https://www.instagram.com/sibaritta_">INSTAGRAM</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Sibarittafb">FACEBOOK</a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@.sibaritta_?_t=8keSH9YhQBB&_r=1">TIKTOK</a>
                    </li>
                    {/* <li>
                      <a href="#">YOUTUBE</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__card__bottom lg:flex block">
            <div className="lg:w-1/2 w-100">
              <div className="footer__card__bottom__left">
                <p>©2024 SIBARITTA</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-100">
              <div className="footer__card__bottom__right">
                <ul className="lg:flex justify-between	">
                  <li>
                    <Link href={newRoutes.experiencias}>VER EXPERIENCIAS           </Link>
                  </li>

                  <li>
                    <Link href={newRoutes.nosotros}>INSIGNIAS SIBARITTA     </Link>
                  </li>
                  {/* <li>
                    <Link href={newRoutes.nosotros}>CONÓCEME</Link>
                  </li> */}
                  <li>
                  <a onClick={openPoliticaModal} className="cursor-pointer">
                      POLÍTICAS DE PRIVACIDAD
                    </a>
                  </li>
                  <li>
                    <a onClick={openAcuerdoModal} className="cursor-pointer">
                      TÉRMINOS Y CONDICIONES
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">DATOS DE LA EMPRESA</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalAcuerdo visible={acuerdoModal} setVisible={setacuerdoModal} />
      <PoliticModal visible={politicaModal} setVisible={setpoliticaModal}/>
    </div>
  );
};

export default Footer;
