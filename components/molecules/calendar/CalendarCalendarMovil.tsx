import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setExperiencieId,
  setNameExperience,
  setPriceExperience,  setAddres,
} from "@/redux/slice/detalle.slice";
import { IDetalle } from "@/interface/reservacion";
import { setPolitices } from "@/redux/slice/policeSlice";
import InitReservationModalCalendar from "./InitReservationModalCalendar";

interface PartnerCalendarMovil {
  data: IDetalle;
}
function CalendarCalendarMovil({ data }: PartnerCalendarMovil) {
  const [selectedEvent, setSelectedEvent] = useState<any>(null); // Nuevo estado
  const [remainingSeats, setRemainingSeats] = useState(0);
  const [person, setPerson] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [trigger, setTrigger] = useState<boolean>(false);
  const initReservation = useRef<HTMLDivElement | null>(null);


  let userId: any = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const dispatch = useDispatch();
  const reserva = useSelector((state: any) => state.reservation);


  useEffect(() => {}, [reserva.type, reserva.personas, person]);

  // useEffect para observar cambios en 'person'
  useEffect(() => {
    // Lógica para recalcular 'remainingSeats' cuando 'person' cambia
    if (selectedEvent) {
      setRemainingSeats(selectedEvent.seats - person);
    }
  }, [person, selectedEvent]);

  const updateLocalStorage = () => {
    localStorage.setItem("reservation", JSON.stringify(reserva));
  };

  useEffect(() => {
    dispatch(setExperiencieId(data.id));
    // Actualizar el localStorage cuando el estado global cambie xd
    dispatch(setNameExperience(data.name));
    dispatch(setPriceExperience(data.regular_price));
    dispatch(setPolitices(data.politica));
    dispatch(setAddres(data?.address));

    updateLocalStorage();
  }, [reserva]);

  const getNum = (num: number) => {
    if (num < 9) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  useEffect(() => {
    localStorage.setItem("name_partner", data?.partner?.full_name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" main-page internaExperiencia">
      <section
        className=" main-page internaExperiencia__card  grid-rows-4 grid-flow-col gap-6 flex "
        ref={initReservation}
      >
        <InitReservationModalCalendar
          visible={visible}
          setVisible={setVisible}
          data={data}
          trigger={trigger}
        />
      </section>
    </div>
  );
}

export default CalendarCalendarMovil;
