import React, { useEffect, useState } from "react";
import CardReservacion from "@/components/molecules/CardReservacion";
import { IReservacions } from "@/interface/getAllReservationsInterface";
import moment from "moment";

interface reservasData {
  reservasData: IReservacions[];
  first?: number;
}
const Reservationpasadas = ({ reservasData, first }: reservasData) => {
  

  const fechaActual = moment().startOf("day"); // Obtener solo la fecha actual, ignorando la hora

  const createFilter = reservasData?.filter((data: any) => {
    const fechaReserva = moment(data.details[0].date).startOf("day"); // Obtener solo la fecha de reserva, ignorando la hora
    const cancel = data?.status === "cancelled";
    const fechaPasada = fechaActual.isAfter(fechaReserva);

    return fechaPasada || cancel;
  });

  return (
    <div>
      <div className="container_reservacion_pasada main-page1">
        {createFilter?.sort((a, b) => b.id - a.id).map((card, index) => (
          <CardReservacion
            first={first}
            card={card}
            key={card.id}
            reservas={reservasData}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Reservationpasadas;
