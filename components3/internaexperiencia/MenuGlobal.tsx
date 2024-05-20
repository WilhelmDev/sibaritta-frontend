import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { newRoutes } from "@/utils/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useOnClickOutside from "@/components3/OutsideClick";


const MenuGeneral = ({close}) => {
  const ref = useRef(null);
  useOnClickOutside(ref,close);
  return(
    <div ref={ref} className={`menuGlobal__general menuGlobal--general`} data-aos="fade-left">
        <div className="menuGlobal__general__top">
            <div className="flex items-center">
            <div className="w-1/2">
                <div className="menuGlobal__general__left">
                <Link href={newRoutes.home}>
                <svg width="50"  viewBox="0 0 44 38" xmlns="http://www.w3.org/2000/svg"><path d="m21.934 0c-0.7647 0-1.3821 0.70568-1.3821 1.5796 0 0.87392 0.6174 1.5796 1.3821 1.5796s1.3822-0.70567 1.3822-1.5796c0-0.87392-0.6175-1.5796-1.3822-1.5796z" fill="#100A11"></path><path d="m26.927 0.2703c-0.0449 0-0.0858-0.004673-0.1226-0.004673-0.0205 0-0.0409 0.004673-0.0573 0.004673h-0.0082c-0.5234 0.042061-0.9405 0.53276-0.9405 1.1403 0 0.60754 0.4171 1.1029 0.9405 1.1403h0.0409 0.0246 0.0572 2.3309v34.91h2.3676v-34.905h11.519v-2.2853h-16.152z" fill="#100A11"></path><path d="m16.749 0.2703h-0.0081c-0.0205 0-0.0409-0.004673-0.0573-0.004673-0.0368 0-0.0777 0-0.1267 0.004673h-16.557v2.2853h11.515v34.91h2.3676v-34.91h2.7398 0.0572 0.0246 0.0409c0.5234-0.04206 0.9405-0.53743 0.9405-1.145 0-0.60754-0.4171-1.1029-0.9405-1.1403h4e-3z" fill="#100A11"></path></svg>
                </Link>
                </div>
            </div>
            <div className="w-1/2">
                <div className="menuGlobal__general__right text-right">
                <button onClick={close}>
                    <Image
                    src={"/header_partner/menuright.png"}
                    className="ml-auto"
                    width={50}
                    height={50}
                    alt="logo"
                    />
                </button>
                </div>
            </div>
            </div>
        </div>

        <div className="menuGlobal__general__item">
            <ul>
            {/* <li>
                <Link href={newRoutes.nosotros}>
                ¿Quiénes somos?
                <span>
                    <img src={"/header_partner/user.png"} alt="logo" />
                </span>
                </Link>
            </li>
            <li>
                <Link href={newRoutes.partner}>
                Sibaritta Partners
                <span>
                    <img src={"/header_partner/sibaritta.png"} alt="logo" />
                </span>
                </Link>
            </li> */}
            <li>
                <Link href={newRoutes.nosotros} onClick={close}>
                ¿Cómo funciona?
                <span>
                    <img src={"/header_partner/funciona.png"} alt="logo" />
                </span>
                </Link>
            </li>
            <li>
                <Link href={newRoutes.insignias} onClick={close}>
                Insignias
                <span>
                    <img src={"/header_partner/lock.png"} alt="logo" />
                </span>
                </Link>
            </li>
            </ul>
        </div>
      </div>
    )
}

const MenuPerfil = ({close, logout}) => {
  const ref = useRef(null);
  useOnClickOutside(ref,close);
  return(
    <div ref={ref} className="menuGlobal__general menuGlobal--perfil" data-aos={"fade-left"}>
      <div className="menuGlobal__general__top">
        <div className="flex items-center">
          <div className="w-1/2">
            <div className="menuGlobal__general__left">
              <Link href={newRoutes.nosotros}>
              <svg width="50"  viewBox="0 0 44 38" xmlns="http://www.w3.org/2000/svg"><path d="m21.934 0c-0.7647 0-1.3821 0.70568-1.3821 1.5796 0 0.87392 0.6174 1.5796 1.3821 1.5796s1.3822-0.70567 1.3822-1.5796c0-0.87392-0.6175-1.5796-1.3822-1.5796z" fill="#100A11"></path><path d="m26.927 0.2703c-0.0449 0-0.0858-0.004673-0.1226-0.004673-0.0205 0-0.0409 0.004673-0.0573 0.004673h-0.0082c-0.5234 0.042061-0.9405 0.53276-0.9405 1.1403 0 0.60754 0.4171 1.1029 0.9405 1.1403h0.0409 0.0246 0.0572 2.3309v34.91h2.3676v-34.905h11.519v-2.2853h-16.152z" fill="#100A11"></path><path d="m16.749 0.2703h-0.0081c-0.0205 0-0.0409-0.004673-0.0573-0.004673-0.0368 0-0.0777 0-0.1267 0.004673h-16.557v2.2853h11.515v34.91h2.3676v-34.91h2.7398 0.0572 0.0246 0.0409c0.5234-0.04206 0.9405-0.53743 0.9405-1.145 0-0.60754-0.4171-1.1029-0.9405-1.1403h4e-3z" fill="#100A11"></path></svg>
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <div className="menuGlobal__general__right text-right">
              <button className="boton" onClick={close}>
                <Image
                    src={"/header_partner/headerSVG/x.svg"}
                    className="ml-auto"
                    width={12}
                    height={12}
                    alt="logo"
                  />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="menuGlobal__general__item">
        <ul>
          <li>
            <Link href={newRoutes.perfil} onClick={close}>
              Información personal
              <span>
                <Image src={"/header_partner/headerSVG/perfil.svg"} width={16} height={16} alt="logo"/>
              </span>
            </Link>
          </li>
          <li>
            <Link href={newRoutes.reservaciones} onClick={close}>
              Reservaciones
              <span>
              <Image src={"/header_partner/headerSVG/reservaciones.svg"} width={20} height={20} alt="logo"/>
              </span>
            </Link>
          </li>
          <li>
            <Link href={newRoutes.reservaciones} onClick={close}>
              Pagos
              <span>
                <Image src={"/header_partner/headerSVG/pagos.svg"} width={25} height={25} alt="logo"/>
              </span>
            </Link>
          </li>
          {/* <li>
            <Link href={newRoutes.nosotros}>
              Seguridad
              <span>
                <img src={"/header_partner/lock.png"} alt="logo" />
              </span>
            </Link>
          </li> */}
          <li>
            <Link href={newRoutes.soporte} onClick={close}>
              Soporte en línea
              <span>
                <Image src={"/header_partner/headerSVG/soporte.svg"} width={24} height={24} alt="logo"/>
              </span>
            </Link>
          </li>
          <li>
            <Link href={newRoutes.home} onClick={logout}>
              Cerrar sesión
              <span>
                <Image src={"/header_partner/headerSVG/sesion.svg"} width={23} height={23} alt="logo"/>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export {MenuGeneral, MenuPerfil};