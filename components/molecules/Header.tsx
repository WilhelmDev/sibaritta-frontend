import { useNavbarContext } from "@/context/navbar.context";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "../globals/Container";
import { Logo } from "../atoms/Logo";
import { MenuIcon } from "../atoms/MenuIcon";
import { Navbar } from "../molecules/Navbar";
import {MenuGeneral, MenuPerfil} from "@/components3/internaexperiencia/MenuGlobal";
import { newRoutes } from "@/utils/routes";
import ModalSession from "./ModalSession";
import ModalRegister from "./session/ModalRegister";
import RecoveryModal from "./recovery/RecoveryModal";
import ModalConfirmation from "./session/ModalConfirmation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isTopZero } = useNavbarContext();
  const { asPath } = useRouter();

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
  const IsOpenGeneral = () => setIsGeneral(true)
  const IsCloseGeneral = () => setIsGeneral(false)
  
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
        className={`Header ${
          isTopZero
            ? "background-white"
            : asPath === "/"
            ? "background-transparent"
            : "background-transparent"
        }`}
      >
        <div>
        <div className="sm:hidden">
                <div className="banderasMenus">
                  <ul>
                    <li >
                      <Link href={newRoutes.experiencias}>
                        <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" fill="#F7AB60"/>
                        <path d="M22.8502 68C22.4101 68 22.0547 68.3955 22.0547 68.8854C22.0547 69.3752 22.4101 69.7708 22.8502 69.7708C23.2903 69.7708 23.6457 69.3752 23.6457 68.8854C23.6457 68.3955 23.2903 68 22.8502 68Z" fill="#393533"/>
                        <path d="M25.7238 68.1511C25.6979 68.1511 25.6744 68.1484 25.6532 68.1484C25.6414 68.1484 25.6297 68.1511 25.6202 68.1511H25.6155C25.3143 68.1746 25.0742 68.4497 25.0742 68.7902C25.0742 69.1308 25.3143 69.4084 25.6155 69.4294H25.6391C25.6438 69.4294 25.6485 69.4294 25.6532 69.4294C25.6626 69.4294 25.6744 69.4294 25.6861 69.4294H27.0277V88.997H28.3904V69.432H35.0204V68.1511H25.7238Z" fill="#393533"/>
                        <path d="M19.8668 68.1511H19.8621C19.8503 68.1511 19.8385 68.1484 19.8291 68.1484C19.8079 68.1484 19.7844 68.1484 19.7561 68.1511H10.2266V69.432H16.8542V88.9997H18.2169V69.432H19.7938C19.7938 69.432 19.8173 69.432 19.8267 69.432C19.8315 69.432 19.8362 69.432 19.8409 69.432H19.8644C20.1657 69.4084 20.4057 69.1308 20.4057 68.7902C20.4057 68.4497 20.1657 68.172 19.8644 68.1511H19.8668Z" fill="#393533"/>
                        </svg>
                      </Link>

                    </li>
                    <li onClick={IsOpenGeneral}>
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_4576_11513" fill="white">
                      <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171C10.2975 121.171 0 110.873 0 98.1707V0Z"/>
                      </mask>
                      <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4576_11513)"/>
                      <path d="M33.56 85.8789H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                      <path d="M33.56 78.4395H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                      <path d="M33.56 71H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                      </svg>
                    </li>
                    <li onClick={openModalLogin}>
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_4576_11523" fill="white">
                      <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171C10.2975 121.171 0 110.873 0 98.1707V0Z"/>
                      </mask>
                      <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4576_11523)"/>
                      <path d="M23.4334 78.9698C26.0071 78.9698 28.0934 77.1857 28.0934 74.9849C28.0934 72.7841 26.0071 71 23.4334 71C20.8598 71 18.7734 72.7841 18.7734 74.9849C18.7734 77.1857 20.8598 78.9698 23.4334 78.9698Z" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                      <path d="M15 86.4093C16.56 83.784 19.75 81.9883 23.43 81.9883C27.11 81.9883 30.3 83.784 31.86 86.4093" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                      </svg>

                    </li>
                  </ul>
                </div>
          </div>
          <Logo className="Header-Logo2" />
          
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
                      <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171C10.2975 121.171 0 110.873 0 98.1707V0Z" fill="#F7AB60"/>
                      <path d="M22.8502 68C22.4101 68 22.0547 68.3955 22.0547 68.8854C22.0547 69.3752 22.4101 69.7708 22.8502 69.7708C23.2903 69.7708 23.6457 69.3752 23.6457 68.8854C23.6457 68.3955 23.2903 68 22.8502 68Z" fill="#393533"/>
                      <path d="M25.7238 68.1511C25.6979 68.1511 25.6744 68.1484 25.6532 68.1484C25.6414 68.1484 25.6297 68.1511 25.6202 68.1511H25.6155C25.3143 68.1746 25.0742 68.4497 25.0742 68.7902C25.0742 69.1308 25.3143 69.4084 25.6155 69.4294H25.6391C25.6438 69.4294 25.6485 69.4294 25.6532 69.4294C25.6626 69.4294 25.6744 69.4294 25.6861 69.4294H27.0277V88.997H28.3904V69.432H35.0204V68.1511H25.7238Z" fill="#393533"/>
                      <path d="M19.8668 68.1511H19.8621C19.8503 68.1511 19.8385 68.1484 19.8291 68.1484C19.8079 68.1484 19.7844 68.1484 19.7561 68.1511H10.2266V69.432H16.8542V88.9997H18.2169V69.432H19.7938C19.7938 69.432 19.8173 69.432 19.8267 69.432C19.8315 69.432 19.8362 69.432 19.8409 69.432H19.8644C20.1657 69.4084 20.4057 69.1308 20.4057 68.7902C20.4057 68.4497 20.1657 68.172 19.8644 68.1511H19.8668Z" fill="#393533"/>
                      </svg>
                    </Link>

                  </li>
                  <li onClick={IsOpenGeneral}>
                    <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_4576_11513" fill="white">
                    <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171C10.2975 121.171 0 110.873 0 98.1707V0Z"/>
                    </mask>
                    <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4576_11513)"/>
                    <path d="M33.56 85.8789H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M33.56 78.4395H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M33.56 71H13" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                  </li>
                  <li onClick={openModalLogin}>
                    <svg width="46" height="122" viewBox="0 0 46 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_4576_11523" fill="white">
                    <path d="M0 0H46V98.1707C46 110.873 35.7025 121.171 23 121.171C10.2975 121.171 0 110.873 0 98.1707V0Z"/>
                    </mask>
                    <path d="M0 0H46H0ZM47 98.1707C47 111.426 36.2548 122.171 23 122.171C9.74517 122.171 -1 111.426 -1 98.1707H1C1 110.321 10.8497 120.171 23 120.171C35.1503 120.171 45 110.321 45 98.1707H47ZM23 122.171C9.74517 122.171 -1 111.426 -1 98.1707V0H1V98.1707C1 110.321 10.8497 120.171 23 120.171V122.171ZM47 0V98.1707C47 111.426 36.2548 122.171 23 122.171V120.171C35.1503 120.171 45 110.321 45 98.1707V0H47Z" fill="#D7CABA" mask="url(#path-1-inside-1_4576_11523)"/>
                    <path d="M23.4334 78.9698C26.0071 78.9698 28.0934 77.1857 28.0934 74.9849C28.0934 72.7841 26.0071 71 23.4334 71C20.8598 71 18.7734 72.7841 18.7734 74.9849C18.7734 77.1857 20.8598 78.9698 23.4334 78.9698Z" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M15 86.4093C16.56 83.784 19.75 81.9883 23.43 81.9883C27.11 81.9883 30.3 83.784 31.86 86.4093" stroke="#F0A160" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          <div
            className={`Header-overlay ${isMenuOpen && "isActive"}`}
            onClick={closeMenu}
          />
        
        </Container>
      </header>
      {isGeneral && <MenuGeneral close={IsCloseGeneral}/>}
      {auttenti ? 
          openLogin && <MenuPerfil close={closeModalLogin} logout={logout}/>
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
