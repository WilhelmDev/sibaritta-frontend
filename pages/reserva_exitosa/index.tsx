import Card from "@/components/molecules/Card";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hook";
import ModalPolitica from "@/components/molecules/reservationExitosa/ModalPolitica";
import { useRouter } from "next/router";
import QRcode from "qrcode.react";
import {
  checkoutExperience,
  fetchExperienceByCategory,
} from "@/services/experience.service";

import ModalPoliticasCancelacion from "@/components/molecules/partner/ModalPoliticasCancelacion";
import RestrictionReserva from "@/components/molecules/reservacion/RestrictionReserva";
import SecurityPrivileges from "@/security/SecurityPrivileges";
import QRCode from "qrcode.react";




function Index() {
  const [visible, setVisible] = useState<boolean>(false);
  const [restricciones, setrestricciones] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);
  const police = useAppSelector((state) => state.police);
  const [code, setCode] = useState<string>("");
  const [polices, setPolices] = useState<string>(police);
  const [data, setData] = useState< any>([]);


  const router = useRouter();

  const openModal = () => {
    setVisible(true);
  };

  const openModalRestricciones = () => {
    setrestricciones(true);
  };

  useEffect(() => {
    // Solo ejecutar en el lado del cliente
    const storedCode = localStorage.getItem("code") || "";
    setCode(storedCode);

    const handleBeforeUnload = () => {
      localStorage.removeItem("code");
      setCode("");
      setStatus(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const getAllOtherReservation = async () => {
    try {
      const res = await checkoutExperience();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

// const SecurityPrivileges = () => {
//     const user_id = localStorage.getItem("fk_typeuser");

//     // user_id === "1" ? router.push("/") : "";
//     user_id === "2"?router.push("/home_partner"):"";
//     user_id === "3" ? router.push("/admin/admin_home") : "";
//   };

  useEffect(() => {
    getAllOtherReservation();
  }, []);

  return (
   <SecurityPrivileges>
    <div className="reserva_exitosa_general_container graciasCard">
     <section className="container-general ">
     <div className="flex space-x-4 gap-4">
       <article className="reserva_exitosa-container w-1/4">

         <h3 className="text-[#E1D4C4] text-center font-lato   font-bold laptop:text-start">
           ¡Gracias por tu reservación!
         </h3>

         <div className="reserva-exitosaQr">

           <div className="reserva-exitosaQr-text">
             <h4>
               Código de reservación:
             </h4>
             <h3 className="code-reserva-exitosa-h2">
               {code}
             </h3>
           </div>
           <div className="w-full flex justify-center">
            <QRCode value={`${process.env.NEXT_PUBLIC_URl_BASIC}reserva/${code}`} size={150} includeMargin={true}/>
           </div>
           <p className=" reserva-exitosaQr-textcontents">
             Este código será solicitado el día de la experiencia
           </p>
           <p className=" reserva-exitosaQr-textcontents">
             Recuerda llegar 10 minutos antes de la Hora de la Reservación
           </p>

           <div className="text-reservation-exi  ">
           <p className=" reserva-exitosaQr-textcontents">
             Si necesitas factura electrónica, por favor envíanos un correo a: facturacion@sibaritta.com
           </p>
           <p className=" reserva-exitosaQr-textcontents">
             Tienes hasta 1 día antes (24 Horas) de tu reservación para realizar el proceso de cancelación y recibir el 100% de reembolso
           </p>
           </div>
         </div>

         <div className=" w-full flex  flex-col gap-[2rem]">

         <div className="w-full rounded-[1rem] h-[7.8rem] bg-[#4D3452]  flex justify-center items-center">
           <p className="text-[#E1D4C4]  font-extrabold font-lato text-center duration-300 ease-in-out text-destok px-[.5rem]">
             Para ver  las restricciones haz
             <span
               onClick={openModalRestricciones}
               className="cursor-pointer hover:text-[#F89C53] pl-[.5rem]"
               >
               click aquí
             </span>
           </p>
         </div>

         <div className="w-full rounded-[1rem] h-[7.8rem] bg-[#4D3452]  flex justify-center items-center">
           <p className="text-[#E1D4C4]  font-extrabold font-lato text-center duration-300 ease-in-out text-destok px-[.5rem]">
             Si deseas conocer todas las políticas de cancelación da
             <span
               onClick={openModal}
               className="cursor-pointer hover:text-[#F89C53] pl-[.5rem]"
               >
               click aquí
             </span>
           </p>
         </div>

               </div>

       </article>

       <article className="reservas_card w-3/4">
         <h3 className="text-[#E1D4C4] text-center font-lato   font-bold laptop:text-start">
           Sugerencias Sibaritta
         </h3>
         <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-[1rem] container-qr-card">
           {data?.slice(0, 3).map((card: any, index: any) => (
             <Card key={card.id} card={card} index={index} />
           ))}
         </div>
       </article>
     </div>

      {visible && <ModalPoliticasCancelacion visible1={visible} setVisible1={setVisible} />}

      <RestrictionReserva card={data} visible={restricciones} setVisible={setrestricciones} />
    </section>
   </div>
   </SecurityPrivileges>
  );
}

export default Index;
