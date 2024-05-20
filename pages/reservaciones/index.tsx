import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReservationCurrent from "@/components/organisms/reservation/ReservationCurrent";
import Reservationpasadas from "@/components/organisms/reservation/Reservationpasadas";
import { getReservationAll } from "@/services/reservaciones.service";
import { IReservacions } from "@/interface/getAllReservationsInterface";
import { useRouter } from "next/router";
import SecurityPrivileges from "@/security/SecurityPrivileges";

function Index() {
  const [first, setFirst] = useState<number>(1);
  const [datas, setdata] = useState<IReservacions[]>([]);
  const [triggers, setTriggers] = useState(false);
  const reservationactual = (index: number) => {
    setFirst(index);
  };

  const [refundCard, setrefundCard] = useState(false)
  const closeRefundCard = () => setrefundCard(false)
  const eventRefundCard = () => {
    // Event to be executed when confirmation is done
    closeRefundCard
  }

  let user: any | null = null as any;
  if (typeof window !== "undefined") {
    const users = localStorage.getItem("userid");
    user = users ? JSON.parse(users) : null;
  }
 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        if (!user) {
          return;
        }
        const { data } = await getReservationAll(user);
        // setTriggers(true);
        setdata(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [triggers]);


  

  return (
    <SecurityPrivileges>
      <div className="reservacion-container">
      <section className="reservacion  main-page1 ">
      <article className="reservacion-image relative">
        <Image
          src={"/profile/reservaciones/reserva.jpg"}
          alt="imagen"
          width={500}
          height={500}
          className="w-full h-full "
        />
        <div className="home_before "></div>
      </article>

      <article className="reservacion-image_desktop relative">
        <Image
          src={"/profile/reservaciones/reservaDes.jpg"}
          alt="imagen"
          width={1000}
          height={1000}
          className="w-full h-full "
        />
        <div className="reserva_before "></div>
      </article>

      <article className="reservations_container ">
        <div className="reservations_container_btn  ">
          <button
            className={`reservation_tnb_actules  
              ${
                first === 1
                  ? "bg-[#E1D4C4] text-[#252127] "
                  : "bg-[#2F2A32] text-[#E1D4C4]"
              }`}
            onClick={() => reservationactual(1)}
          >
            Reservaciones actuales
          </button>
          <button
            className={`reservation_tnb_pasadas
              ${first === 2 && "  bg-[#E1D4C4] text-[#252127] !important"}}`}
            onClick={() => reservationactual(2)}
          >
            Reservaciones pasadas
          </button>
        </div>

        {first === 1 && (
          <div className="">
            <ReservationCurrent reservasData={datas} />
          </div>
        )}

        {first === 2 && (
          <div>
            <Reservationpasadas first={first} reservasData={datas} />
          </div>
        )}
      </article>
    </section>
    </div>
    </SecurityPrivileges>
  );
}

export default Index;
