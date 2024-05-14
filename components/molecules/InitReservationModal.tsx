import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { DayPicker } from "react-day-picker";
import Image from "next/image";
import SugerenciaChefModal from "./details/SugerenciaChefModal";
import { es } from "date-fns/locale";
import { IDetalle } from "@/interface/reservacion";
import {
  addSugerencia,
  setEventId,
  setExperiencieId,
  setFecha,
  setHorario,
  setIdReservation,
  setNameExperience,
  setPersonas,
  setPriceExperience,
  setStartDate,
  setTimeDate,
  setTipoReserva,
} from "@/redux/slice/detalle.slice";
import { toast } from "sonner";
import { Sugerencia } from "@/interface/detalle.interface";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useDispatch, useSelector } from "react-redux";
import { createReservations } from "@/services/reservaciones.service";
import { updateDates } from "@/redux/slice/clockSlice";
import { UserIcons } from "../ui/icons/UserIcons";
import { Minus } from "../ui/icons/Minus";
import { MoreIcons } from "../ui/icons/MoreIcons";
import moment from "moment-timezone";

interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: IDetalle;
  trigger: boolean;
}

moment().tz("America/Mexico_City");

function InitReservationModal({
  visible,
  setVisible,
  data,
}: ModalSessionProps) {
  const [boolsugerencia, setBoolSugerencia] = useState<boolean>(false);
  const [person, setPerson] = useState<number>(0);
  const [events, setEvents] = useState<any[]>(data.events);
  const [suggestion, setSuggestion] = useState<number>(0);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null); // Nuevo estado
  const [remainingSeats, setRemainingSeats] = useState(0);
  const [addSugestion, setAddSugestion] = useState(0);
  const [counts, setCounts] = useState<number>(0);
  const [reservaTru, setreservaTru] = useState(false);
  const [fechaTru, setfechaTru] = useState<boolean>(false);
  const [userCan, setuserCan] = useState<boolean>(false);
  const [alerts, setalerts] = useState<boolean>(false);
  const [alertCountUser, setalertCountUser] = useState<boolean>(false);
  const [lackFecha, setlackFecha] = useState<boolean>(false);
  const initReservation = useRef<HTMLDivElement | null>(null);
  const initiDaate = useRef<HTMLDivElement | null>(null);
  const initiCalendario = useRef<HTMLDivElement | null>(null);
  const initiFecha = useRef<HTMLDivElement | null>(null);
  const [ver, setver] = useState<boolean>(false);
  const typeReservations = useAppSelector((state) => state.reservation);

  const scrollFunctionReservation = () => {
    if (initReservation.current) {
      initReservation.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollFunctionDaate = () => {
    if (initiDaate.current) {
      initiDaate.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollFunctionCalendario = () => {
    if (initiCalendario.current) {
      initiCalendario.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollFunctionFecha = () => {
    if (initiFecha.current) {
      initiFecha.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goReservation = () => {
    scrollFunctionReservation();
  };
  let userId: any = null as any;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const dispatch = useDispatch();
  const reserva = useSelector((state: any) => state.reservation);

  const datePart = reserva.horario;
  const part = datePart?.split(":");

  const horas = parseInt(part[0], 10);
  const minutos = parseInt(part[1]?.split(" ")[0], 10);

  const handleDayClick = (e: Date, data: any[], type: string) => {
    const presencial = data.filter((modi) => modi.type === "presencial");
    const pick = data.filter((modi) => modi.type === "pickup");
    setver(true);
    scrollFunctionFecha();
    setalerts(false);

    if (alerts) {
      goReservation();
    }
    setfechaTru(false);
    if (fechaTru) {
      scrollFunctionDaate();
    }
    setalertCountUser(false);
    setlackFecha(false);

    let elSlice = moment(e).format("YYYY-MM-DD");

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
      goReservation();
    }
  };

  const bookedStyle = { color: "white", cursor: "pointer" };

  const openModal = () => {
    setVisible(true);
    // document.body.style.overflow = "hidden";
  };

  const addUser = () => {
    if (
      reserva.tipoReserva === "pickup" ||
      reserva.tipoReserva === "presencial"
    ) {
      if (reserva.fecha === "") {
        setlackFecha(true);
        scrollFunctionDaate();
      }
      if (reserva.horario === "" && reserva.fecha !== "") {
        setalerts(true);
        scrollFunctionDaate();
      }
      if (fechaTru === true) {
        if (remainingSeats >= 0) {
          setuserCan(false);
          setalertCountUser(false);
          setPerson((prevPerson) => {
            const newPerson = prevPerson + 1;
            dispatch(setPersonas(newPerson));
            return newPerson;
          });
          setalerts(false);
        }
      }
    } else {
      setreservaTru(true);
      goReservation();
    }
  };

  const addMinusUser = () => {
    if (
      reserva.tipoReserva === "pickup" ||
      reserva.tipoReserva === "presencial"
    ) {
      // setalerts(true)
      if (fechaTru === true) {
        setPerson((prevPerson) => {
          const newPerson = prevPerson > 0 ? prevPerson - 1 : 0;
          dispatch(setPersonas(newPerson));
          return newPerson;
        });
        // setalerts(false)
      }
      if (person < 2) {
        setalertCountUser(true);
      }
    } else {
      setreservaTru(true);
    }
  };

  const handleTipoReserva = (tipo: string) => {
    // setuserCan(false)
    scrollFunctionCalendario();
    setreservaTru(false);
    dispatch(setTipoReserva(tipo));
    setRemainingSeats(0);
    setPerson(0);
    setSelectedEvent("");
    dispatch(setHorario(""));
    dispatch(setFecha(""));
    setalerts(false);
    setfechaTru(false);
    setalertCountUser(false);
  };
  useEffect(() => {}, [reserva.type, reserva.personas, person]);

  const handleHoraClick = (hora: any, el: any) => {
    setalerts(false);
    setfechaTru(true);
    dispatch(setEventId(el.id));
    dispatch(setTipoReserva(el.type));
    dispatch(setHorario(hora));

    const event = events.find(
      (e) => e.hour === parseInt(hora?.split(":")[0]) && e.id === el.id
    );

    if (event) {
      setSelectedEvent(event); // Actualizar el estado con el evento seleccionado
      setRemainingSeats(event.seats - person);
    }
  };

  // useEffect para observar cambios en 'person'
  useEffect(() => {
    // Lógica para recalcular 'remainingSeats' cuando 'person' cambia
    if (selectedEvent) {
      setRemainingSeats(selectedEvent.seats - person);
    }
  }, [person, selectedEvent]);

  const handleAgregarClick = (sugerencia: Sugerencia) => {
    dispatch(addSugerencia(sugerencia));
  };

  const updateLocalStorage = () => {
    localStorage.setItem("reservation", JSON.stringify(reserva));
  };

  useEffect(() => {
    dispatch(setExperiencieId(data.id));
    // Actualizar el localStorage cuando el estado global cambie xd
    dispatch(setNameExperience(data.name));
    dispatch(setPriceExperience(data.regular_price));
    updateLocalStorage();
  }, [reserva]);

  const getNum = (num: number) => {
    if (num < 9) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  // const filterEvents = (): any => {
  //   return events.map((el: any) => moment(el.date).toDate());
  // };
  // const filterEvents = (): any => {
  //   // return events.map((el: any) => new Date(el.date));

  //   return events.map((el: any) =>
  //     moment(el.date.replace("T00:00:00.000Z", "")).toDate()
  //   );
  // };

  const filterEvents = (tipoReserva: any): any => {
    const filteredEvents = events?.filter((event) => {
      const eves = event.type === tipoReserva;
      return eves;
    });

    return filteredEvents?.map((el: any) => new Date(el.date));
  };
  const createReservation = async () => {
    try {
      const dates = new Date();
      const hours = moment(dates)?.format("HH:mm:ss");
      const data = {
        order_comments_checkout: "comentario de la reserva",
        order_check_terms_checkout: true,
        order_check_get_more_info_checkout: true,
        order_id_stripe_checkout: 12345678,
        order_id_stripe_amount: 12345678,
        order_fk_experience_id: reserva.fk_experience_id,
        order_fk_event_id: reserva.order_fk_event_id,
        order_seats_experience: reserva.personas,
        order_price_experience: 300,
        order_total_experience: 500,
        order_type_event: 'presencial',
        order_date_event: "24/01/2024",
        order_hour_event: horas,
        order_minute_event: minutos,
        order_details: [
          {
            fk_suggestion_id: 1,
            name: "Sugerencia 1",
            quantity: 1,
            price_item: 200,
          },
          {
            name: "Propina",
            quantity: 1,
            price_item: 30,
          },
          {
            name: "Cargo de Servicio",
            quantity: 1,
            price_item: 20,
          },
        ],
      };

      const res = await createReservations(data);
      if (res.success) {
        setTrigger(true);
      }

      const date = {
        startDate: res.data.startDate,
        startTime: res.data.startTime,
        order_code: res.data.order_code,
        order_number: res.data.order_number,
      };
      dispatch(updateDates(date));
      dispatch(setIdReservation(res.data.id));

      dispatch(setStartDate(moment().format("YYYY-MM-DD")));
      dispatch(setTimeDate(hours));
    } catch (error) {
      console.log(error);
    }
  };


  const openSugencia = () => {
    setBoolSugerencia(true);
    setVisible(false);
    // document.body.style.overflow = "";
  };

  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = "";
  };

  return (
    <div>
      <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[100%]"
        bg="#2F2A32"
        className="initail_reservation w-[97%] tablet:w-[70%]"
      >
        <article className="initail_reservation_calendar" ref={initReservation}>
          {suggestion === 0 && (
            <>
              <h2 className="">Inicia tu reservación</h2>

              <div className="details_calendar_options">
                <article className={`details__btns `}>
                  <div className="title-modalidate ">
                    <h4>Selecciona modalidad</h4>
                    {reservaTru && (
                      <h4 className="!text-[#F89C53] alertasGlobal" >
                        Debes seleccionar una modalidad
                      </h4>
                    )}
                  </div>
                  <div className="bonesReservar">
                    <button
                      onClick={() => handleTipoReserva("presencial")}
                      className={`details__btns_two ${
                        reserva.tipoReserva === "presencial" &&
                        "bg-[#F89C53] text-[#4D3452]"
                      }`}
                    >
                      Presencial
                    </button>
                    <button
                      onClick={() => handleTipoReserva("pickup")}
                      className={`details__btns_two ${
                        reserva.tipoReserva === "pickup" &&
                        "bg-[#F89C53] text-[#4D3452]"
                      }`}
                    >
                      Pick up
                    </button>
                  </div>

                </article>
              </div>

              <div className="fecha">
                <div className="title-modalidate " ref={initiDaate}>
                  <h4 ref={initiCalendario}>Selecciona una fecha y hora</h4>
                  {lackFecha && (
                    <h4 className="!text-[#F89C53] alertasGlobal" >
                      Debes seleccionar una fecha
                    </h4>
                  )}
                </div>
                <DayPicker
                  mode="single"
                  modifiers={{
                    booked: filterEvents(typeReservations.tipoReserva),

                    selected: (date) => {
                      let elSlice = date.toISOString().slice(0, 10);
                      let reservaSlice = reserva.fecha?.slice(0, 10);
                      return elSlice === reservaSlice;
                    },
                  }}
                  modifiersStyles={{ booked: bookedStyle }}
                  onDayClick={(e) =>
                    handleDayClick(e, events, typeReservations.tipoReserva)
                  }
                  locale={es}
                />
              </div>
              <article className="reserva_modal_btns" ref={initiFecha}>
                <div className="title-modalidate">
                  {alerts && (
                    <h4 className=" !text-[#F89C53] alertasGlobal mt-4 mb-0" >
                      Debes seleccionar una hora
                    </h4>
                  )}
                </div>

                <article
                  className={`reserva_modal_btn_hora ${!ver ? "hidden" : ""}`}
                >
                  {events?.map((el: any) => {
                    let auxTime = "am";
                    let auxHour = el.hour;

                    if (el.hour >= 13) {
                      auxHour = el.hour - 12;
                      auxTime = "pm";
                    }
                    const fecha1 = moment(el.date).format(
                      "YYYY-MM-DD HH:mm:ss"
                    );
                    const elementSlice = moment(fecha1).format("YYYY-MM-DD");
                    const fecha2 = moment(reserva.fecha).format(
                      "YYYY-MM-DD HH:mm:ss"
                    );
                    const elSlice = moment(fecha2).format("YYYY-MM-DD");

                    if (
                      el.seats !== 0 &&
                      reserva.tipoReserva === "" &&
                      elementSlice === elSlice &&
                      person === 1
                    ) {
                      return (
                        <button
                          key={el.id}
                          onClick={() =>
                            handleHoraClick(
                              `${el.hour}:${el.minute}${auxTime}`,
                              el
                            )
                          }
                          className={` ${
                            reserva.horario ===
                            `${el.hour}:${el.minute}${auxTime}`
                              ? "btn"
                              : "btn_two"
                          }`}
                        >
                          {`${getNum(auxHour)}:${getNum(el.minute)} ${auxTime}`}
                        </button>
                      );
                    }

                    if (
                      el.seats !== 0 &&
                      elementSlice === elSlice &&
                      el.seats >= person
                    ) {
                      if (el.type === reserva.tipoReserva)
                        return (
                          <button
                            key={el.id}
                            onClick={() =>
                              handleHoraClick(
                                `${el.hour}:${el.minute}${auxTime}`,
                                el
                              )
                            }
                            className={`${
                              reserva.horario ===
                              `${el.hour}:${el.minute}${auxTime}`
                                ? "btn"
                                : "btn_two"
                            }`}
                          >
                            {auxHour < 9
                              ? `0${auxHour}:${el.minute} ${auxTime}`
                              : `${auxHour}:${el.minute} ${auxTime}`}
                          </button>
                        );
                    }
                  })}
                </article>

                {selectedEvent && (
                  <>
                    {remainingSeats > 0 ? (
                      <p className="main-page">
                        Quedan {remainingSeats} cupos para este día en este
                        horario
                      </p>
                    ) : (
                      <p className="main-page">
                        No hay asientos disponibles para este día en este
                        horario
                      </p>
                    )}
                  </>
                )}
              </article>
              <div className="title-modalidate ">
              <div className="mt-2">
                <h4 className="mt-5 pt-1">Ingresa la cantidad de personas</h4>
              </div>

                {alertCountUser && (
                  <h4 className="!text-[#F89C53] alertasGlobal  mb-0" >
                    Debes seleccionar la cantidad de personas
                  </h4>
                )}
              </div>
              <article className="add_user_update_ ">

                <div className="add_user_img-">
                  <UserIcons />{" "}
                </div>

                <div className="add_user_amount_">
                  <div className="add_user_amount_person text-[#E1D4C4]">
                    Número de Personas
                  </div>

                  <div className="add_user_increment_">
                    <div
                      onClick={addMinusUser}
                      className={`add_user_increment_less_ cursor-pointer ${
                        reserva.personas === 1 && "cursor-none  "
                      }`}
                    >
                      <Minus />
                    </div>
                    <div className="add_user_increment_number !text-[#E1D4C4]  text-[2.4rem]">
                      {person}
                    </div>
                    <button
                      onClick={addUser}
                      className={`add_user_increment_further- cursor-pointer`}
                    >
                      <MoreIcons />
                    </button>
                  </div>
                </div>
              </article>
              <article className="reserva_modal_footer ">
                <button
                  onClick={() => {
                    if (reserva.tipoReserva === "") {
                      setreservaTru(true);
                      scrollFunctionReservation();
                      return;
                    }

                    // if (reserva.horario === "" && reserva.fecha !== "") {
                    //   setalerts(true);
                    // }
                    // if (
                    //   reserva.fecha === "" ||
                    //   reserva.horario === "" ||
                    //   reserva.tipoReserva === ""
                    // ) {
                    //   toast(`Debes seleccionar una opción de reserva`, {
                    //     id: "login",
                    //     unstyled: true,
                    //     classNames: {
                    //       toast:
                    //         "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
                    //       title: " text-[2rem]  ",
                    //     },
                    //     position: "top-center",
                    //   });
                    //   return;
                    // }
                    //coment
                    // if (fechaTru === true) {
                    //   setalertCountUser(true);
                    // }

                    if (reserva.fecha === "") {
                      setlackFecha(true);
                      scrollFunctionDaate();
                      return;
                    }

                    if (reserva.horario === "" && reserva.fecha !== "") {
                      setalerts(true);
                      scrollFunctionDaate();
                      return;
                    }

                    if (person == 0) {
                      setalertCountUser(true);
                      return;
                    }

                    if (person > 0) {
                      setSuggestion(suggestion + 1);
                      createReservation();
                      openSugencia();
                    }

                    // if (fechaTru === true) {
                    //   setalertCountUser(true);
                    // }

                    // if (person > 0) {
                    //   setSuggestion(suggestion + 1);
                    //   createReservation();
                    //   openSugencia();
                    // }

                    // if (userId!) {
                    //   setBoolSugerencia(true);

                    //   createReservation();
                    // } else {
                    //   toast(`Debes iniciar Sesión para continuar`, {
                    //     id: "login",
                    //     unstyled: true,
                    //     classNames: {
                    //       toast:
                    //         "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
                    //       title: " text-[2rem]  ",
                    //     },
                    //     position: "top-center",
                    //   });
                    //   return;
                    // }
                  }}
                  className="!text-[#E1D4C4] "
                >
                  Continuar
                </button>
                <h3 className="!text-[#E1D4C4] ">
                  NOTA: Nuestras experiencias se ofrecen en horarios exclusivos.
                </h3>
              </article>
            </>
          )}
        </article>
      </Modal>

      <SugerenciaChefModal
        boolsugerencia={boolsugerencia}
        setBoolSugerencia={setBoolSugerencia}
        handleAgregarClick={handleAgregarClick}
        data={data}
        setCounts={setCounts}
        trigger={trigger}
      />
    </div>
  );
}

export default InitReservationModal;
