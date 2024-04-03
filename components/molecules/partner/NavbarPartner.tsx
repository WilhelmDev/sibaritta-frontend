import Link from "next/link";
import { Router, useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useNavbarContext } from "@/context/navbar.context";
import { goToSection } from "@/lib/utils";
import { Logo } from "@/components/atoms/Logo";
import ModalSession from "../ModalSession";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setUser } from "@/redux/slice/user";
import SideBarPerfil from "@/components/organisms/SideBarPerfil";
import axios from "axios";
import getConfig from "@/utils/getConfig";
import ModalRegister from "../session/ModalRegister";
import ModalConfirmation from "../session/ModalConfirmation";
import RecoveryModal from "../recovery/RecoveryModal";
import { getUserById } from "@/services/user.service";

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}
interface User {
  id: number;
}

export const NavbarPartner: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
  const { activeSection, setScrolltoSectionFromOtherPage } = useNavbarContext();
  const { asPath } = useRouter();
  const { isTopZero } = useNavbarContext();
  const [visibleRight, setVisibleRight] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistro, setopenRegistro] = useState(false);
  const [openConfirmacion, setOpenConfirmacion] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [auttenti, setauttenti] = useState(false);

  const autenticationUser = () => {
    setauttenti(true);
  };

  //login
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

  const openSideBard = () => {
    setVisibleRight(true);
    closeMenu();
    // document.body.style.overflow = "hidden";
  };
  const dispatch = useAppDispatch();
  const userRedux = useAppSelector((state) => state.user);

  const handleGoToSection = (url: string) => {
    goToSection(url);
    closeMenu();
  };

  const handleGoToSectionFromOtherPage = (url: string) => {
    setScrolltoSectionFromOtherPage(url);
    closeMenu();
  };

  const polylang = {
    menu: [
      {
        id: 1,
        label: "Calendario",
        url: "/sibaritta",
      },
      {
        id: 2,
        label: "Perfil restaurante",
        url: "/perfil_partner",
      },
      {
        id: 3,
        label: "Reservaciones",
        url: "/ultimas_reservas",
      },
      {
        id: 4,
        label: "Experiencias",
        url: "/soporte",
      },
      {
        id: 5,
        label: "Facturación",
        url: "/ventas_sibaritta",
      },
      {
        id: 6,
        label: "Notificaciones",
        url: "",
      },
      // {
      //   id: 7,
      //   label: "Cerrar sesión",
      //   url: "",
      // },
    ],
  };

  const half = 6;
  const menuPartOne = [...polylang.menu].slice(0, 7);
  //   const menuSection = [...polylang.menu].slice(1, 2);
  //   const menulink = [...polylang.menu].slice(2, 4);

  const menuPartTwo = [...polylang.menu].slice(half);

  let userId = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }
  const router = useRouter();
  const getUserByIds = async () => {
    try {
      const res = await getUserById(userId!);
      if (userId!) {
        const responseData = {
          email: res.data.email,
          name: res.data.name,
          avatar: res.data.avatar,
        };
        dispatch(setUser(responseData));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const sibaritta = () => {
    router.push("/sibaritta");
  };

  useEffect(() => {
    if (userId!) {
      getUserByIds();
    }
  }, [visibleRight, userId]);
  useEffect(() => {
    // Si el usuario se ha autenticado correctamente, redirigirlo a la ruta de checkout
    if (auttenti) {
      router.push("/checkout");
    }
  }, [auttenti]);

  return (
    <div>
      <nav
        className={`Navbar ${isMenuOpen ? "isActive" : ""} ${
          isTopZero ? "shadow-none" : ""
        }`}
      >
        <Logo className="Navbar-logo" alt={true} />
        <Logo className={`Header-Logo`} />

        <div className="Navbar-ctn">
          <ul className="Navbar-ul">
            {menuPartOne.map(({ id, label, url }) => (
              <Link
                key={id}
                href={url}
                className={`Navbar-ul-link`}
                onClick={closeMenu}
              >
                <li
                  className={`Navbar-ul-li ${
                    label === "Location" ? "location" : ""
                  }`}
                >
                  {label}
                </li>
              </Link>
            ))}

            {/* {menuSection.map(({ id, label, url }) =>
              asPath !== "/" ? (
                <Link
                  key={id}
                  href={"/"}
                  className={`Navbar-ul-link`}
                  onClick={() => handleGoToSectionFromOtherPage(url)}
                >
                  <li
                    className={`Navbar-ul-li !text-white ${
                      label === "Location" ? "location" : ""
                    }`}
                    onClick={() => setScrolltoSectionFromOtherPage(url)}
                  >
                    {label}
                  </li>
                </Link>
              ) : (
                <li
                  key={id}
                  className={`Navbar-ul-li ${
                    "/" === asPath && activeSection === url ? "isActive" : ""
                  } ${label === "Perfil" ? "perfil" : ""}`}
                  onClick={() => {
                    handleGoToSection(url);
                  }}
                >
                  {label}
                </li>
              )
            )} */}

            {/* {menulink.map(({ id, label, url }) => (
              <Link
                key={id}
                href={url}
                className={`Navbar-ul-link`}
                onClick={closeMenu}
              >
                <li
                  className={`Navbar-ul-li ${
                    label === "Location" ? "location" : ""
                  }`}
                >
                  {label}
                </li>
              </Link>
            ))} */}

            {menuPartTwo.map(({ id, label, url }) =>
              !userRedux.email ? (
                <div key={id} onClick={closeMenu} className="Navbar-ul-contact">
                  <li
                    className={`Navbar-ul-contact-li ${
                      url === asPath && "isActive"
                    }  ${url === "/profile" && "profile"} `}
                    onClick={() => {
                      openModalLogin();
                      setScrolltoSectionFromOtherPage(url);
                    }}
                  >
                    {label}
                    <span className="arrow"></span>
                  </li>
                </div>
              ) : (
                <li
                  key="login"
                  className={`Navbar-ul-li profile`}
                  onClick={openSideBard}
                >
                  Perfil
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      <SideBarPerfil
        visibleRight={visibleRight}
        setVisibleRight={setVisibleRight}
      />
      {openLogin && (
        <ModalSession
          closeModalLogin={closeModalLogin}
          openModalRegistro={openModalRegistro}
          openRegistro={openRegistro}
          openLogin={openLogin}
          openModalForgot={openModalForgot}
        />
      )}

      {openRegistro && (
        <ModalRegister
          openModalLogin={openModalLogin}
          closeModalRegistro={closeModalRegistro}
          openLogin={openLogin}
          openRegistro={openRegistro}
          openModalConfirmacion={openModalConfirmacion}
          setautenti={autenticationUser}
        />
      )}

      {openConfirmacion && (
        <ModalConfirmation
          closeModalConfirmacion={closeModalConfirmacion}
          openConfirmacion={openConfirmacion}
        />
      )}

      {openForgot && (
        <RecoveryModal
          openForgot={openForgot}
          closeModalForgot={closeModalForgot}
        />
      )}
     
    </div>
  );
};
