import { useNavbarContext } from "@/context/navbar.context";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "../globals/Container";
import { Logo } from "../atoms/Logo";
import { MenuIcon } from "../atoms/MenuIcon";
import { Navbar } from "../molecules/Navbar";
import { MenuGeneral, MenuPerfil } from "@/components3/internaexperiencia/MenuGlobal";
import { newRoutes } from "@/utils/routes";
import ModalSession from "./ModalSession";
import ModalRegister from "./session/ModalRegister";
import RecoveryModal from "./recovery/RecoveryModal";
import ModalConfirmation from "./session/ModalConfirmation";
import { useAppSelector } from "@/redux/hook";
import { classNames } from 'primereact/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isTopZero } = useNavbarContext();
  const { asPath } = useRouter();
  const [experiences, setExperiences] = useState<boolean>(false);
  const [insignas, setInsignas] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);

  useEffect(() => {
    console.log(asPath)
    const route = asPath.slice(1);
    if (route === 'perfil' || route === 'soporte' || route === 'reservaciones') {
      setProfile(true)
      setInsignas(false)
      setExperiences(false)
    } else if (route === 'insignias' || route === 'sibaritta') {
      setInsignas(true);
      setProfile(false)
      setExperiences(false)
    } else {
      setExperiences(true)
      setProfile(false)
      setInsignas(false)
    }
  }, [asPath])

  const [width, setWith] = useState<number>(0);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll");
  };

  const [isGeneral, setIsGeneral] =   useState<boolean>(false);
  const IsOpenGeneral = () => {
    document.body.classList.toggle("no-scroll");
    setIsGeneral(true)
  }
  const IsCloseGeneral = () => {
    document.body.classList.remove("no-scroll");
    setIsGeneral(false)
  }
  
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistro, setopenRegistro] = useState(false);
  const [openConfirmacion, setOpenConfirmacion] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [auttenti, setauttenti] = useState<boolean>(false);
  const local = useAppSelector((state) => state.local);


  const openModalLogin = () => {
    setOpenLogin(true);
    closeModalRegistro();
    document.body.classList.toggle("no-scroll");

  };
  const closeModalLogin = () => {
    setOpenLogin(false);
    document.body.classList.remove("no-scroll");
  };

  //registro
  const openModalRegistro = () => {
    setopenRegistro(true);
    closeModalLogin();
  };
  const closeModalRegistro = () => {
    setopenRegistro(false);
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

  const closeModalConfirmacion = () => {
    setOpenConfirmacion(false);
  };

  // confirmarcion
  const openModalConfirmacion = () => {
    setOpenConfirmacion(true);
    closeModalRegistro();
  };


  const logoTypeToShow = isTopZero && asPath === "/" ? 0 : 1;


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("code");
    localStorage.removeItem("notifyId");
    localStorage.removeItem("name_partner");
    localStorage.removeItem("fk_typeuser");
    localStorage.removeItem("fk_partner_id");
    localStorage.removeItem("experienId");
    localStorage.removeItem("_grecaptcha");
    localStorage.removeItem("reservation");
    closeModalLogin()
    setauttenti(false)
  }

  return (
    <>
      <header
        className={`Header ${isTopZero
          ? "background-white"
          : asPath === "/"
            ? "background-transparent"
            : "background-transparent"
          }`}
      >
        <div className="responsiveMenu">
          <div className="flex items-center">

            <div className="w-1/2 ">
              <Logo className="Header-Logo2" />

            </div>
            <div className="w-1/2">
              <div className="banderasMenus">
                <ul>
                  <li >
                    <Link href={newRoutes.experiencias}>
                      {experiences ? (
                        <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" fill="#F7AB60" />
                          <path d="M22.8482 68C22.4081 68 22.0527 68.3955 22.0527 68.8854C22.0527 69.3752 22.4081 69.7708 22.8482 69.7708C23.2884 69.7708 23.6438 69.3752 23.6438 68.8854C23.6438 68.3955 23.2884 68 22.8482 68Z" fill="#100A11" />
                          <path d="M25.7238 68.1511C25.6979 68.1511 25.6744 68.1484 25.6532 68.1484C25.6414 68.1484 25.6297 68.1511 25.6202 68.1511H25.6155C25.3143 68.1746 25.0742 68.4497 25.0742 68.7902C25.0742 69.1308 25.3143 69.4084 25.6155 69.4294H25.6391C25.6438 69.4294 25.6485 69.4294 25.6532 69.4294C25.6626 69.4294 25.6744 69.4294 25.6861 69.4294H27.0277V88.997H28.3904V69.432H35.0204V68.1511H25.7238Z" fill="#100A11" />
                          <path d="M19.8668 68.1511H19.8621C19.8503 68.1511 19.8385 68.1484 19.8291 68.1484C19.8079 68.1484 19.7844 68.1484 19.7561 68.1511H10.2266V69.432H16.8542V88.9997H18.2169V69.432H19.7938C19.7938 69.432 19.8173 69.432 19.8267 69.432C19.8315 69.432 19.8362 69.432 19.8409 69.432H19.8644C20.1657 69.4084 20.4057 69.1307 20.4057 68.7902C20.4057 68.4497 20.1657 68.172 19.8644 68.1511H19.8668Z" fill="#100A11" />
                        </svg>
                      ) : (
                        <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="path-1-inside-1_4829_1060" fill="white">
                            <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" />
                          </mask>
                          <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4829_1060)" />
                          <path d="M23.6217 68C23.1816 68 22.8262 68.3955 22.8262 68.8854C22.8262 69.3752 23.1816 69.7708 23.6217 69.7708C24.0618 69.7708 24.4172 69.3752 24.4172 68.8854C24.4172 68.3955 24.0618 68 23.6217 68Z" fill="#F7AB60" />
                          <path d="M26.4972 68.1511C26.4713 68.1511 26.4478 68.1484 26.4266 68.1484C26.4149 68.1484 26.4031 68.1511 26.3937 68.1511H26.389C26.0877 68.1746 25.8477 68.4497 25.8477 68.7902C25.8477 69.1308 26.0877 69.4084 26.389 69.4294H26.4125C26.4172 69.4294 26.4219 69.4294 26.4266 69.4294C26.436 69.4294 26.4478 69.4294 26.4596 69.4294H27.8011V88.997H29.1638V69.432H35.7938V68.1511H26.4972Z" fill="#F7AB60" />
                          <path d="M20.6402 68.1511H20.6355C20.6237 68.1511 20.612 68.1484 20.6025 68.1484C20.5814 68.1484 20.5578 68.1484 20.5296 68.1511H11V69.432H17.6276V88.9997H18.9903V69.432H20.5672C20.5672 69.432 20.5908 69.432 20.6002 69.432C20.6049 69.432 20.6096 69.432 20.6143 69.432H20.6378C20.9391 69.4084 21.1792 69.1307 21.1792 68.7902C21.1792 68.4497 20.9391 68.172 20.6378 68.1511H20.6402Z" fill="#F7AB60" />
                        </svg>
                      )}
                    </Link>

                  </li>
                  <li onClick={IsOpenGeneral} className="cursor-pointer">
                    {insignas ? (
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" fill="#F7AB60" />
                        <path d="M33.56 85.8789H13" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M33.56 78.4395H13" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M33.56 71H13" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                      </svg>
                    ) : (
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_4829_1068" fill="white">
                          <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" />
                        </mask>
                        <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4829_1068)" />
                        <path d="M33.56 85.8789H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M33.56 78.4395H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M33.56 71H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                      </svg>
                    )}
                  </li>
                  <li onClick={openModalLogin} className="cursor-pointer">
                    {profile ? (
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" fill="#F7AB60" />
                        <path d="M23.4334 78.9698C26.0071 78.9698 28.0934 77.1857 28.0934 74.9849C28.0934 72.7841 26.0071 71 23.4334 71C20.8598 71 18.7734 72.7841 18.7734 74.9849C18.7734 77.1857 20.8598 78.9698 23.4334 78.9698Z" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M15 86.4093C16.56 83.784 19.75 81.9883 23.43 81.9883C27.11 81.9883 30.3 83.784 31.86 86.4093" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                      </svg>
                    ) : (
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_4829_1061" fill="white">
                          <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" />
                        </mask>
                        <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4829_1061)" />
                        <path d="M23.4334 78.9698C26.0071 78.9698 28.0934 77.1857 28.0934 74.9849C28.0934 72.7841 26.0071 71 23.4334 71C20.8598 71 18.7734 72.7841 18.7734 74.9849C18.7734 77.1857 20.8598 78.9698 23.4334 78.9698Z" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M15 86.4093C16.56 83.784 19.75 81.9883 23.43 81.9883C27.11 81.9883 30.3 83.784 31.86 86.4093" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                      </svg>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <Container className="">
          <div className={`Header-menuIcon ${isMenuOpen && "isActive"}`}>
            <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
          </div>

          <div className="flex items-center	">
            <div className="w-1/2">
              <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            </div>
            <div className="w-1/2">
              <div className="banderasMenus">
                <ul>
                  <li >
                    <Link href={newRoutes.experiencias}>
                      {experiences ? (
                        <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" fill="#F7AB60" />
                          <path d="M22.8482 68C22.4081 68 22.0527 68.3955 22.0527 68.8854C22.0527 69.3752 22.4081 69.7708 22.8482 69.7708C23.2884 69.7708 23.6438 69.3752 23.6438 68.8854C23.6438 68.3955 23.2884 68 22.8482 68Z" fill="#100A11" />
                          <path d="M25.7238 68.1511C25.6979 68.1511 25.6744 68.1484 25.6532 68.1484C25.6414 68.1484 25.6297 68.1511 25.6202 68.1511H25.6155C25.3143 68.1746 25.0742 68.4497 25.0742 68.7902C25.0742 69.1308 25.3143 69.4084 25.6155 69.4294H25.6391C25.6438 69.4294 25.6485 69.4294 25.6532 69.4294C25.6626 69.4294 25.6744 69.4294 25.6861 69.4294H27.0277V88.997H28.3904V69.432H35.0204V68.1511H25.7238Z" fill="#100A11" />
                          <path d="M19.8668 68.1511H19.8621C19.8503 68.1511 19.8385 68.1484 19.8291 68.1484C19.8079 68.1484 19.7844 68.1484 19.7561 68.1511H10.2266V69.432H16.8542V88.9997H18.2169V69.432H19.7938C19.7938 69.432 19.8173 69.432 19.8267 69.432C19.8315 69.432 19.8362 69.432 19.8409 69.432H19.8644C20.1657 69.4084 20.4057 69.1307 20.4057 68.7902C20.4057 68.4497 20.1657 68.172 19.8644 68.1511H19.8668Z" fill="#100A11" />
                        </svg>
                      ) : (
                        <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="path-1-inside-1_4829_1060" fill="white">
                            <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" />
                          </mask>
                          <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4829_1060)" />
                          <path d="M23.6217 68C23.1816 68 22.8262 68.3955 22.8262 68.8854C22.8262 69.3752 23.1816 69.7708 23.6217 69.7708C24.0618 69.7708 24.4172 69.3752 24.4172 68.8854C24.4172 68.3955 24.0618 68 23.6217 68Z" fill="#F7AB60" />
                          <path d="M26.4972 68.1511C26.4713 68.1511 26.4478 68.1484 26.4266 68.1484C26.4149 68.1484 26.4031 68.1511 26.3937 68.1511H26.389C26.0877 68.1746 25.8477 68.4497 25.8477 68.7902C25.8477 69.1308 26.0877 69.4084 26.389 69.4294H26.4125C26.4172 69.4294 26.4219 69.4294 26.4266 69.4294C26.436 69.4294 26.4478 69.4294 26.4596 69.4294H27.8011V88.997H29.1638V69.432H35.7938V68.1511H26.4972Z" fill="#F7AB60" />
                          <path d="M20.6402 68.1511H20.6355C20.6237 68.1511 20.612 68.1484 20.6025 68.1484C20.5814 68.1484 20.5578 68.1484 20.5296 68.1511H11V69.432H17.6276V88.9997H18.9903V69.432H20.5672C20.5672 69.432 20.5908 69.432 20.6002 69.432C20.6049 69.432 20.6096 69.432 20.6143 69.432H20.6378C20.9391 69.4084 21.1792 69.1307 21.1792 68.7902C21.1792 68.4497 20.9391 68.172 20.6378 68.1511H20.6402Z" fill="#F7AB60" />
                        </svg>
                      )}
                    </Link>

                  </li>
                  <li onClick={IsOpenGeneral} className="cursor-pointer">
                    {insignas ? (
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" fill="#F7AB60" />
                        <path d="M33.56 85.8789H13" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M33.56 78.4395H13" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M33.56 71H13" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                      </svg>
                    ) : (
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_4829_1068" fill="white">
                          <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" />
                        </mask>
                        <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4829_1068)" />
                        <path d="M33.56 85.8789H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M33.56 78.4395H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M33.56 71H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                      </svg>
                    )}
                  </li>
                  <li onClick={openModalLogin} className="cursor-pointer">
                    {profile ? (
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" fill="#F7AB60" />
                        <path d="M23.4334 78.9698C26.0071 78.9698 28.0934 77.1857 28.0934 74.9849C28.0934 72.7841 26.0071 71 23.4334 71C20.8598 71 18.7734 72.7841 18.7734 74.9849C18.7734 77.1857 20.8598 78.9698 23.4334 78.9698Z" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M15 86.4093C16.56 83.784 19.75 81.9883 23.43 81.9883C27.11 81.9883 30.3 83.784 31.86 86.4093" stroke="#100A11" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                      </svg>
                    ) : (
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_4829_1061" fill="white">
                          <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171V121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" />
                        </mask>
                        <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4829_1061)" />
                        <path d="M23.4334 78.9698C26.0071 78.9698 28.0934 77.1857 28.0934 74.9849C28.0934 72.7841 26.0071 71 23.4334 71C20.8598 71 18.7734 72.7841 18.7734 74.9849C18.7734 77.1857 20.8598 78.9698 23.4334 78.9698Z" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M15 86.4093C16.56 83.784 19.75 81.9883 23.43 81.9883C27.11 81.9883 30.3 83.784 31.86 86.4093" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" />
                      </svg>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`Header-overlay ${isMenuOpen && "isActive"} cursor-pointer`}
            onClick={closeMenu}
          />

        </Container >
      </header >
      {isGeneral && <MenuGeneral close={IsCloseGeneral} />}
      {
        (+local.local === 1) ?
          openLogin && <MenuPerfil close={closeModalLogin} logout={logout} />
          :
          <>
            <ModalSession
              setautenti={autenticationUser}
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
          </>
      }

    </>
  );
};

export default Header;
