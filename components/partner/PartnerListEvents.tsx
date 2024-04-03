import { PiForkKnifeLight, PiPencilSimpleLineLight } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { monthFormater } from "@/utils/formaterDate";
import { LuChefHat } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";
import { setEditEvents, seteEvents } from "@/redux/slice/partnerSlice";
import { Accordion, AccordionTab } from "primereact/accordion";
import moment from "moment";
import { getCalendar } from "@/services/calendar/calendar.service";
import { useRouter } from "next/router";

interface PartnerListEvents {
  dataPartnerMain: any;
  onToggleCalendar: any;
  eventSelected: any;
  finishedExperience: any;
}

const PartnerListEvents = ({
  dataPartnerMain,
  onToggleCalendar,
  eventSelected,
  finishedExperience,
}: PartnerListEvents) => {
  const [presencial, setpresencial] = useState<boolean>(false);
  const [pickup, setpickup] = useState<boolean>(false);
  const [event, setEvent] = useState<any>();
  const [viewCenaChef, setviewCenaChef] = useState(true);
  const [picked, setpicked] = useState(false);
  const [moreOrMinor, setmoreOrMinor] = useState(true);
  const [reservaTru, setreservaTru] = useState(false);
  const [numberPeople, setnumberPeople] = useState(false);
  const [selectedCalendarAlert, setselectedCalendarAlert] = useState(false);
  const [hourTru, sethourTru] = useState(false);
  //events  CALENDAR
  const selectDay = dataPartnerMain.selectedDate;
  const ObjectEventsPrecencial = dataPartnerMain?.experience?.events.filter(
    (e: any) => {
      const date1 = moment(e.date);
      const date2 = moment(selectDay?.toString());

      return e.type === "presencial" && date1.isSame(date2, "day");
    }
  );
  const ObjectEventPickup = dataPartnerMain?.experience?.events.filter(
    (e: any) => {
      const date1 = moment(e.date);
      const date2 = moment(selectDay?.toString());

      return e.type === "pickup" && date1.isSame(date2, "day");
    }
  );

  const { asPath } = useRouter();

  const changePresencial = () => {
    setpresencial(true);
    setpickup(false);
  };

  const changePickup = () => {
    setpresencial(false);
    setpickup(true);
  };

  let number;
  const { experience } = useAppSelector((state) => state.partner);
  const dispatch = useDispatch();

  const getNum = (num: number) => {
    if (num < 9 && num >= 0) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  useEffect(() => {
    setEvent({
      ...eventSelected,
      date:
        eventSelected?.id === 0
          ? eventSelected.date
          : new Date(eventSelected?.date),
      hour: getNum(eventSelected?.hour),
      minute: getNum(eventSelected?.minute),
    });
  }, [eventSelected]);

  const handleGuardar = () => {
    if (event.id === 0) {
      dispatch(
        seteEvents({
          ...event,
          date: event.date.toISOString(),
          id: new Date().getTime().toString(),
        })
      );
    } else {
      dispatch(setEditEvents({ ...event, date: event.date.toISOString() }));
    }
  };

  const dataFiltredForDate = dataPartnerMain?.experience.events?.filter(
    (el: any) => {
      let elSlice = dataPartnerMain?.selectedDate?.toISOString().slice(0, 10);

      let elementSlice = el.date.slice(0, 10);

      return elementSlice === elSlice;
    }
  );

  const createDynamicTabs = () => {
    if (asPath === "/partner") {
      return (
        <AccordionTab
          header={
            <div className="content-calendar-cenab">
              <div className="calendar-cena_textb">
                <div className="calendar-cena_textb-left">
                  <div className="cena_text-headb">
                    <div className="text-head_iconb">
                      <LuChefHat />
                    </div>
                    <span className="text_head-textob"> test</span>
                  </div>
                  <div className="cena-text-bodyb">
                    <span>Total de cupos: 1111</span>
                    <br />
                    <span>Cupos reservados:45 (9 presencial / 36 pickup) </span>
                    <br />
                    <span>Disponibles:5 (3 presencial / 2 pickup)</span>
                    <br />
                  </div>
                </div>
                <div className="calendar-cena_actionb">
                  <button className="cena_action-textb">
                    {moreOrMinor ? "-" : "+"}{" "}
                  </button>
                </div>
              </div>
            </div>
          }
        >
          <div className="content-calendar_listb">
            <div className="calendar_list-iconb">
              <div className="calendar_list-datab-container">
                {dataPartnerMain?.experience.events?.map(
                  (el: any, index: any) => {
                    let elSlice = dataPartnerMain?.selectedDate
                      ?.toISOString()
                      .slice(0, 10);

                    let elementSlice = el.date.slice(0, 10);

                    if (elementSlice === elSlice) {
                      let auxTime = "am";
                      let auxHour = el.hour;

                      if (el.hour >= 13) {
                        auxHour = el.hour - 12;
                        auxTime = "pm";
                      }

                      return (
                        <div className="calendar_list-datab" key={index}>
                          {el.type === "pickup" ? (
                            <div className="list-data_icob">
                              <MdOutlineShoppingBag />
                            </div>
                          ) : (
                            <div className="list-data_icob">
                              {" "}
                              <PiForkKnifeLight />
                            </div>
                          )}
                          <div className="list_data-contentb">
                            <div className="list-data_hourb">
                              {auxHour < 10
                                ? `${
                                    typeof auxHour === "string"
                                      ? auxHour.substring(0, 2)
                                      : auxHour
                                  }:${
                                    typeof el?.minute === "string"
                                      ? el?.minute.substring(0, 2)
                                      : el?.minute
                                  } ${auxTime}`
                                : `${
                                    typeof auxHour === "string"
                                      ? auxHour.substring(0, 2)
                                      : auxHour
                                  }:${
                                    typeof el?.minute === "string"
                                      ? el?.minute.substring(0, 2)
                                      : el?.minute
                                  } ${auxTime}`}
                            </div>

                            <div className="list-data_detailb">
                              <div className="data_detail-personb">
                                <div className="datail-person_seatsb">
                                  {" "}
                                  {`${0}/${el.seats}`}{" "}
                                </div>
                                <div className="datail-person_userb">
                                  <HiOutlineUsers />
                                </div>
                                <div
                                  className="datail-person_pencilb"
                                  onClick={() =>
                                    dataPartnerMain?.handleEdit(el)
                                  }
                                >
                                  <PiPencilSimpleLineLight />
                                </div>
                              </div>

                              <button className="data_detail-btnb data_detail-button">
                                Detalle
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  }
                )}
              </div>
            </div>
          </div>
        </AccordionTab>
      );
    } else {
      return finishedExperience?.map((tab: any, i: any) => {
        return (
          <AccordionTab key={i}
            header={
              <div className="content-calendar-cenab">
                <div className="calendar-cena_textb">
                  <div className="calendar-cena_textb-left">
                    <div className="cena_text-headb">
                      <div className="text-head_iconb">
                        <LuChefHat />
                      </div>
                      <span className="text_head-textob"> {tab?.name}</span>
                    </div>
                    <div className="cena-text-bodyb">
                      <span>Total de cupos: {tab?.seats}</span>
                      <br />
                      <span>
                        Cupos reservados:45 (9 presencial / 36 pickup){" "}
                      </span>
                      <br />
                      <span>Disponibles:5 (3 presencial / 2 pickup)</span>
                      <br />
                    </div>
                  </div>
                  <div className="calendar-cena_actionb">
                    <button className="cena_action-textb">
                      {moreOrMinor ? "-" : "+"}{" "}
                    </button>
                  </div>
                </div>
              </div>
            }
          >
            <div className="content-calendar_listb">
              <div className="calendar_list-iconb">
                <div className="calendar_list-datab-container">
                  {dataPartnerMain?.selectedDate &&
                    tab?.events?.map((el: any, index: any) => {
                      let elSlice = dataPartnerMain?.selectedDate
                        ?.toISOString()
                        .slice(0, 10);

                      let elementSlice = el.date.slice(0, 10);

                      if (elementSlice === elSlice) {
                        let auxTime = "am";
                        let auxHour = el.hour;

                        if (el.hour >= 13) {
                          auxHour = el.hour - 12;
                          auxTime = "pm";
                        }

                        return (
                          <div className="calendar_list-datab" key={index}>
                            {el.type === "pickup" ? (
                              <div className="list-data_icob">
                                <MdOutlineShoppingBag />
                              </div>
                            ) : (
                              <div className="list-data_icob">
                                {" "}
                                <PiForkKnifeLight />
                              </div>
                            )}
                            <div className="list_data-contentb">
                              <div className="list-data_hourb">
                                {auxHour < 10
                                  ? `${
                                      typeof auxHour === "string"
                                        ? auxHour.substring(0, 2)
                                        : auxHour
                                    }:${
                                      typeof el?.minute === "string"
                                        ? el?.minute.substring(0, 2)
                                        : el?.minute
                                    } ${auxTime}`
                                  : `${
                                      typeof auxHour === "string"
                                        ? auxHour.substring(0, 2)
                                        : auxHour
                                    }:${
                                      typeof el?.minute === "string"
                                        ? el?.minute.substring(0, 2)
                                        : el?.minute
                                    } ${auxTime}`}
                              </div>

                              <div className="list-data_detailb">
                                <div className="data_detail-personb">
                                  <div className="datail-person_seatsb">
                                    {" "}
                                    {`${0}/${el.seats}`}{" "}
                                  </div>
                                  <div className="datail-person_userb">
                                    <HiOutlineUsers />
                                  </div>
                                  <div
                                    className="datail-person_pencilb"
                                    onClick={() =>
                                      dataPartnerMain?.handleEdit(el)
                                    }
                                  >
                                    <PiPencilSimpleLineLight />
                                  </div>
                                </div>

                                <button className="data_detail-btnb data_detail-button">
                                  Detalle
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </AccordionTab>
        );
      });
    }
  };

  return (
    <div className="PartnerListEvents">
      <div className="head-calendar-movil movile">
        <div className="head-calendar-movil-1">
          <div className="head-calendar-movil-1-calendar">
            <FaRegCalendarAlt />
          </div>
          <h3 className="head-calendar-movil-p">Calendario</h3>
        </div>
        <button
          onClick={() => {
            setselectedCalendarAlert(false);
            onToggleCalendar();
            console.log("Soy dataPartnerMain ", dataPartnerMain);
            dataPartnerMain?.setselectedCalendar((prev: boolean) => !prev);
          }}
          className={`head-calendar-movil-button ${
            dataPartnerMain?.selectedCalendar
              ? "bg-[#F89C53] text-[#4D3452]"
              : "border-[0.1rem] border-[#E1D4C4]"
          } `}
        >
          <h5>Selecciona la fecha </h5>
          <p>▼</p>
        </button>
        {selectedCalendarAlert && (
          <h4 className="!text-[#F89C53] alertasGlobal">Elija un dia</h4>
        )}
      </div>
      <div className="content-calendarb laptop">
        <div className="content-calendar_eventsb-container">
          <div className="content-calendar_eventsb laptop">
            <div className="calendar_events-textb">
              <div className="events-text-titleb">Lista de eventos</div>
              <div className="events-text-dateb">
                <div className="text-date_iconb">
                  <FaRegCalendarAlt />
                </div>

                <span className="text-date_dateb">
                  {monthFormater(dataPartnerMain?.selectedDate)}
                </span>
              </div>
            </div>
            <div className="content-calendar-cenab-container max-h-[55vh] overflow-auto">
              <Accordion>{createDynamicTabs()}</Accordion>
              <button
                className="data_detail-btnb  addb"
                onClick={() => dataPartnerMain?.handleNewEvent()}
              >
                Agregar Evento
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content-calendarb movile ">
        <div className="content-calendar_eventsb-container">
          <div className="content-calendar_eventsb">
            <div className="calendar_events-textb-head">
              <button
                onClick={() => {
                  dataPartnerMain.selectedDate != undefined
                    ? (dataPartnerMain?.handleNewEventMovil(),
                      dataPartnerMain?.setviewQuotas((prev: boolean) => !prev),
                      dataPartnerMain?.setselectQuotas(
                        (prev: boolean) => !prev
                      ))
                    : setselectedCalendarAlert(true);
                }}
                className={`button-1 main-page ${
                  dataPartnerMain?.selectQuotas
                    ? "bg-[#F89C53] text-[#4D3452]"
                    : "border-[0.1rem] border-[#E1D4C4]"
                } `}
              >
                Agregar cupos
              </button>
              <button
                onClick={() => {
                  dataPartnerMain?.setviewReservation((prev: boolean) => !prev);
                  dataPartnerMain?.setselectReservation(
                    (prev: boolean) => !prev
                  );
                }}
                className={`button-2 main-page ${
                  dataPartnerMain?.selectReservation
                    ? "bg-[#F89C53] text-[#4D3452]"
                    : "border-[0.1rem] border-[#E1D4C4]"
                } `}
              >
                Ver reservaciones
              </button>
            </div>
            {dataPartnerMain?.viewReservation ? (
              <div className=" content-calendar_eventsb-container-2 main-page ">
                <div className="calendar_events-textb">
                  <div className="events-text-titleb">Lista de eventos</div>
                  <div className="events-text-dateb">
                    <div className="text-date_iconb">
                      <FaRegCalendarAlt />
                    </div>

                    <span className="text-date_dateb">
                      {monthFormater(dataPartnerMain?.selectedDate)}
                    </span>
                  </div>
                </div>
                <div className="content-calendar-cenab-container">
                  <Accordion activeIndex={0}>
                    <AccordionTab
                      header={
                        <div
                          onClick={() => {
                            setmoreOrMinor((prev) => !prev);
                          }}
                          className="content-calendar-cenab"
                        >
                          <div className="calendar-cena_textb">
                            <div className="calendar-cena_textb-left">
                              <div className="cena_text-headb">
                                <div className="text-head_iconb">
                                  <LuChefHat />
                                </div>
                                <span className="text_head-textob">
                                  {" "}
                                  Cena Chef
                                </span>
                              </div>
                              <div className="cena-text-bodyb">
                                <span>Total de cupos: 50</span>
                                <br />
                                <span>
                                  Cupos reservados:45 (9 presencial / 36 pickup)
                                </span>
                                <br />
                                <span>
                                  Disponibles:5 (3 presencial / 2 pickup)
                                </span>
                                <br />
                              </div>
                            </div>
                            <div className="calendar-cena_actionb">
                              <button
                                // onClick={() => {
                                //   setviewCenaChef((prev) => !prev);
                                // }}
                                className="cena_action-textb main-page "
                              >
                                {moreOrMinor ? "-" : "+"}
                              </button>
                            </div>
                          </div>
                        </div>
                      }
                    >
                      <div
                        className={`content-calendar_listb ${
                          viewCenaChef ? "" : "little"
                        } `}
                      >
                        <div className="calendar_list-iconb">
                          <div className="calendar_list-datab-container">
                            {dataFiltredForDate.map((el: any, index: any) => {
                              if (true) {
                                let auxTime = "am";
                                let auxHour = el.hour;

                                if (el.hour >= 13) {
                                  auxHour = el.hour - 12;
                                  auxTime = "pm";
                                }

                                return (
                                  <div
                                    className={`calendar_list-datab ${
                                      dataFiltredForDate.length % 2 != 0 &&
                                      index == dataFiltredForDate.length - 1
                                        ? "w-full tablet:w-[100%]"
                                        : "w-full tablet:w-[49%]"
                                    }`}
                                    key={index}
                                  >
                                    {el.type === "pickup" ? (
                                      <div className="list-data_icob">
                                        {" "}
                                        <MdOutlineShoppingBag />
                                      </div>
                                    ) : (
                                      <div className="list-data_icob">
                                        {" "}
                                        <PiForkKnifeLight />
                                      </div>
                                    )}
                                    <div className="list_data-contentb">
                                      <div className="list_data-contentb-head">
                                        <div className="list-data_hourb">
                                          {auxHour < 10
                                            ? `${
                                                typeof auxHour === "string"
                                                  ? auxHour.substring(0, 2)
                                                  : auxHour
                                              }:${
                                                typeof el?.minute === "string"
                                                  ? el?.minute.substring(0, 2)
                                                  : el?.minute
                                              } ${auxTime}`
                                            : `${
                                                typeof auxHour === "string"
                                                  ? auxHour.substring(0, 2)
                                                  : auxHour
                                              }:${
                                                typeof el?.minute === "string"
                                                  ? el?.minute.substring(0, 2)
                                                  : el?.minute
                                              } ${auxTime}`}
                                        </div>
                                        <div className="data_detail-personb">
                                          <div className="datail-person_seatsb">
                                            {" "}
                                            {`${0}/${el.seats}`}{" "}
                                          </div>
                                          <div className="datail-person_userb">
                                            <HiOutlineUsers />
                                          </div>
                                          <div
                                            className="datail-person_pencilb"
                                            // onClick={() =>
                                            //   dataPartnerMain?.handleEdit(el)
                                            // }
                                            onClick={() => {
                                              dataPartnerMain.selectedDate !=
                                              undefined
                                                ? (dataPartnerMain?.handleEditMovil(
                                                    el
                                                  ),
                                                  dataPartnerMain?.setviewQuotas(
                                                    (prev: boolean) => !prev
                                                  ),
                                                  dataPartnerMain?.setselectQuotas(
                                                    (prev: boolean) => !prev
                                                  ))
                                                : setselectedCalendarAlert(
                                                    true
                                                  );
                                            }}
                                          >
                                            <PiPencilSimpleLineLight />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="list-data_detailb">
                                        <button className="data_detail-btnb data_detail-button">
                                          Detalle
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            })}
                          </div>
                          <button
                            className="data_detail-btnb  addb"
                            onClick={() => dataPartnerMain?.handleNewEvent()}
                          >
                            Agregar Evento
                          </button>
                        </div>
                      </div>
                    </AccordionTab>
                  </Accordion>

                  <div className="content-calendar-cenab laptop ">
                    <div className="calendar-cena_textb">
                      <div className="calendar-cena_textb-left">
                        {" "}
                        <div className="cena_text-headb">
                          <div className="text-head_iconb">
                            <Image
                              src={"/partners/copa.png"}
                              width={1000}
                              height={1000}
                              className={"w-full h-full rounded-t-[1rem]"}
                              alt=""
                            />
                          </div>
                          <span className="text_head-textob"> Mixología</span>
                        </div>
                        <div className="cena-text-bodyb">
                          <span>Total de cupos: 50</span>
                          <br />
                          <span>
                            Cupos reservados:45 (9 presencial / 36 pickup){" "}
                          </span>
                          <br />
                          <span>Disponibles:5 (3 presencial / 2 pickup)</span>
                          <br />
                        </div>
                      </div>
                      <div className="calendar-cena_actionb">
                        <button className="cena_action-textb">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {dataPartnerMain?.viewQuotas ? (
              <div className="add-cups-container main-page">
                <div className="add-cups-container-1">
                  <h4>Cupos</h4>
                  <div className="add-cups-container-1-2">
                    <div className="add-cups-container-1-2-image">
                      <FaRegCalendarAlt className="w-full h-full " />
                    </div>
                    <h4> {monthFormater(dataPartnerMain?.selectedDate)}</h4>
                  </div>
                </div>
                <button className="add-cups-container-2">
                  <p>Seleccione experiencia</p>
                  <p className="v-look-bottom">▼</p>
                </button>
                <div className="add-cups-container-3">
                  <div className="add-cups-container-3-1">
                    <div className="add-cups-container-3-1-1">
                      <div className="add-cups-container-3-1-1-image">
                        <LuChefHat />
                      </div>
                      <h4>Cena Chef</h4>
                    </div>
                    <div className="add-cups-container-3-1-2">-</div>
                  </div>
                  <div className="add-cups-container-3-2">
                    <button
                      onClick={() => {
                        setEvent({ ...event, type: "presencial" });
                        setpicked(true);
                        setreservaTru(false);
                        changePresencial();
                      }}
                      className={`add-cups-container-3-2-1 ${
                        presencial
                          ? "bg-[#F89C53] text-[#252127] "
                          : "bg-[#4D3452]"
                      } ${
                        event?.type === "presencial"
                          ? "bg-[#F89C53] text-[#252127]"
                          : ""
                      }`}
                    >
                      <div className="add-cups-container-3-2-1-image">
                        <PiForkKnifeLight />
                      </div>
                      <h5>Presencial</h5>
                    </button>

                    <button
                      onClick={() => {
                        setEvent({ ...event, type: "pickup" });
                        setpicked(true);
                        changePickup();
                        setreservaTru(false);
                      }}
                      className={`add-cups-container-3-2-2  ${
                        pickup ? "bg-[#F89C53] text-[#252127]" : "bg-[#4D3452]"
                      } ${
                        event?.type === "pickup"
                          ? "bg-[#F89C53] text-[#252127]"
                          : ""
                      } `}
                    >
                      <div className="add-cups-container-3-2-2-image">
                        <MdOutlineShoppingBag />
                      </div>
                      <h5>Pickup</h5>
                    </button>
                    {reservaTru && (
                      <h4 className="!text-[#F89C53] alertasGlobal">
                        Seleccione un tipo de evento
                      </h4>
                    )}
                  </div>
                </div>
                <div className="add-cups-container-4">
                  <div className="add-cups-container-4-1">
                    <div className="add-cups-container-4-1-image">
                      <PiForkKnifeLight />
                    </div>
                    <div className="add-cups-container-4-1-input">
                      <div className="content-event_dateb flex flex-col">
                        <div className="flex ">
                          <div className="dateb_container-inputb">
                            <input
                              className="event_date-inputb"
                              type="text"
                              value={
                                typeof event?.hour === "string"
                                  ? event?.hour.substring(0, 2)
                                  : event?.hour
                              }
                              onChange={(e: any) => {
                                let input = e.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
                                input = input.substring(0, 2); // Limita la entrada a dos caracteres
                                input === ""
                                  ? (number = 0)
                                  : (number = parseInt(input)); // Convierte a número, si está vacío establece como 0
                                input == 0
                                  ? sethourTru(true)
                                  : sethourTru(false);

                                number == event.hour
                                  ? null
                                  : number < 0
                                  ? (number = 0)
                                  : number > 23
                                  ? (number = 23)
                                  : 0; // Asegura que esté en el rango 0-24
                                setEvent({ ...event, hour: number }); // Actualiza el estado con el número procesado
                              }}
                            />
                            <span className="inputb-textb">Hora</span>
                          </div>
                          <span className="event_date-auxb">
                            {" "}
                            &nbsp;:&nbsp;
                          </span>
                          <div className="dateb_container-inputb">
                            <input
                              className="event_date-inputb"
                              type="text"
                              value={
                                typeof event?.minute === "string"
                                  ? event?.minute.substring(0, 2)
                                  : event?.minute
                              }
                              onChange={(e: any) => {
                                let input = e.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
                                input = input.substring(0, 2); // Limita la entrada a dos caracteres
                                input === ""
                                  ? (number = 0)
                                  : (number = parseInt(input)); // Convierte a número, si está vacío establece como 0

                                number == event.minute
                                  ? null
                                  : number < 0
                                  ? (number = 0)
                                  : number > 59
                                  ? (number = 59)
                                  : 0; // Asegura que esté en el rango 0-59
                                setEvent({ ...event, minute: number }); // Actualiza el estado con el número procesado
                              }}
                            />

                            <span className="inputb-textb">Minutos</span>
                          </div>
                          <div className="event_date-timeb">
                            <div
                              className={`date-timeb  ${
                                event?.hour >= 12 && "selectedb"
                              }`}
                            >
                              AM
                            </div>

                            <div
                              className={`date-timeb  ${
                                event?.hour < 12 && "selectedb"
                              }`}
                            >
                              PM
                            </div>
                          </div>
                        </div>
                        {hourTru && (
                          <h4 className="!text-[#F89C53] alertasGlobal">
                            Digite su hora{" "}
                          </h4>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="add-cups-container-4-2">Nº de personas</p>
                  <div className="add-cups-container-4-3">
                    <button
                      onClick={() => {
                        if (event.seats > 1) {
                          setEvent({ ...event, seats: event.seats - 1 });
                          setnumberPeople(false);
                        }
                      }}
                      className="add-cups-container-4-3-1"
                    >
                      -
                    </button>
                    <h4>{event?.seats} </h4>
                    <button
                      onClick={() => {
                        setEvent({ ...event, seats: event.seats + 1 });
                        setnumberPeople(false);
                      }}
                      className="add-cups-container-4-3-2"
                    >
                      +
                    </button>
                  </div>
                  {numberPeople && (
                    <h4 className="!text-[#F89C53] alertasGlobal">
                      Seleccione minimo 1 persona{" "}
                    </h4>
                  )}
                </div>
                <div className="add-cups-container-5">
                  <div className="add-cups-container-5-1"></div>
                  <div className="add-cups-container-5-2">
                    <button>Agregar +</button>
                  </div>
                </div>

                <div className="add-cups-container-6">
                  <button
                    onClick={() => {
                      dataPartnerMain?.setviewQuotas((prev: boolean) => !prev);
                      dataPartnerMain?.setselectQuotas(
                        (prev: boolean) => !prev
                      );
                    }}
                    className="add-cups-container-6-1"
                  >
                    Descartar cambios
                  </button>
                  <button
                    onClick={() => {
                      picked && event.seats != 0
                        ? (dataPartnerMain?.setviewQuotas(
                            (prev: boolean) => !prev
                          ),
                          dataPartnerMain?.setselectQuotas(
                            (prev: boolean) => !prev
                          ),
                          setpicked(false),
                          setpresencial(false),
                          setpickup(false),
                          handleGuardar())
                        : picked == false
                        ? setreservaTru(true)
                        : event.seats == 0
                        ? setnumberPeople(true)
                        : () => {
                            setreservaTru(false);
                            setnumberPeople(false);
                          };
                    }}
                    className="add-cups-container-6-2"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerListEvents;
