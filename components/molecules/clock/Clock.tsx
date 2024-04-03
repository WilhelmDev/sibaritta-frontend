import { useAppSelector } from "@/redux/hook";
import { cancelReservations } from "@/services/reservaciones.service";
import React, { useEffect, useState } from "react";
import ModalCancel from "../checkout/ModalCancel";
import { IReservation } from "@/interface/checkout.interface";
import { getClock } from "@/services/clock.services";

export interface IClock {
  trigger?: boolean;
}

const Clock = ({ trigger }: IClock) => {
  // Almacena la fecha y hora iniciales en el estado
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [hasTimeEnded, setHasTimeEnded] = useState(false);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [idReservations, setidReservations] = useState(0);
  const [datos, setDatos] = useState<IReservation | null | undefined>();
  const [timer, settimer] = useState<any>();
  const openModal = () => {
    setOpenModalCancel(true);
    // document.body.style.overflow = "hidden";
  };

  const cancelReservation = async () => {
    try {
      const res = await cancelReservations(idReservations!);
      setidReservations(0);
      localStorage.removeItem("idReservations");
    } catch (error) {
      console.log(error);
    }
  };

  const calculateEndDateTime = () => {
    const timerString: string | undefined = process.env.NEXT_PUBLIC_TIME;

    if (timerString) {
      const timer: number = parseFloat(timerString);

      if (currentDateTime) {
        return new Date(currentDateTime.getTime() + timer * 60 * 1000);
      }
    }
    return null;
  };


  const handleTimeEnd = () => {
    if (!hasTimeEnded) {
      setHasTimeEnded(true);
      cancelReservation();
      openModal();
    }
  };

  // Calcula el tiempo restante en segundos
  const calculateTimeLeft = () => {
    const endDateTime = calculateEndDateTime();
    if (endDateTime) {
      const currentTime = new Date().getTime();
      const timeLeft = Math.max(
        0,
        Math.floor((endDateTime.getTime() - currentTime) / 1000)
      );

      setRemainingTime(timeLeft);
      if (timeLeft <= 0) {
        handleTimeEnd();
      }
    }
  };

  let userId = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  useEffect(() => {
    const storedReservation = localStorage.getItem("reservation") || "";

    if (!userId! || userId!) {
      const parsedReservation: IReservation = JSON.parse(storedReservation);
      setDatos(parsedReservation);
    }
  }, [userId, trigger]);

  useEffect(() => {
    // Verifica que startDate y startTime estén definidos antes de construir la fecha
    if (datos?.startDate && datos.timeDate) {
      setCurrentDateTime(
        new Date(`${datos?.startDate.trim()} ${datos?.timeDate.trim()}`)
      );
    }
  }, [datos?.startDate, datos?.timeDate]);

  useEffect(() => {
    const idReservation = localStorage.getItem("idReservations") || "";

    const idReservationNumber = parseInt(idReservation, 10) || 0;

    setidReservations(idReservationNumber);
    // Calcula el tiempo restante inicial
    calculateTimeLeft();

    // Actualiza el tiempo restante cada segundo
    const intervalId = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [currentDateTime, hasTimeEnded]);

  // Renderiza el componente solo si currentDateTime está definido
  if (!currentDateTime) {
    return null; // O puedes mostrar un mensaje de carga, por ejemplo
  }

  function formatTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div>
      <p>
        <span className="text-[3rem] laptop:text-[3rem] text-[#E1D4C4] font-lato font-bold ">
          {" "}
          {formatTime(remainingTime)}
        </span>
      </p>

      {openModalCancel && (
        <ModalCancel
          visible={openModalCancel}
          setVisible={setOpenModalCancel}
        />
      )}
    </div>
  );
};

export default Clock;
