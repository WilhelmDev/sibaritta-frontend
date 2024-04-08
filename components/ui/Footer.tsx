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
import { Instagram } from "./icons/Instagram";
import { Twiter } from "./icons/Twiter";
import { Tiktok } from "./icons/Tiktok";
import { Youtube } from "./icons/Youtube";

const Footer = () => {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistro, setopenRegistro] = useState(false);
  const [openConfirmacion, setOpenConfirmacion] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [auttenti, setauttenti] = useState(false);

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
    <div className=" bg-[#161417]">
      <div className="container-general">
    <div className="w-full ">
      <footer className="homeFooter">
      <section className="homeFooter_info">
        <div className="  flex flex-col items-center  gap-[1.5rem]">
          <div className="logosibarita-foter-logo  ">
            <Image
              src="/home/social/logo.svg"
              alt="logo"
              className="w-full h-full"
              width={1000}
              height={1000}
            />
          </div>
          <div className="homeSocial_info-icons ">
            <Link
              href={
                "https://www.instagram.com/sibaritta_mx?igsh=MTB2eXl4ZTM0NnZmYg%3D%3D"
              }
              target="_blank"
              className="homeSocial_info_icon-two"
            >
              <Instagram />
            </Link>
            <Link
              href={"https://www.facebook.com/SibarittaMx?mibextid=ZbWKwL"}
              target="_blank"
              className="homeSocial_info_icon-two"
            >
              <Twiter />
            </Link>
            <Link
              href={"https://www.tiktok.com/@sibaritta_mx?_t=8jifkXuaDMz&_r=1"}
              target="_blank"
              className="homeSocial_info_icon-two"
            >
              <Tiktok />
            </Link>
            <Link
              href={"https://www.youtube.com/@Sibaritta-Experiencias"}
              target="_blank"
              className="homeSocial_info_icon-two"
            >
              <Youtube />
            </Link>
          </div>
        </div>




        <article className="homeFooter_info_datos">
          <h3 className="homeFooter_info_datos_h2">Sibaritta</h3>
          <Link href={"/sibaritta"} className={`Navbar-ul-link`}>
            <p className="homeFooter_info_datos_p">¿Cómo funciona?</p>
          </Link>
          <Link href={"/soporte"} className={`Navbar-ul-link`}>
            <p className="homeFooter_info_datos_p">FAQs</p>
          </Link>
          <Link href={"/soporte"} className={`Navbar-ul-link`}>
            <p className="homeFooter_info_datos_p">Contáctanos</p>
          </Link>

          {/* <p className="homeFooter_info_datos_p">Lorem Ipsum</p> */}

        </article>

        <article className="homeFooter_info_datos">
          <h3 className="homeFooter_info_datos_h2">Socios</h3>
          <p
            onClick={openModalRegistro}
            className="homeFooter_info_datos_p cursor-pointer"
          >
            Regístrate
          </p>
          <p
            onClick={openModalLogin}
            className="homeFooter_info_datos_p cursor-pointer"
          >
            Iniciar sesión
          </p>
          {/* <p className="homeFooter_info_datos_p">Lorem Ipsum</p>
          <p className="homeFooter_info_datos_p">Lorem Ipsum</p> */}
        </article>
        <article className="homeFooter_info_datos">
          <h3 className="homeFooter_info_datos_h2">Partners</h3>
          <Link href={"/sibaritta_business"} className={`Navbar-ul-link`}>
            <p className="homeFooter_info_datos_p">Partner Sibaritta</p>
          </Link>

          {/* <p className="homeFooter_info_datos_p">Lorem Ipsum</p>
          <p className="homeFooter_info_datos_p">Lorem Ipsum</p>
          <p className="homeFooter_info_datos_p">Lorem Ipsum</p> */}
        </article>




      </section>
      <section className="home_footer_copy">
        <h5 className="home_footer_copy_p">©2024 Sibarita.</h5>
        {/* <div className="home_footer_copy_terminos">
      <p className="home_footer_copy_p">Privacidad</p>
      <p className="home_footer_copy_p">Términos</p>
      <p className="home_footer_copy_p">Mapa del sitio</p>
      <p className="home_footer_copy_p">Datos de  la empresa</p>
  </div> */}
      </section>


      <ModalSession
        // setautenti={autenticationUser}
        closeModalLogin={closeModalLogin}
        openModalRegistro={openModalRegistro}
        openRegistro={openRegistro}
        openLogin={openLogin}
        openModalForgot={openModalForgot}
      />

      {openRegistro && (
        <ModalRegister
          closeModalRegistro={closeModalRegistro}
          openModalLogin={openModalLogin}
          openLogin={openLogin}
          openRegistro={openRegistro}
          openModalConfirmacion={openModalConfirmacion}
          setautenti={autenticationUser}
        />
      )}
      {openForgot && (
        <RecoveryModal
          openForgot={openForgot}
          closeModalForgot={closeModalForgot}
        />
      )}
      {openConfirmacion && (
        <ModalConfirmation
          closeModalConfirmacion={closeModalConfirmacion}
          openConfirmacion={openConfirmacion}
        />
      )}
    </footer>
    </div>
    </div>
    </div>
  );
};

export default Footer;
