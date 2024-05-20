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
            <svg width="50" className="m-auto" viewBox="0 0 44 38" xmlns="http://www.w3.org/2000/svg">
            <path d="m21.934 0c-0.7647 0-1.3821 0.70568-1.3821 1.5796 0 0.87392 0.6174 1.5796 1.3821 1.5796s1.3822-0.70567 1.3822-1.5796c0-0.87392-0.6175-1.5796-1.3822-1.5796z" fill="#100A11"/>
            <path d="m26.927 0.2703c-0.0449 0-0.0858-0.004673-0.1226-0.004673-0.0205 0-0.0409 0.004673-0.0573 0.004673h-0.0082c-0.5234 0.042061-0.9405 0.53276-0.9405 1.1403 0 0.60754 0.4171 1.1029 0.9405 1.1403h0.0409 0.0246 0.0572 2.3309v34.91h2.3676v-34.905h11.519v-2.2853h-16.152z" fill="#100A11"/>
            <path d="m16.749 0.2703h-0.0081c-0.0205 0-0.0409-0.004673-0.0573-0.004673-0.0368 0-0.0777 0-0.1267 0.004673h-16.557v2.2853h11.515v34.91h2.3676v-34.91h2.7398 0.0572 0.0246 0.0409c0.5234-0.04206 0.9405-0.53743 0.9405-1.145 0-0.60754-0.4171-1.1029-0.9405-1.1403h4e-3z" fill="#100A11"/>
            </svg>

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
            <div className="lg:w-1/2 w-100 hidden lg:block">
              <div className="footer__card__bottom__left">
                <p>©2024 SIBARITTA</p>
              </div>
            </div>
            <div className="xl:w-1/2 w-100">
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
            <div className="lg:w-1/2 w-100  lg:hidden mt-5 pt-2">
              <div className="footer__card__bottom__left mt-5 pt-2">
                <p>©2024 SIBARITTA</p>
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
