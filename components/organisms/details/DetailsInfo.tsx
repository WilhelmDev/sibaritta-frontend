import Image from "next/image";
// import { formatTime } from '@/utils/timer';
import React, { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import InitReservationModal from "@/components/molecules/InitReservationModal";
import ChefSuggestion from "./ChefSuggestion";
import { es } from "date-fns/locale";
import { useDispatch, useSelector } from "react-redux";
import {
  setPersonas,
  setTipoReserva,
  setFecha,
  setHorario,
  addSugerencia,
  setEventId,
  setExperiencieId,
  setNameExperience,
  setPriceExperience,
  setIdReservation,
  setStartDate,
  setTimeDate,
  setAddres,
} from "@/redux/slice/detalle.slice";
import { Sugerencia } from "@/interface/detalle.interface";
import { IDetalle } from "@/interface/reservacion";
import { createReservations } from "@/services/reservaciones.service";
import { updateDates } from "@/redux/slice/clockSlice";
import { UserIcons } from "@/components/ui/icons/UserIcons";

import { MdOutlineCalendarToday } from "react-icons/md";

import { ArowIcons } from "@/components/ui/icons/ArowIcons";
import moment from "moment-timezone";
import ModalPolitica from "@/components/molecules/reservationExitosa/ModalPolitica";
import { setPolitices } from "@/redux/slice/policeSlice";

import Link from "next/link";
import { useAppSelector } from "@/redux/hook";
import { StartIcons } from "@/components/ui/icons/StartIcons";
import { Youtube } from "@/components/ui/icons/Youtube";
import { Tiktok } from "@/components/ui/icons/Tiktok";
import { Twiter } from "@/components/ui/icons/Twiter";
import { Instagram } from "@/components/ui/icons/Instagram";
import { PresencialNaran } from "@/components/ui/icons/PresencialNaran";
import { PickupNaran } from "@/components/ui/icons/PickupNaran";
import 'moment/locale/es';
import { classNames } from "primereact/utils";

interface IDetailsInfo {
  data: IDetalle;
}
function DetailsInfo({ data }: IDetailsInfo) {
  const [selectedEvent, setSelectedEvent] = useState<any>(null); // Nuevo estado
  const [remainingSeats, setRemainingSeats] = useState(0);
  const [addSugestion, setAddSugestion] = useState(0);
  const [person, setPerson] = useState<number>(0);
  const [events, setEvents] = useState<any[]>(data.events);
  const [suggestion, setSuggestion] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [counts, setCounts] = useState<number>(0);
  const [modalPolitica, setmodalPolitica] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);
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

  let userId: any = null;
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
    const open_group = data
    const closed_group = data.filter((modi) => modi.seats === modi.total_seats);

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

    if (type === "open-group") {
      // let elSlice = e.toString();
      const fecha1 = moment(e).format("YYYY-MM-DD HH:mm:ss");
      const elSlice = moment(fecha1).format("YYYY-MM-DD");
      open_group.forEach((element: any) => {
        let elementSlice1 = moment(element.date).format("YYYY-MM-DD HH:mm:ss");
        let elementSlice = moment(elementSlice1).format("YYYY-MM-DD");
        if (elementSlice === elSlice) {
          dispatch(setFecha(e.toISOString()));
          dispatch(setHorario(""));
        }
      });
    } else if (type === "closed-group") {
      const fecha1 = moment(e).format("YYYY-MM-DD HH:mm:ss");
      const elSlice = moment(fecha1).format("YYYY-MM-DD");
      closed_group.forEach((element: any) => {
        let elementSlice1 = moment(element.date).format("YYYY-MM-DD HH:mm:ss");
        let elementSlice = moment(elementSlice1).format("YYYY-MM-DD");
        if (elementSlice === elSlice) {
          dispatch(setFecha(e.toISOString()));
          dispatch(setHorario(""));
        }
      });
      dispatch(setHorario(""));
    } else {
      setreservaTru(true);
      goReservation();
    }
    setPerson(() => {
      const newPerson = 0;
      dispatch(setPersonas(newPerson));
      return newPerson;
    });
    setSelectedEvent("");
  };

  const formatDate = (date: Date) => {
    const locale = moment.locale();
    moment.locale("es")
    const day = moment(date).date();
    const stringMonth = moment(date).format("MMM").replace('.','').toUpperCase();
    let weekDay = moment(date).format("dddd");
    weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
    console.log('day', day)
    console.log('stringMonth', stringMonth)
    console.log('weekDay', weekDay)
    moment.locale(locale);
  }

  const bookedStyle = { color: "white", cursor: "pointer" };

  const openModal = () => {
    setVisible(true);
    // document.body.style.overflow = "hidden";
  };

  //add
  const addUser = () => {

    if (
      reserva.tipoReserva === "open-group" ||
      reserva.tipoReserva === "closed-group"
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
      reserva.tipoReserva === "open-group" ||
      reserva.tipoReserva === "closed-group"
    ) {
      // setalert(true);

      if (fechaTru === true) {
        setPerson((prevPerson) => {
          const newPerson = prevPerson > 0 ? prevPerson - 1 : 0;
          dispatch(setPersonas(newPerson));
          return newPerson;
        });
        // setalert(false);
      }
      if (person < 2) {
        setalertCountUser(true);
      }
    } else {
      setreservaTru(true);
    }
  };

  const handleTipoReserva = (tipo: string) => {
    // setuserCan(false);
    scrollFunctionCalendario();
    setver(false);
    setlackFecha(false);
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
  useEffect(() => {
    dispatch(setTipoReserva('open-group'));
    dispatch(setHorario(""));
    dispatch(setFecha(""));
  }, []);


  const handleHoraClick = (hora: any, el: any, type: "open-group" | "closed-group") => {
    setalerts(false);
    setfechaTru(true);
    dispatch(setEventId(el.id));
    dispatch(setTipoReserva(type));
    dispatch(setHorario(hora));

    const event = events.find(
      (e) => e.hour === parseInt(hora?.split(":")[0]) && e.id === el.id
    );

    if (event) {
      setSelectedEvent(event); // Actualizar el estado con el evento seleccionado
      if(type === "open-group"){
        setPerson(() => {
          const newPerson = 0;
          dispatch(setPersonas(newPerson));
          return newPerson;
        });
        setRemainingSeats(event.seats - person);
      }
      else if(type === "closed-group"){
        setPerson(() => {
          const newPerson = event.seats;
          dispatch(setPersonas(newPerson));
          return newPerson;
        });
        setRemainingSeats(0);
      }
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

  const openModalPolitica = () => {
    setmodalPolitica(true);
  };

  
  const filterEvents = (tipoReserva: any): any => {
    const filteredEvents = events?.filter((event) => {
      if (tipoReserva === "open-group") {
        let eventTime = new Date(event.date);
        eventTime.setHours(event.hour);
        eventTime.setMinutes(event.minute);
        eventTime.setSeconds(0);
        
        return eventTime >= new Date();
      }
      else if (tipoReserva === "closed-group") {
        return event.seats === event.total_seats
      }
    });
    return filteredEvents?.map((el: any) => new Date(el.date));
  };

  const createReservation = async () => {
    const price = data.regular_price;
    try {
      const dates = new Date();
      const hours = moment(dates).format("HH:mm:ss");
      const data = {
        //order_comments_checkout: "comentario de la reserva",
        //order_check_terms_checkout: true,
        //order_check_get_more_info_checkout: true,
        //order_id_stripe_checkout: 12345678,
        //order_id_stripe_amount: 12345678,
        order_fk_experience_id: reserva.fk_experience_id,
        order_fk_event_id: reserva.order_fk_event_id,
        order_seats_experience: reserva.personas,
        //order_price_experience: price,
        order_total_experience: person * Number(price),
        order_type_event: "presencial",
        //order_date_event: "24/01/2024",
        //order_hour_event: horas,
        //order_minute_event: minutos,
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

  useEffect(() => {
    localStorage.setItem("name_partner", data?.partner?.full_name);
  }, []);

  return (
    <div className=" main-page container-general internaExperiencia">
      <section
        className=" main-page internaExperiencia__card  grid-rows-4 grid-flow-col gap-6 flex "
        ref={initReservation}
      >
        <div className="w-3/5 flex-1">
          <article className="datils_page_content  ">
            <div className="datails_page-options">
              <article className="details_page_title ">
                <h2 className="">{data.name}</h2>

                <div className="details_page_city">
                  <h3 className="">{data?.partner?.comercial_name}</h3>
                  <div className="details_page_info">
                    <Image
                      src={"/datils/house.png"}
                      alt="house"
                      width={23}
                      height={23}
                    />
                    <h5>Nombre de la Ciudad</h5>
                  </div>
                  <div className="details_page-info_two">
                    {data?.calification_ranking ? <StartIcons /> : ""}
                    <span>
                      {data?.calification_ranking > 0
                        ? data?.calification_ranking
                        : ""}
                      {data?.calification_number !== 0 ? (
                        <span>({data?.calification_number})</span>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </div>
              </article>

              <article className="detail_option_pick">
                <div className="detail_pick_one">
                  <div className="detail_pick_one_img">
                    <div className="presencial_naram_container w-full h-full grid place-items-center">
                      <PresencialNaran />
                    </div>

                    {/* <StoreIcons /> */}
                  </div>
                  <div className="option flex flex-col">
                    <span>Opción</span>
                    <h4>Grupo Abierto</h4>
                  </div>
                </div>

                <div className="detail_pick_one">
                  <div className="detail_pick_one_img">
                    <div className="w-full h-full grid place-items-center">
                      <PickupNaran />
                    </div>
                  </div>
                  <div className="optionTwo flex flex-col">
                    <span>Opción</span>
                    <h4>Grupo Cerrado</h4>
                  </div>
                </div>
              </article>
            </div>
            <article className="datails_durations">
              <div className="datails_duration_one">
                <h5>Duración: </h5>
                <h5 className="ml-2">{data.duration} Horas</h5>
              </div>

              <div className="datails_duration_one">
                <h5>Desde: </h5>
                <h5 className="ml-2">${data.regular_price}</h5>
              </div>
            </article>

            <article className="details_cards flex gap-6	">
              <div className="details_card_experenci w-3/5 flex-1">
                <Image
                  src={"/datils/detail1.jpg"}
                  alt="house"
                  width={1000}
                  height={1000}
                />
                <h3>Todo sobre la experiencia</h3>
                <div className="datails_card_loren">
                  <p> {data.description}</p>
                  {/* <div className="hidden  laptop:flex laptop:flex-col laptop:gap-[.5rem]">
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                  <p>x</p>
                </div> */}
                </div>
              </div>

              <div className="details_card_restaurant w-2/6 flex-2">
                <Image
                  src={"/datils/detail2.jpg"}
                  alt="house"
                  width={1000}
                  height={1000}
                />
                <h3>Sobre el restaurante</h3>
                <p>{data.description}</p>
              </div>
            </article>
            <div className="detail_card_restricciones ">
              <div className="detail_card_restricciones__list">
                <div
                  className={`${
                    data?.dress_code?.length === 0
                      ? "hidden"
                      : "card_restricciones_info-"
                  }`}
                >
                  <h4>Codigo de vestimenta</h4>
                  <h5 className="card_restricciones_info-h5x">
                    {data?.dress_code}
                  </h5>
                </div>

                <div
                  className={`${
                    data?.aditionals?.length === 0
                      ? "hidden"
                      : "card_restricciones_info-"
                  }`}
                >
                  <h4>Adicionales</h4>
                  <h5 className="card_restricciones_info-h5x">
                    {data?.aditionals}
                  </h5>
                </div>
              </div>
              <div
                className={`${
                  data?.age?.length === 0
                    ? "hidden"
                    : "detail_card_restricciones__list"
                }`}
              >
                <div className="card_restricciones_info-">
                  <h4>Rango de edad </h4>
                  <h5 className="card_restricciones_info-h5x">{data?.age}</h5>
                </div>
                <div
                  className={`${
                    data?.cancelation.length === 0
                      ? "hidden"
                      : "card_restricciones_info-"
                  }`}
                >
                  <h4>Cancelaciones</h4>
                  <h5 className="card_restricciones_info-h5x">
                    Minimo {data?.cancelation} horas antes del evento
                  </h5>
                </div>
              </div>
            </div>
            <article className="datils_location flex gap-6">
              <div className="details_location_gps w-3/5 flex-1 justify-center items-center flex">
                <iframe
                  className="w-full"
                  src={data?.urlmap}
                  loading="lazy"
                ></iframe>
              </div>

              <div className="datails_locaiton_address w-2/6 flex-2">
                <div className="datails_locaiton_">
                  <h6>Dirección</h6>
                  <h5>{data?.address}</h5>
                </div>

                <div className="datails_locaiton_parkin">
                  <h6>Parking</h6>
                  <h5>{data?.parking}</h5>
                </div>

                <div className="datails_locaiton_political">
                  <h6>Ver Políticas del comercio</h6>
                  <div className="cursor-pointer" onClick={openModalPolitica}>
                    <ArowIcons />
                  </div>
                </div>
              </div>
            </article>
          </article>
          <div className="social_details_redes ">
            <section className="social_details_redes_box">
              <article className="box_social_details_data">
                <h2 className="">¡Síguenos en nuestras redes sociales!</h2>

                <div className="details_box_social_icons ">
                  <div className="box_icons_ ">
                    <Link
                      href={
                        "https://www.instagram.com/sibaritta_mx?igsh=MTB2eXl4ZTM0NnZmYg%3D%3D"
                      }
                      target="_blank"
                      className="details_social_icons "
                    >
                      <Instagram />
                    </Link>
                  </div>
                  <div className="box_icons_ ">
                    <Link
                      href={
                        "https://www.facebook.com/SibarittaMx?mibextid=ZbWKwL"
                      }
                      target="_blank"
                      className="details_social_icons"
                    >
                      <Twiter />
                    </Link>
                  </div>
                  <div className="box_icons_ ">
                    <Link
                      href={
                        "https://www.tiktok.com/@sibaritta_mx?_t=8jifkXuaDMz&_r=1"
                      }
                      target="_blank"
                      className="details_social_icons"
                    >
                      <Tiktok />
                    </Link>
                  </div>
                  <div className="box_icons_ ">
                    <Link
                      href={"https://www.youtube.com/@Sibaritta-Experiencias"}
                      target="_blank"
                      className="details_social_icons"
                    >
                      <Youtube />
                    </Link>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <ModalPolitica
            visible={modalPolitica}
            setVisible={setmodalPolitica}
          />
        </div>

        {suggestion === 0 && (
          <div> 
            <article className="details_calendar flex-2">
              <div className="details_dalendar_box_">
                <h2 ref={initiDaate}>Inicia tu reservación</h2>
                {/*<div className="details_calendar_options main-page">
                  <article className={`details_calendar_btns `}>
                    <div className="title-modalidate  " ref={initiCalendario}>
                      <h4>Selecciona modalidad</h4>
                      {reservaTru && (
                        <h6 className="!text-[#F89C53]">
                          Debes seleccionar una modalidad
                        </h6>
                      )}
                    </div>
                    <div className="bonesReservar">
                      <button
                        onClick={() => handleTipoReserva("open-group")}
                        className={`details_calendar_btns_one ${
                          reserva.tipoReserva === "open-group" &&
                          "bg-[#F89C53] text-[#4D3452]  "
                        }`}
                      >
                        Grupo abierto
                      </button>
                      <button
                        onClick={() => handleTipoReserva("closed-group")}
                        className={`details_calendar_btns_two ${
                          reserva.tipoReserva === "closed-group" &&
                          "bg-[#F89C53] text-[#4D3452]"
                        }`}
                      >
                        Grupo cerrado
                      </button>
                    </div>
                  </article>
                      </div>*/}
                <div className="title-modalidate">
                  <h4>Seleciona una fecha y hora</h4>
                  {lackFecha && (
                    <h6 className="text-[#F89C53]">
                      Debes seleccionar una fecha
                    </h6>
                  )}
                </div>
                <div
                  className="fecha_calendar_react main-page"
                  ref={initiFecha}
                >
                  <DayPicker
                    className="w-full h-full"
                    mode="single"
                    modifiers={{
                      booked:filterEvents(typeReservations.tipoReserva),
                      selected: (date) => {
                        let elSlice = date.toISOString().slice(0, 10) ;
                        let reservaSlice = reserva.fecha?.slice(0, 10) ;
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
                <article className="details_btns main-page ">
                  {alerts && (
                    <h6 className="text-[#F89C53] mt-4">
                      Debe seleccionar un horario
                    </h6>
                  )}

                  <article className={`details_btn_hora`}>
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
                                el,
                                reserva.tipoReserva
                              )
                            }
                            className={`hora_btn_two ${
                              reserva.horario ===
                                `${el.hour}:${el.minute}${auxTime}` &&
                              "bg-[#F89C53]  text-[#252127]"
                            }`}
                          >
                            {`${getNum(auxHour)}:${getNum(
                              el.minute
                            )} ${auxTime}`}
                          </button>
                        );
                      }

                      if (
                        el.seats !== 0 &&
                        elementSlice === elSlice &&
                        el.seats >= person
                      ) {
                        if ((reserva.tipoReserva === "open-group") || (reserva.tipoReserva === "closed-group" && el.seats === el.total_seats))
                          return (
                            <button
                              key={el.id}
                              onClick={() =>
                                handleHoraClick(
                                  `${el.hour}:${el.minute}${auxTime}`,
                                  el,
                                  reserva.tipoReserva
                                )
                              }
                              className={`hora_btn_two ${
                                reserva.horario ===
                                  `${el.hour}:${el.minute}${auxTime}` &&
                                "bg-[#F89C53]  text-[#252127]"
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
                        <p className="main-page mt-3">
                          Quedan {remainingSeats} cupos para este día en este
                          horario
                        </p>
                      ) : (
                        <p className="main-page mt-3">
                          No hay asientos disponibles para este día en este
                          horario
                        </p>
                      )}
                    </>
                  )}

                  <div className="title_update_add_invita--- mt-3">
                    <h4 className="txt">Ingresa la cantidad de personas</h4>
                    <div className="title-modalidate-user- ">
                      {alertCountUser && (
                        <h6 className="text-[#F89C53]">
                          Debes seleccionar la cantidad de personas
                        </h6>
                      )}
                    </div>
                  </div>

                  <article className="add_user_update">
                    <div className="add_user_img">
                      <UserIcons />{" "}
                    </div>

                    <div className="add_user_amount ">
                      <h4 className="add_user_amount_person">
                        Número de Personas
                      </h4>
                      <div className="add_user_increment- ">
                        <div
                          onClick={person > 1 || reserva.tipoReserva === "closed-group" ? addMinusUser : undefined}
                          className={`add_user_increment_less_ ${
                            (person <= 1 || reserva.tipoReserva === "closed-group") ?
                            "cursor-default opacity-[0.3]" : "cursor-pointer"
                          }`}
                        >
                          <Image
                            src={"/minus.png"}
                            width={100}
                            height={100}
                            alt="minute"
                          />
                        </div>
                        <div className="add_user_increment_number_">
                          {person}
                        </div>
                        <button
                          disabled = {person === selectedEvent?.seats || reserva.tipoReserva === "closed-group"}
                          onClick={addUser}
                          className={`add_user_increment_further ${person === selectedEvent?.seats || reserva.tipoReserva === "closed-group" ? 'opacity-50 cursor-default' : ''}`}
                        >
                          <Image
                            src={"/plus.png"}
                            width={100}
                            height={100}
                            alt="minute"
                          />
                        </button>
                      </div>
                    </div>
                  </article>

                  <div className="!bg-[#2F2A32] h-[0.2rem] mt-[1rem] mb-[1rem]"></div>
                </article>

                <article className="datails_footer main-page">
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
                      //         "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center text-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
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
                      }

                      // if (userId!) {
                      //   setSuggestion(suggestion + 1);

                      //   createReservation();
                      // } else {
                      //   toast(`Debes iniciar Sesión para continuar`, {
                      //     id: 'login',
                      //     unstyled: true,
                      //     classNames: {
                      //       toast:
                      //         'bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ',
                      //       title: ' text-[2rem]  ',
                      //     },
                      //     position: 'top-center',
                      //   });
                      //   return;
                      // }
                    }}
                    className=""
                  >
                    Continuar
                  </button>
                  <p className="suggestion_nota">
                    NOTA: Nuestras experiencias se ofrecen en horarios
                    exclusivos.
                  </p>
                </article>
              </div>
            </article>
          </div>
        )}

        {suggestion === 1 && (
          <ChefSuggestion
            handleAgregarClick={handleAgregarClick}
            suggestion={suggestion}
            setSuggestion={setSuggestion}
            data={data}
            addSugestion={addSugestion}
            setAddSugestion={setAddSugestion}
            setCounts={setCounts}
            trigger={trigger}
          />
        )}
        <InitReservationModal
          visible={visible}
          setVisible={setVisible}
          data={data}
          trigger={trigger}
        />

        <div
          className="w-200 pt-[1rem] Navbar-ul-contact false  false "
          style={{
            position: "fixed",
            bottom: "14px",
            left: "16px",
          }}
        >
          <button
            className="modalSession-buttons  animate-btn_scale_animation w-full"
            onClick={openModal}
          >
            <div className="detail_pick_one">
              <div className="buttons-icon">
                <MdOutlineCalendarToday />
              </div>
              <div className="option flex flex-col">
                <span>Iniciar Reserva</span>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

export default DetailsInfo;
