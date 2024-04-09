import React from "react";
import { Sidebar } from "primereact/sidebar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setUser } from "@/redux/slice/user";

import { User } from "../ui/icons/User";
import { ReservationIcons } from "../ui/icons/ReservationIcon";
import { NotificationIcons } from "../ui/icons/NotificationIcons";
import { SuportIcons } from "../ui/icons/SupportIcons";
import { CloseIcons } from "../ui/icons/CloseIcons";

interface SideBarPerfilProps {
  visibleRight: boolean;
  setVisibleRight: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBarPerfil = ({
  visibleRight,
  setVisibleRight,
}: SideBarPerfilProps) => {
  const closeModal = () => {
    setVisibleRight(false);
    // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
  };
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const goLink = (url: string) => {
    router.push(url);
    closeModal();
    setTimeout(() => {
      // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
    }, 500);
  };

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
    localStorage.removeItem("modal_validate");
    closeModal();
    dispatch(
      setUser({
        email: "",
        name: "",
      })
    );
    // dispatch(
    //   setCatcha({
    //     captcha: "",
    //   })
    // );
  
    router.push("/");
  };
  return (
    <div>
      <Sidebar visible={visibleRight} position="right" onHide={closeModal}>
        <div className="absolute top-[3.8rem] w-[5.0798rem] h-[3.864rem] left-[3.8rem]">
          <Image
            src={"/img/sideImage.png"}
            alt=""
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="side-color"></div>
        <div className="side-container">
          <div className="side-image">
            <h1 className="side-h1">
              ¡Hola! <br /> <h3>{user.name}</h3>
            </h1>
            <Image
              src={user?.avatar ? user?.avatar : "/img/person.png"}
              alt=""
              width={100}
              height={100}
              className="w-[9.2rem] h-[9.2rem] rounded-full"
            />
          </div>

          <div className="side-container-items">
            <div className="side-items" onClick={() => goLink("/perfil")}>
              <span>Información personal</span>
              <User />
            </div>

            <div
              className="side-items"
              onClick={() => goLink("/reservaciones")}
            >
              <span>Reservaciones</span>
              <ReservationIcons />
            </div>

            <div
              className="side-items"
              onClick={() => goLink("/notificaciones")}
            >
              <span>Notificaciones</span>
              <NotificationIcons />{" "}
            </div>

            <div className="side-items" onClick={() => goLink("/soporte")}>
              <span>Soporte en línea</span>
              <SuportIcons />{" "}
            </div>
            <div className="side-items" onClick={logout}>
              <span>Cerrar sesión</span>
              <CloseIcons />{" "}
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default SideBarPerfil;
