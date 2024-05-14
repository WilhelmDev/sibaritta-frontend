// import Link from "next/link";
// import Image from "next/image";
// import { newRoutes } from "@/utils/routes";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const MenuGeneral = ({close}) => {
//         return(
//         <div className={`menuGlobal__general menuGlobal--general`} data-aos="fade-left">
//             <div className="menuGlobal__general__top">
//                 <div className="flex items-center">
//                 <div className="w-1/2">
//                     <div className="menuGlobal__general__left">
//                     <Link href={newRoutes.home}>
//                         <Image
//                         src={"/header_partner/logogeneral.png"}
//                         width={50}
//                         height={50}
//                         alt="logo"
//                         />
//                     </Link>
//                     </div>
//                 </div>
//                 <div className="w-1/2">
//                     <div className="menuGlobal__general__right text-right">
//                     <button onClick={close}>
//                         <Image
//                         src={"/header_partner/menuright.png"}
//                         className="ml-auto"
//                         width={50}
//                         height={50}
//                         alt="logo"
//                         />
//                     </button>
//                     </div>
//                 </div>
//                 </div>
//             </div>
    
//             <div className="menuGlobal__general__item">
//                 <ul>
//                 <li>
//                     <Link href={newRoutes.nosotros}>
//                     ¿Quiénes somos?
//                     <span>
//                         <img src={"/header_partner/user.png"} alt="logo" />
//                     </span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href={newRoutes.partner}>
//                     Sibaritta Partners
//                     <span>
//                         <img src={"/header_partner/sibaritta.png"} alt="logo" />
//                     </span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href={newRoutes.home}>
//                     ¿Cómo funciona?
//                     <span>
//                         <img src={"/header_partner/funciona.png"} alt="logo" />
//                     </span>
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href={newRoutes.insignias}>
//                     Insignias
//                     <span>
//                         <img src={"/header_partner/lock.png"} alt="logo" />
//                     </span>
//                     </Link>
//                 </li>
//                 </ul>
//             </div>
//             </div>
//     )
// }

// const MenuPerfil = ({close}) => (
//     <div className="menuGlobal__general menuGlobal--perfil" data-aos="fade-left">
//           <div className="menuGlobal__general__top">
//             <div className="flex items-center">
//               <div className="w-1/2">
//                 <div className="menuGlobal__general__left">
//                   <Link href={newRoutes.nosotros}>
//                     <Image
//                       src={"/header_partner/logogeneral.png"}
//                       width={50}
//                       height={50}
//                       alt="logo"
//                     />
//                   </Link>
//                 </div>
//               </div>
//               <div className="w-1/2">
//                 <div className="menuGlobal__general__right text-right">
//                   <button onClick={close}>
//                     <Image
//                       src={"/header_partner/menuright.png"}
//                       className="ml-auto"
//                       width={50}
//                       height={50}
//                       alt="logo"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
  
//           <div className="menuGlobal__general__item">
//             <ul>
//               <li>
//                 <Link href={newRoutes.nosotros}>
//                   Información personal
//                   <span>
//                     <img src={"/header_partner/user.png"} alt="logo" />
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href={newRoutes.nosotros}>
//                   Reservaciones
//                   <span>
//                     <img src={"/header_partner/sibaritta.png"} alt="logo" />
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href={newRoutes.nosotros}>
//                   Pagos
//                   <span>
//                     <img src={"/header_partner/funciona.png"} alt="logo" />
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href={newRoutes.nosotros}>
//                   Seguridad
//                   <span>
//                     <img src={"/header_partner/lock.png"} alt="logo" />
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href={newRoutes.nosotros}>
//                   Soporte en línea
//                   <span>
//                     <img src={"/header_partner/soporte.png"} alt="logo" />
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link href={newRoutes.nosotros}>
//                   Cerrar sesión
//                   <span>
//                     <img src={"/header_partner/cerrar.png"} alt="logo" />
//                   </span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
// )

// const MenuGlobal = () => {
//     return (
//       <div className="menuGlobal">
//         {/* <MenuGeneral/> */}
//         {/* <MenuPerfil/> */}
        
//       </div>
//     );
//   }

  

// export {MenuGeneral, MenuPerfil};

import React from 'react'

export default function MenuGlobal() {
  return (
    <div>MenuGlobal</div>
  )
}
