import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import data from "@/json/partner.json";
import { PiForkKnifeLight, PiPencilSimpleLineLight } from "react-icons/pi";
import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { monthFormater } from "@/utils/formaterDate";
import { LuChefHat } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import Image from "next/image";
import CalendarCalendarMovil from "./CalendarCalendarMovil";



interface PartnerMainCalendar {
  dataPartnerMain: any;
  testData: any;
}

const CalendarMainCalendarMovil = ({
  dataPartnerMain,
  testData,
}: PartnerMainCalendar) => {
  const [viewQuotas, setviewQuotas] = useState<boolean>(false);
  const [viewReservation, setviewReservation] = useState<boolean>(false);
  const [viewCalendar, setviewCalendar] = useState<boolean>(false);
  const [selectQuotas, setselectQuotas] = useState<boolean>(false);
  const [selectReservation, setselectReservation] = useState<boolean>(false);
  const [presencial, setpresencial] = useState<boolean>(false);
  const [pickup, setpickup] = useState<boolean>(false)

const changePresencial = () =>{

  setpresencial(true);
  setpickup(false);

}

const changePickup = () =>{

  setpresencial(false);
  setpickup(true);

}


  return (
    <>
      <div className="PartnerMainCalendarMovil">
        <div className="head-calendar-movil">
          <div className="head-calendar-movil-1">
            <div className="head-calendar-movil-1-calendar">
              <FaRegCalendarAlt />
            </div>
            <h3 className="head-calendar-movil-p">Calendario</h3>
          </div>
          <button
            onClick={() => setviewCalendar((prev: boolean) => !prev)}
            className="head-calendar-movil-button"
          >
            <h5>Selecciona la fecha</h5>  
            <p>▼</p>
          </button>
          {viewCalendar ? <CalendarCalendarMovil data={testData}/> : <></>}
        </div>
        <div className="content-calendarb  hidden">
          <div className="content-calendar_eventsb-container">
            <div className="content-calendar_eventsb">
              <div className="calendar_events-textb-head">
                <button
                  onClick={() => {
                    setviewQuotas((prev) => !prev);
                    setselectQuotas((prev) => !prev);
                  }}
                  className={`button-1 main-page ${
                    selectQuotas
                      ? "bg-[#F89C53] text-[#4D3452]"
                      : "border-[0.1rem] border-[#E1D4C4]"
                  } `}
                >
                  Agregar cupos
                </button>
                <button
                  onClick={() => {
                    setviewReservation((prev: boolean) => !prev);
                    setselectReservation((prev: boolean) => !prev);
                  }}
                  className={`button-2 main-page ${
                    selectReservation
                      ? "bg-[#F89C53] text-[#4D3452]"
                      : "border-[0.1rem] border-[#E1D4C4]"
                  } `}
                >
                  Ver reservaciones
                </button>
              </div>
              {viewReservation ? (
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
                    <div className="content-calendar-cenab">
                      <div className="calendar-cena_textb">
                        <div>
                          <div className="cena_text-headb">
                            <div className="text-head_iconb">
                              <LuChefHat />
                            </div>
                            <span className="text_head-textob"> Cena Chef</span>
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
                          <button className="cena_action-textb">-</button>
                        </div>
                      </div>
                    </div>
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
                                  <div
                                    className="calendar_list-datab"
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
                                            ? `0${auxHour}:${el.minute} ${auxTime}`
                                            : `${auxHour}:${el.minute} ${auxTime}`}
                                        </div>
                                        <div className="data_detail-personb">
                                          <div className="datail-person_seatsb">
                                            {" "}
                                            {`${el.seats}/${data?.seats}`}{" "}
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
                            }
                          )}
                        </div>
                        <button
                          className="data_detail-btnb  addb"
                          onClick={() => dataPartnerMain?.handleNewEvent()}
                        >
                          Agregar Evento
                        </button>
                      </div>
                    </div>
                    <div className="content-calendar-cenab">
                      <div className="calendar-cena_textb">
                        <div>
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
              {viewQuotas ? (
                <div className="add-cups-container main-page">
                  <div className="add-cups-container-1">
                    <h4>Cupos</h4>
                    <div className="add-cups-container-1-2">
                      <div className="add-cups-container-1-2-image">
                        <FaRegCalendarAlt className="w-full h-full " />
                      </div>
                      <h4>15 Sept</h4>
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
                      <button onClick={()=>{changePresencial}} className={`add-cups-container-3-2-1 ${presencial?"bg-[#F89C53]":"bg-[#4D3452]"}`}>
                        <div className="add-cups-container-3-2-1-image">
                          <PiForkKnifeLight />
                        </div>
                        <h5>Presencial</h5>
                      </button>
                      <button onClick={()=>{changePickup}} className={`add-cups-container-3-2-2  ${pickup?"bg-[#F89C53]":"bg-[#4D3452]"}`}>
                        <div className="add-cups-container-3-2-2-image">
                          <MdOutlineShoppingBag />
                        </div>
                        <h5>Pickup</h5>
                      </button>
                    </div>
                  </div>
                  <div className="add-cups-container-4">
                    <div className="add-cups-container-4-1">
                      <div className="add-cups-container-4-1-image">
                        <PiForkKnifeLight />
                      </div>
                      <h4>19:00pm</h4>
                    </div>
                    <p className="add-cups-container-4-2">Nº de personas</p>
                    <div className="add-cups-container-4-3">
                      <button className="add-cups-container-4-3-1">-</button>
                      <h4>1</h4>
                      <button className="add-cups-container-4-3-2">+</button>
                    </div>
                  </div>
                  <div className="add-cups-container-5">
                    <div className="add-cups-container-5-1"></div>
                    <div className="add-cups-container-5-2">
                      <button>Agregar +</button>
                    </div>
                  </div>

                  <div className="add-cups-container-6">
                    <button className="add-cups-container-6-1">
                      Descartar cambios
                    </button>
                    <button
                      onClick={() => {
                        setviewQuotas((prev) => !prev);
                        setselectQuotas((prev) => !prev);
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
    </>
  );
};

export default CalendarMainCalendarMovil;
