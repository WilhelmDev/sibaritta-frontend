import React, { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import Image from "next/image";
import { es } from "date-fns/locale";
import { setFecha, setHorario } from "@/redux/slice/detalle.slice";

import { useAppSelector } from "@/redux/hook";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment-timezone";
import PartnerMainCalendar from "../../partner/PartnerMainCalendar";

interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  trigger: boolean;
}

moment().tz("America/Mexico_City");

function InitReservationModalCalendar({ data }: ModalSessionProps) {
  const [person, setPerson] = useState<number>(0);
  const [events, setEvents] = useState<any[]>(data.events);
  const [suggestion, setSuggestion] = useState<number>(0);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null); // Nuevo estado
  const [remainingSeats, setRemainingSeats] = useState(0);
  const [counts, setCounts] = useState<number>(0);
  const [reservaTru, setreservaTru] = useState(false);
  const [fechaTru, setfechaTru] = useState<boolean>(false);
  const [alerts, setalerts] = useState<boolean>(false);
  const [alertCountUser, setalertCountUser] = useState<boolean>(false);
  const [lackFecha, setlackFecha] = useState<boolean>(false);
  const initReservation = useRef<HTMLDivElement | null>(null);
  const [ver, setver] = useState<boolean>(false);
  const typeReservations = useAppSelector((state) => state.reservation);
  const [days, setDays] = useState<any>();
  const [numberOfPresencial, setnumberOfPresencial] = useState<number>(0);
  const [numberOfPickup, setnumberOfPickup] = useState<number>(0);
  const [amountPrecesencial, setamountPrecesencial] = useState<number>(0);
  const [amountPickup, setamountPickup] = useState<number>(0);

  let newFilterData: any;

  const filtredData = () => {
    newFilterData = data.events.filter((element: any) => {
      const moment1 = moment(element.date).startOf("day");
      const moment2 = moment(days).startOf("day");
      const date1 = moment1.format("YYYY-MM-DD");
      const date2 = moment2.format("YYYY-MM-DD");
      return date1 === date2;
    });
  };

  const filterNumberOfPresencial = () => {
    const numberOfPresencial = newFilterData.filter((element: any) => {
      return element.type === "presencial";
    });

    setnumberOfPresencial(numberOfPresencial.length);
  };
  const filternumberOfPickup = () => {
    const numberOfPickup = newFilterData.filter((element: any) => {
      return element.type === "pickup";
    });

    setnumberOfPickup(numberOfPickup.length);
  };

  const filteramountPrecesencial = () => {
    const amountPrecesencial = newFilterData.reduce(
      (total: number, element: any) => {
        if (element.type === "presencial") {
          return total + element.seats;
        } else {
          return total;
        }
      },
      0
    );

    setamountPrecesencial(amountPrecesencial);
  };

  const filteramountPickup = () => {
    const amountPickup = newFilterData.reduce((total: number, element: any) => {
      if (element.type === "pickup") {
        return total + element.seats;
      } else {
        return total;
      }
    }, 0);

    setamountPickup(amountPickup);
  };

  useEffect(() => {
    filtredData();
    filterNumberOfPresencial();
    filternumberOfPickup();
    filteramountPrecesencial();
    filteramountPickup();
  }, [days]);

  let userId: any = null as any;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const dispatch = useDispatch();
  const reserva = useSelector((state: any) => state.reservation);

  const datePart = reserva.horario;
  const part = datePart?.split(":");

  const handleDayClick = (e: Date, data: any[], type: string) => {
    const presencial = data.filter((modi) => modi.type === "presencial");
    const pick = data.filter((modi) => modi.type === "pickup");
    setver(true);
    setalerts(false);

    if (alerts) {
    }
    setfechaTru(false);
    if (fechaTru) {
    }
    setalertCountUser(false);
    setlackFecha(false);

    if (type === "presencial") {
      const fecha1 = moment(e).format("YYYY-MM-DD HH:mm:ss");
      const elSlice = moment(fecha1).format("YYYY-MM-DD");
      presencial.forEach((element: any) => {
        let elementSlice1 = moment(element.date).format("YYYY-MM-DD HH:mm:ss");
        let elementSlice = moment(elementSlice1).format("YYYY-MM-DD");
        if (elementSlice === elSlice) {
          dispatch(setFecha(e.toISOString()));
          dispatch(setHorario(""));
        }
      });
    } else if (type === "pickup") {
      const fecha1 = moment(e).format("YYYY-MM-DD HH:mm:ss");
      const elSlice = moment(fecha1).format("YYYY-MM-DD");
      pick.forEach((element: any) => {
        let elementSlice1 = moment(element.date).format("YYYY-MM-DD HH:mm:ss");
        let elementSlice = moment(elementSlice1).format("YYYY-MM-DD");
        if (elementSlice === elSlice) {
          dispatch(setFecha(e.toISOString()));
          dispatch(setHorario(""));
        }
      });
      setSelectedEvent("");
      dispatch(setHorario(""));
    } else {
      setreservaTru(true);
    }
  };

  const bookedStyle = { color: "white", cursor: "pointer" };

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
    updateLocalStorage();
  }, [reserva]);

  const getNum = (num: number) => {
    if (num < 9) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  const filterEvents = (): any => {
    const filteredEvents = events?.filter((event) => {
      const eves = event.type === "pickup" || "presencial";
      return eves;
    });
    return filteredEvents?.map((el: any) => new Date(el.date));
  };


  return (
    <div className="InitReservationModalPartner">
      {
        <article
          className="initail_reservation_calendar PartnerCalendarMovil"
          ref={initReservation}
        >
          <div className="fecha">
            <DayPicker
              className="w-full h-full"
              mode="single"
              modifiers={{
                booked: filterEvents(),
                selected: (date) => {
                  let elSlice = date.toISOString().slice(0, 10);
                  let reservaSlice = reserva.fecha?.slice(0, 10);
                  return elSlice === reservaSlice;
                },
              }}
              selected={days}
              onSelect={setDays}
              modifiersStyles={{ booked: bookedStyle }}
              onDayClick={(e) =>
                handleDayClick(e, events, typeReservations.tipoReserva)
              }
              locale={es}
            />
          </div>
          <div className="partner-calendar-movil-footer">
            <div className="partner-calendar-movil-footer-top">
              <button className="button-left footer-button">
                <h5 className="text-3x">{numberOfPresencial}x</h5>
                <div className="image">
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full"
                    src={"/partners/pick3.png"}
                    alt="Logo de la marca"
                  />
                </div>
                <h5 className="text-36">{amountPrecesencial}</h5>
              </button>
              <button className="button-right footer-button">
                <h5 className="text-3x">{numberOfPickup}x</h5>
                <div className="image">
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full"
                    src={"/datils/bagBlackmain.png"}
                    alt="Logo de la marca"
                  />
                </div>
                <h5 className="text-36">{amountPickup}</h5>
              </button>
            </div>
            <button
              onClick={() => {}}
              className="partner-calendar-movil-footer-bot"
            >
              Ver
            </button>
          </div>
        </article>
      }
    </div>
  );
}

export default InitReservationModalCalendar;
