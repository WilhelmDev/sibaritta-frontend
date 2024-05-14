import React, { useEffect, useState } from "react";
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
import { pendingNotification } from "@/services/notifyMessage.service";

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
  const [pending, setPending] = useState<boolean>(false);
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
  const checkPending = async () => {
    try {
      const pending = await pendingNotification();
      setPending(pending);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    checkPending();
  }, [visibleRight]);

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
         
            <Image
              src={user?.avatar ? user?.avatar : "/img/person.png"}
              alt=""
              width={100}
              height={100}
              className="w-[9.2rem] h-[9.2rem] rounded-full"
            />
          </div>

          <div className="side-container-items">
            <div className="side-items" onClick={() => goLink("/somos")}>
              <span>Ver Experiencias</span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.125 15.8633H18.875M1 21.9091V13.4007C1 12.5506 1 12.1253 1.10558 11.7298C1.19914 11.3792 1.35391 11.0475 1.56177 10.7477C1.79632 10.4094 2.12229 10.1289 2.77576 9.56908L10.5783 2.88484C11.7898 1.84706 12.3955 1.32814 13.0777 1.13063C13.6792 0.956457 14.3204 0.956457 14.922 1.13063C15.6047 1.32829 16.2113 1.8477 17.4246 2.88705L25.2246 9.56907C25.878 10.1289 26.2041 10.4094 26.4387 10.7477C26.6465 11.0475 26.8001 11.3792 26.8937 11.7298C26.9993 12.1253 27 12.5506 27 13.4007V21.9146C27 23.6932 27 24.5834 26.6461 25.2634C26.3345 25.8621 25.836 26.3485 25.2245 26.6535C24.53 27 23.6216 27 21.805 27H6.19498C4.37837 27 3.4687 27 2.77417 26.6535C2.16264 26.3485 1.66582 25.8621 1.35423 25.2634C1 24.5828 1 23.6911 1 21.9091Z" stroke="#F89C53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

            </div>
            <div className="side-items" onClick={() => goLink("/sibaritta")}>
              <span>Quiénes Somos</span>
              <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2201 0.5C12.794 0.5 12.4501 0.876716 12.4501 1.34325C12.4501 1.80977 12.794 2.18649 13.2201 2.18649C13.6461 2.18649 13.9901 1.80977 13.9901 1.34325C13.9901 0.876716 13.6461 0.5 13.2201 0.5Z" fill="#37323A"/>
              <path d="M16.0014 0.643817C15.9764 0.643817 15.9536 0.641322 15.9331 0.641322C15.9217 0.641322 15.9103 0.643817 15.9012 0.643817H15.8966C15.605 0.66627 15.3727 0.928225 15.3727 1.25255C15.3727 1.57688 15.605 1.84133 15.8966 1.86128H15.9194C15.924 1.86128 15.9285 1.86128 15.9331 1.86128C15.9422 1.86128 15.9536 1.86128 15.965 1.86128H17.2635V20.4975H18.5825V1.86378H25V0.643817H16.0014Z" fill="#37323A"/>
              <path d="M10.3312 0.643817H10.3266C10.3152 0.643817 10.3038 0.641322 10.2947 0.641322C10.2742 0.641322 10.2514 0.641322 10.2241 0.643817H1V1.86378H7.41517V20.5H8.7342V1.86378H10.2605C10.2605 1.86378 10.2833 1.86378 10.2924 1.86378C10.297 1.86378 10.3015 1.86378 10.3061 1.86378H10.3289C10.6205 1.84133 10.8528 1.57688 10.8528 1.25255C10.8528 0.928225 10.6205 0.663776 10.3289 0.643817H10.3312Z" fill="#37323A"/>
              <path d="M13.2201 0.5C12.794 0.5 12.4501 0.876716 12.4501 1.34325C12.4501 1.80977 12.794 2.18649 13.2201 2.18649C13.6461 2.18649 13.9901 1.80977 13.9901 1.34325C13.9901 0.876716 13.6461 0.5 13.2201 0.5Z" stroke="#37323A" strokeWidth="0.5"/>
              <path d="M16.0014 0.643817C15.9764 0.643817 15.9536 0.641322 15.9331 0.641322C15.9217 0.641322 15.9103 0.643817 15.9012 0.643817H15.8966C15.605 0.66627 15.3727 0.928225 15.3727 1.25255C15.3727 1.57688 15.605 1.84133 15.8966 1.86128H15.9194C15.924 1.86128 15.9285 1.86128 15.9331 1.86128C15.9422 1.86128 15.9536 1.86128 15.965 1.86128H17.2635V20.4975H18.5825V1.86378H25V0.643817H16.0014Z" stroke="#37323A" strokeWidth="0.5"/>
              <path d="M10.3312 0.643817H10.3266C10.3152 0.643817 10.3038 0.641322 10.2947 0.641322C10.2742 0.641322 10.2514 0.641322 10.2241 0.643817H1V1.86378H7.41517V20.5H8.7342V1.86378H10.2605C10.2605 1.86378 10.2833 1.86378 10.2924 1.86378C10.297 1.86378 10.3015 1.86378 10.3061 1.86378H10.3289C10.6205 1.84133 10.8528 1.57688 10.8528 1.25255C10.8528 0.928225 10.6205 0.663776 10.3289 0.643817H10.3312Z" stroke="#37323A" strokeWidth="0.5"/>
              </svg>

            </div>
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
              {pending && <div className="animate-pulse h-5 w-5 rounded-full bg-red-500"></div>}
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
