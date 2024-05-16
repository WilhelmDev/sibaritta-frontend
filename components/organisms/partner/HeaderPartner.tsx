import { useAppDispatch } from "@/redux/hook";
import { useNavbarContext } from "@/context/navbar.context";
import { setUser } from "@/redux/slice/user";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import LogoSeratta from "@/public/ventas_sibarita/LOGO_SERATTA.png";
import SibarittaLetterUnion from "@/public/header_partner/SibarittaLetterUnion 214.png";
import MenuMovil from "@/public/header_partner/MenuMovil.png";
import { Navbar } from "@/components/molecules/Navbar";
import { MenuIcon } from "@/components/atoms/MenuIcon";
import { NavbarPartner } from "@/components/molecules/partner/NavbarPartner";
import { Logo } from "@/components/atoms/Logo";
import { Container } from "@/components/globals/Container";
import { getUserById } from "@/services/login.services";
import { IUser } from "@/interface/user.interface";

const HeaderPartner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isTopZero } = useNavbarContext();
  const { asPath } = useRouter();
  const [infoData, setinfoData] = useState<IUser>();

  const [width, setWith] = useState<number>(0);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll");
  };

  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("fk_typeuser");
    dispatch(
      setUser({
        email: "",
        name: "",
      })
    );

    dispatch(
      setUser({
        local: "",
      })
    );
    push("/");
  };

  let userId: any = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const getUserByIds = async () => {
    try {
      const rest = await getUserById(userId);
      setinfoData(rest.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setWith(window.innerWidth);
    getUserByIds();
  }, []);


  return (
    <div className="header-partner-container-main main-page">
      <div className="header-partner-container-child main-page">
        <div className="control-move-movil"></div>
        <div
          style={{
            backgroundImage: "url('/assets/partner_ui1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="header-partner-general-container main-page"
        >
          <header className="header-general-container-1">
            <div className="header-general-image-left">
              <Link href={"/home_partner"}>
                <Image
                  width={2000}
                  height={2000}
                  src={"/logo.png"}
                  alt="Logo de la marca"
                />
              </Link>
            </div>

            <div className="header-general-right">
              <div className="header-general-text">
                <p className="header-general-text-1">Bienvenido</p>
                <p className="header-general-text-2">
                  {infoData?.partner?.comercial_name}{" "}
                </p>
                <div className="header-general-button cursor-pointer" onClick={logout}>
                  Cerrar sesión
                </div>
              </div>
              <div className="header-general-image-right-1 overflow-hidden">
                <Image
                  width={2000}
                  height={2000}
                  src={infoData?.avatar}
                  alt="Logo de la marca"
                  className="header-general-image-right-image-1"
                />
              </div>

              <Container className="Header-ctn  containerrrr">
                <div className={`Header-menuIcon ${isMenuOpen && "isActive"}`}>
                  <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
                </div>
                <NavbarPartner isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
                <div
                  className={`Header-overlay ${isMenuOpen && "isActive"}`}
                  onClick={closeMenu}
                />
              </Container>
              {/* <button className="header-general-image-right-2">
            <Image
              width={2000}
              height={2000}
              src={MenuMovil}
              alt="Logo de la marca"
              className="header-general-image-right-image-2"
            />
          </button> */}
            </div>
          </header>

          <div className="header-general-container-2 ">
            <Link href={"/ultimas_reservas"} legacyBehavior>
              <div className="text-header-bottom cursor-pointer">
                Dashboard
              </div>
            </Link>
            <Link href={"/perfil_partner"} legacyBehavior>
              <div className="text-header-bottom cursor-pointer">
                Perfil partner
              </div>
            </Link>
            <Link
              href={"/partner"}
              className="text-header-bottom cursor-pointer"
            >
              Experiencias
            </Link>
            <Link
              href={"/suggestion"}
              className="text-header-bottom cursor-pointer"
            >
              Sugerencias
            </Link>
            <Link href={"/ventas_sibaritta"} legacyBehavior>
              <div className="text-header-bottom cursor-pointer">
                Facturación
              </div>
            </Link>
            <Link
              href={"/policies"}
              className="text-header-bottom cursor-pointer"
            >
              Politicas
            </Link>
            <Link
              href={"/notificacion_partner"}
              className="text-header-bottom notification-bottom cursor-pointer"
            >
              Notificaciones
              <Image
                src={"/icons/campana.svg"}
                width={500}
                height={500}
                alt=""
                className="icon-bell"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPartner;
