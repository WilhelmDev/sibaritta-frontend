// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import HomeBanner from "@/components/organisms/HomeBanner";
// import Footer from "@/components/ui/Footer";
// import HomeBusiness from "@/components/organisms/HomeBusiness";

// import React, { useState, useEffect } from "react";
// import { Button } from "primereact/button";
// import { Carousel } from "primereact/carousel";
// import { Tag } from "primereact/tag";
// import { productsDataTest } from "@/utils/data";
// import { newRoutes } from "@/utils/routes";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Carrousel from "@/components/carousel";
// import CarouselV2 from "@/components/carousel/v2";
// import Eventos from "@/components/carousel/v2";
// import ModalExperiencia from "../v2/modalanyer";
// import MenuGlobal from "./MenuGlobal";
// // import Link from 'next/link';
// // import HomeBanner from '@/components/organisms/HomeBanner';
// // import Footer from "@/components/ui/Footer";
// // import HomeBusiness from "@/components/organisms/HomeBusiness";

// // import React, { useState, useEffect, useRef } from 'react';
// // import { Button } from 'primereact/button';
// // import { Carousel } from 'primereact/carousel';
// // import { Tag } from 'primereact/tag';
// // import { productsDataTest} from '@/utils/data'
// // import { newRoutes } from '@/utils/routes';

// // SVG Import

// import Headphones from "./SVG/Media/Headphones"
// import CreditCard from "./SVG/credit-card"
// import LockClosed from "./SVG/lock-closed"
// import LogOut from "./SVG/logout"
// import Terminal from "./SVG/terminal"
// import User from "./SVG/user"

// // SVG Import

// interface IDetailsCard {
//   data: any;
// }

// export default function Experiencia({ data }: IDetailsCard) {
//   const imagesLarge = data?.images?.filter(
//     (image: any) => image.resolution === "large"
//   );

//   const imagesview = imagesLarge?.map((image: any) => image.path);

//   const [products, setProducts] = useState(productsDataTest);
//   const responsiveOptions = [
//     {
//       breakpoint: "1400px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "1199px",
//       numVisible: 3,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "767px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "575px",
//       numVisible: 1,
//       numScroll: 1,
//     },
//   ];

//   const getSeverity = (product: any) => {
//     switch (product.inventoryStatus) {
//       case "INSTOCK":
//         return "success";

//       case "LOWSTOCK":
//         return "warning";

//       case "OUTOFSTOCK":
//         return "danger";

//       default:
//         return null;
//     }
//   };

//   const productTemplate = (product: any) => {
//     return (
//       <div
//         className="border-1 surface-border p-jc-center border-round m-2 text-center py-5 px-3"
//         style={{ maxWidth: "100%", overflow: "hidden" }}
//       >
//         <div className="mb-3">
//           <img
//             src={"/abbout/imagenprincipal.png"}
//             alt={product?.name}
//             className="w-full"
//           />
//         </div>
//         <div>
//           {/* <h4 className="mb-1">{product.name}</h4> */}
//           {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
//           {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
//           {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
//                     <Button icon="pi pi-search" rounded />
//                     <Button icon="pi pi-star-fill" rounded severity="success" />
//                 </div> */}
//         </div>
//       </div>
//     );
//   };

//   useEffect(() => {
//     AOS.init();

//     const update = document.querySelector("body");
//     update?.classList.add("fondoNosotros");
//   }, []);

//   console.log(data?.seats_free);
//   return (
//     <main className="internaExperiencia">
//       <MenuGlobal/>

