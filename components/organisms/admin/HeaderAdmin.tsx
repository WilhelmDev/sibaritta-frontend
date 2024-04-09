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
import { NavbarAdmin } from "@/components/molecules/partner/admin/NavbarAdmin";
import CustomSelect from "@/components/atoms/CustomSelect";
import { ArrowBottom } from "@/components/ui/icons/ArrowBottom";

const HeaderAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showCustomSelect, setshowCustomSelect] = useState<boolean>(false);

  const [width, setWith] = useState<number>(0);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll");
  };

  const openCustomSelect = () => {
    setshowCustomSelect(!showCustomSelect);
  };

  useEffect(() => {
    setWith(window.innerWidth);
  }, []);

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

  return (
    <div className="HeaderAdmin">
      <div className="header-partner-container-main main-page">
        <div className="header-partner-container-child main-page">
          <div className="control-move-movil"></div>
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(37, 33, 39, 1), rgba(0, 0, 0, 0)), url('/admin/headerImageAdmin.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 999,
              position: "relative",
            }}
            className="header-partner-general-container main-page z-[999] relative"
          >
            <header className="header-general-container-1">
              <div className="header-general-image-left">
                <Image
                  width={2000}
                  height={2000}
                  src={"/home/social/logo.svg"}
                  alt="Logo de la marca"
                />
              </div>

              <div className="header-general-right">
                <div className="header-general-text">
                  <p className="header-general-text-1">Bienvenido</p>
                  <p className="header-general-text-2">Sibaritta</p>
                  <p onClick={logout} className="header-general-text-3">
                    Cerrar sesión
                  </p>
                </div>
                <div className="header-general-image-right-1">
                  <Image
                    width={2000}
                    height={2000}
                    src={"/admin/TT Sibaritta.png"}
                    alt="Logo de la marca"
                    className="header-general-image-right-image-1"
                  />
                </div>

                <Container className="Header-ctn  containerrrr">
                  <div
                    className={`Header-menuIcon ${isMenuOpen && "isActive"}`}
                  >
                    <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
                  </div>
                  <NavbarAdmin isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
                  <div
                    className={`Header-overlay ${isMenuOpen && "isActive"}`}
                    onClick={closeMenu}
                  />
                </Container>
              </div>
            </header>

            <div className="header-general-container-2 ">
              <Link
                href={"/admin/admin_home"}
                className="text-header-bottom cursor-pointer"
              >
                Dashboard
              </Link>
              <Link href={""} legacyBehavior>
                <div className="text-header-bottom cursor-pointer">
                  Experiencias a revisar
                </div>
              </Link>
              {/* <Link href={"/admin/perfil_partners"} legacyBehavior> */}
              <div className="flex gap-[.5rem] flex-col  items-center relative">
                <div className="flex items-center gap-[1rem]">
                  <div className="text-header-bottom cursor-pointer ">
                    Partners
                  </div>
                  <div onClick={openCustomSelect} className="cursor-pointer  ">
                    <div className="box_content_search_triangulo"></div>
                  </div>
                </div>

                {showCustomSelect && (
                  <div className="absolute top-[3rem] right-0">
                    <CustomSelect setshowCustomSelect={setshowCustomSelect} />
                  </div>
                )}
              </div>
              {/* </Link> */}
              <Link
                href={"/admin/perfil_socio"}
                className="text-header-bottom cursor-pointer"
              >
                Socios
              </Link>
              <Link href={"/admin/admin_ventas_partners"} legacyBehavior>
                <div className="text-header-bottom cursor-pointer">
                  Facturación
                </div>
              </Link>
              <Link
                href={""}
                className="text-header-bottom-notification text-header-bottom cursor-pointer"
              >
                <h1>Notificaciones</h1>
                <div className="text-header-bottom-image">
                  <Image
                    width={1000}
                    height={1000}
                    src={"/admin/bell.png"}
                    alt=""
                  />
                </div>
                <p>3</p>
              </Link>
              {/* <div className="text-header-bottom cursor-pointer" onClick={logout}>
              Cerrar sesión
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
