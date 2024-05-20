import { cancelReservations } from "@/services/reservaciones.service";
import { IReservation } from "@/interface/checkout.interface";
import { useRouter } from "next/router";
import AlertCard from "@/components3/alerts/AlertCard";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTimer } from '@/redux/slice/clockSlice';

export interface IClock {
  trigger?: boolean;
  outOfTimeModal?: boolean;
}

const Clock = ({ trigger, outOfTimeModal }: IClock) => {
  // Almacena la fecha y hora iniciales en el estado
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [hasTimeEnded, setHasTimeEnded] = useState(false);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [idReservations, setidReservations] = useState(0);
  const [datos, setDatos] = useState<IReservation | null | undefined>();


  const openModal = () => {
    setOpenModalCancel(true);
    // document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (outOfTimeModal) {
      openModal();
    }
  }, [outOfTimeModal])

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


      dispatch(updateTimer(timeLeft))
    }
  };

  let userId = null as any;
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
    <div >
      <p>
        <span className="text-[3rem] laptop:text-[3rem] text-[#E1D4C4]  font-bold ">
          {" "}
          {formatTime(remainingTime)}
        </span>
      </p>

      {openModalCancel && (
        <AlertCard
          content={
            "<p>El TIEMPO PARA CONSERVAR TU RESERVACIÓN SE HA TERMINADO.</p>" +
            "<p>POR FAVOR VUELVE A INICIAR EL PROCESO NUEVAMENTE.</p>"
          }

          visible={openModalCancel}
          className=""
          setVisible={setOpenModalCancel}
          actionButton="IR AL INICIO"
          callback={() => {
            setOpenModalCancel(false);

            router.push("/");
          }}
          closable={false}
          closeOnClickOutside={false}
          contentFontSize="1.5rem"
          actionButtonWidth="100vh"
        />
      )}
    </div>
  );
};

export default Clock;