//       <div className="migajaPan">
//         <div className="container-general">
//           <div className="migajaPan__card ">
//             <ul className="flex">
//               <li>
//                 <Link href={newRoutes.home} className=" hover:text-yellow-600">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href={newRoutes.experiencias}
//                   className=" hover:text-yellow-600"
//                 >
//                   &gt; Experiencias
//                 </Link>
//               </li>
//               <li className="activeMigaja">
//                 &gt; {data?.slug?.replace(/-/g, " ")}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div
//         className="internaExperiencia__slider"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         <div className="flex">
//           <div className="w-full">
//             <CarouselV2 data={data} />
//           </div>
//         </div>
//       </div>
//       <div
//         className="internaExperiencia__titulo"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         <div className="flex">
//           <div className="w-full">
//             <div className="internaExperiencia__titulo__card text-center">
//               <h2 className="tituloh2">{data?.name?.toUpperCase()}</h2>
//               <h5 className="tituloh5">
//                 PREPARA TU PALADAR PARA VIVIR
//                 <br />
//                 UNA EXPERIENCIA INOLVIDABLE
//               </h5>
//               <svg
//                 className="m-auto mt-5 pt-5"
//                 width="3"
//                 height="71"
//                 viewBox="0 0 3 71"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M2.84961 70.4575L2.84961 0.542491C2.84961 0.242881 2.22729 0 1.45961 0L1.38961 0C0.621934 0 -0.000389099 0.242881 -0.000389099 0.542491L-0.000389099 70.4575C-0.000389099 70.7571 0.621934 71 1.38961 71H1.45961C2.22729 71 2.84961 70.7571 2.84961 70.4575Z"
//                   fill="#F4A560"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="internaExperiencia__intro"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         <div className="container-general">
//           <div className="lg:flex justify-center">
//             <div className="w-full lg:w-2/5">
//               <div className="internaExperiencia__intro__left">
//                 <h2 className="tituloh2">
//                   CAUTÍVATE CON
//                   <br />
//                   CADA DETALLE
//                 </h2>
//                 <div className="boton ">
//                   <Link href={"#"}>RESERVA TU EXPERIENCIA</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-2/5">
//               <div className="internaExperiencia__intro__right">
//                 {/* <p> <b>{data?.<titulo_expperiencia>}</b> </p> */}
//                 <p>
//                   {" "}
//                   <b>EL MAR EN TU PALADAR</b>{" "}
//                 </p>
//                 {/* <p>{data?.<descripción_experiencia>}</p> */}
//                 <p>{data?.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="internaExperiencia__lugar">
//         <div className="container-general">
//           <div className="lg:flex">
//             <div className="w-full lg:w-3/5">
//               <div
//                 className="internaExperiencia__lugar__left"
//                 data-aos="fade-right"
//                 data-aos-duration="3000"
//               >
//                 <h2 className="tituloh2">EL LUGAR</h2>
//                 <p>{data?.description}</p>
//                 <div className="boton boton--transparente ">
//                   <a href="#">UBICACIÓN</a>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-1/3">
//               <div
//                 className="internaExperiencia__lugar__right "
//                 data-aos="fade-left"
//                 data-aos-duration="3000"
//               >
//                 <Image
//                   width={1000}
//                   height={1000}
//                   src={"/experiencia/comidaright.png"}
//                   alt={"logo"}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="home__colecciona"
//         data-aos="fade-up"
//         data-aos-duration="3000"
//       >
//         <div className="container-general">
//           <div className="flex flex-wrap justify-center">
//             <div className="lg:w-2/5 flex w-100 items-center">
//               <div className="home__colecciona__right ">
//                 <ul className="flex">
//                   <li>
//                     <Image
//                       src={"/home/cart2.png"}
//                       width={345}
//                       height={345}
//                       alt="logo"
//                     />
//                   </li>
//                   <li>
//                     <Image
//                       src={"/home/cart3.png"}
//                       width={345}
//                       height={345}
//                       alt="logo"
//                     />
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="w-100 lg:w-2/5">
//               <div className="home__colecciona__left">
//                 <div className="relative">
//                   <h2 className="tituloh2">TU CAMINO SIBARITTA</h2>
//                   <p>
//                     Con esta experiencia, desbloquearás estas insignias y
//                     estarás a un paso menos de convertirte en Maestro Sibaritta
//                   </p>
//                   <div className="boton ">
//                     <Link href={newRoutes.insignias}>INSIGNIAS SIBARITTA</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="internaExperiencia__reserva">
//         <div className="container-general">
//           <div className="lg:flex justify-center">
//             <div className="lg:w-2/5">
//               <div className="internaExperiencia__reserva__left">
//                 <h2 className="tituloh2">
//                   RESERVA TU
//                   <br />
//                   EXPERIENCIA
//                 </h2>
//                 <p>
//                   {data?.name.toUpperCase()}
//                   <br />
//                   Valor de la experiencia ·{" "}
//                   <span className="textoNaranja">${data?.regular_price}</span>
//                   <br />
//                   Duración:{" "}
//                   <span className="textoNaranja">{data?.duration} Horas</span>
//                 </p>
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <div className="internaExperiencia__reserva__right">
//                 <div className="internaExperiencia__reserva__right__contenedor">
//                   {/* <Eventos data={data}/> */}
//                 </div>
//                 <div className="internaExperiencia__reserva__right__limite text-center mt-5">
//                   <p>*Quedan {data?.seats} cupos para este día</p>
//                 </div>
//                 <div className="internaExperiencia__reserva__right__agregar">
//                   <div className="internaExperiencia__reserva__right__agregar__left">
//                     <p>Elige el número de personas</p>
//                   </div>
//                   <div className="internaExperiencia__reserva__right__agregar__right flex justify-center items-center">
//                     <svg
//                       className="mr-4"
//                       width="33"
//                       height="27"
//                       viewBox="0 0 33 27"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M31.125 25.4999C31.125 22.6697 28.4119 20.2621 24.625 19.3698M21.375 25.5C21.375 21.9101 17.0098 19 11.625 19C6.24022 19 1.875 21.9101 1.875 25.5M21.375 14.125C24.9649 14.125 27.875 11.2149 27.875 7.625C27.875 4.03515 24.9649 1.125 21.375 1.125M11.625 14.125C8.03515 14.125 5.125 11.2149 5.125 7.625C5.125 4.03515 8.03515 1.125 11.625 1.125C15.2149 1.125 18.125 4.03515 18.125 7.625C18.125 11.2149 15.2149 14.125 11.625 14.125Z"
//                         stroke="#F89C53"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <div className="internaExperiencia__reserva__right__agregar__right__botones flex">
//                       <button>
//                         <svg
//                           width="36"
//                           height="37"
//                           viewBox="0 0 36 37"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <rect
//                             y="0.5"
//                             width="36"
//                             height="36"
//                             rx="10"
//                             fill="#443E45"
//                           />
//                           <path
//                             d="M22.5 18.5H13.5"
//                             stroke="white"
//                             strokeWidth="2"
//                             stroke-linecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </button>
//                       <input type="text" />
//                       <button>
//                         <svg
//                           width="36"
//                           height="37"
//                           viewBox="0 0 36 37"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <rect
//                             y="0.5"
//                             width="36"
//                             height="36"
//                             rx="10"
//                             fill="#443E45"
//                           />
//                           <path
//                             d="M18 14V18.5M18 18.5V23M18 18.5H22.5M18 18.5L13.5 18.5"
//                             stroke="white"
//                             strokeWidth="2"
//                             stroke-linecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="boton   text-center">
//                   <Link href={""} className="m-auto">
//                     COMPLETA TU RESERVA
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <ModalExperiencia/> */}
//     </main>
//   );
// }


import React from 'react'

export default function Page() {
  return (
    <div>internaExperiencia</div>
  )
}

