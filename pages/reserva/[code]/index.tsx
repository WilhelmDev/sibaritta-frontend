import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ReservationInformation } from "@/interface/reservacion";
import { getReservationInformation } from "@/services/reservaciones.service";
import { StartIcons2 } from "@/components/ui/icons/StartIcons2";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

function detalle() {
  const [reservation, setReservation] = useState<ReservationInformation>();

  const router = useRouter();
  const { code } = router.query;

  const getReservationInfo = async () => {
    try {
      if (!code) return;
      const reservation = await getReservationInformation(code as string);
      setReservation(reservation);
    } catch (error) {
      console.error(error);
    }
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatDateAndTime = (
    date: string,
    hour: number,
    minute: number
  ): string => {
    const dateFormatted = moment(date).format("dddd D [de] MMMM YYYY");
    const hourFormatted = moment({ hour, minute }).format("h:mm A");

    return `${capitalizeFirstLetter(dateFormatted)}, ${hourFormatted}`;
  };

  useEffect(() => {
    getReservationInfo();
    const type_user = localStorage.getItem("fk_typeuser");
    if (type_user !== "2" && type_user !== "3") {
      router.push("/");
    }
  }, [code]);

  return (
    <article className="w-screen flex-col flex items-center py-10">
      <header>
        <div>
          <h2>{reservation?.experience_name}</h2>
          <p>
            {formatDateAndTime(
              reservation?.event_date as string,
              reservation?.event_hour as number,
              reservation?.event_minute as number
            )}
          </p>
        </div>
        <div>
          <h2>Orden: {reservation?.id}</h2>
          <p>Código de reservación: {reservation?.order_code}</p>
        </div>
      </header>
      <div className="flex">
        <h2>{reservation?.user_name}</h2>
        <div>
          <StartIcons2 />
          <p>{reservation?.experience_calification}</p>
        </div>
      </div>
      <section>
        <div>
          <div>
            <h3>Precio:</h3>
            <p>${reservation?.order_total}</p>
          </div>
          <div>
            <h3>Invitados:</h3>
            <p>{reservation?.order_seats}</p>
          </div>
          <div>
            {reservation?.status === "cancelled"
              ? "Cancelado"
              : moment().isSame(moment(reservation?.event_date))
              ? "En curso"
              : moment().isAfter(moment(reservation?.event_date))
              ? "Finalizado"
              : "Pendiente"}
          </div>
        </div>
        <div>
          <h3>Extras:</h3>
          {reservation?.extras && (
            <p>{capitalizeFirstLetter(reservation?.extras.join(", "))}</p>
          )}
        </div>
        <div>
          <h3>Comentarios:</h3>
          <p>{reservation?.order_comments}</p>
        </div>
      </section>
    </article>
  );
}

export default detalle;
