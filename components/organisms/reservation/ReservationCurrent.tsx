import CardReservacion from "@/components/molecules/CardReservacion";
import { IReservacions } from "@/interface/getAllReservationsInterface";
import moment from "moment";
import React, { useEffect } from "react";

interface reservasData {
  reservasData: IReservacions[];
}
const ReservationCurrent = ({ reservasData }:reservasData) => {



  const fechaActual = moment().startOf("day");

  const createFilter = reservasData?.filter((data: any) => {
    const fechaReserva = moment(data.details[0].date).startOf("day");
    
    const comple = data?.status === "completed";
    return fechaReserva.isSameOrAfter(fechaActual) && comple;
  });



  return (
    <div>
      <div className="container_reservacion_actual   main-page1 ">
        {createFilter
          ?.sort((a:any, b:any) => b.id - a.id )
          .map((card: any, index:any) => (
            <CardReservacion
              card={card}
              key={card.id}
              reservas={reservasData}
              index={index+1}
            />
          ))}
      </div>
    </div>
  );
};

export default ReservationCurrent;
