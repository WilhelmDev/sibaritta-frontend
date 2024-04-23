"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllServicePartners } from "@/services/partnersSuggestion.service";
import { Reservation } from "@/interface/partnersInterface";
import {
  formatearReservaFecha,
  formatearFechaReservaHoursMinutes,
} from "@/utils/formaterDate";
import { Dropdown } from "react-day-picker";
import { capitalizeFirstLetter } from "@/lib/utils_sale_pay_sibaritta";
import { DayPicker } from "react-day-picker";
import { transformDateAFormatHumanReservation } from "@/lib/calculateTypeDate";
import {
  filtredDataOfDate,
  filtredDataOfDateComparator,
} from "@/lib/extract_sum_date";
import { useRouter } from "next/router";

function Index() {
  const [estado, setestado] = useState<string>("");
  const [sucursal, setsucursal] = useState("");
  const [experiencia, setexperiencia] = useState("");
  const [modalidad, setmodalidad] = useState("");
 
  const [reservations, setreservations] = useState<Reservation[]>();
  const esss = [{ name: "cancelled" }, { name: "cancelled" }];
  const [reservaFilter, setreservaFilter] = useState<any>();
  const [days, setDays] = useState<any>();
  const [viewCalendar, setviewCalendar] = useState<boolean>(false);
  // const [viewDataInfo, setviewDataInfo] = useState<string>("");
  const [reservationFilter, setReservationFilter] = useState<any[]>();

  let viewDataInfo: string = "";

  

  const router = useRouter();
 

  const allReservation = () => {
    setreservaFilter(reservations);
  };

  const searchCompletedOrCanceled = (e: string) => {
    setestado(e);

    const completedOrCancelled = e;

    setReservationFilter(
      completedOrCancelled !== ""
        ? reservations?.filter((e: any) => e.status === completedOrCancelled)
        : reservations
    );
    if (e === "all") {
      setReservationFilter(reservations);
      return;
    }
  };

  const searchPresencialOrPickup = (e: string) => {
    const presencialOrPickup = e;
    setmodalidad(e);
    setReservationFilter(
      presencialOrPickup !== ""
        ? reservations?.filter(
            (e: any) => e.details[0].type === presencialOrPickup
          )
        : reservations
    );
    if (e === "all") {
      setReservationFilter(reservations);
      return;
    }
  };

  const searchNameExperience = (dataClick: string) => {
    setexperiencia(dataClick);
    setReservationFilter(
      dataClick !== ""
        ? reservations?.filter(
            (e: any) => capitalizeFirstLetter(e.details[0].name) === dataClick
          )
        : reservations
    );
  };

  const calculateComparador = () => {
    


    if (days?.length == 2) {
      setReservationFilter(
        filtredDataOfDateComparator(days[0], days[1], reservations)
      );
      return;
    }
    if (days?.length == 1) {
      setReservationFilter(filtredDataOfDate(days[0], reservations));
      return;
    } else {
      setReservationFilter(reservations);
    }
  };
  const showDataInfo = (date: string) => {
    if (date != viewDataInfo) {
      viewDataInfo = date;

      return "";
    } else {
      return "none";
    }
  };

  const getAllReservations = async () => {
    try {
      const part = {
        fk_user_id: localStorage.getItem("userid"),
      };
      const { data } = await getAllServicePartners(part);
   
      setreservations(data);
    
    } catch (error) {
      console.log(error);
    }
  };

  const changeViewCalendar = () => {
    setviewCalendar(!viewCalendar);
  
  };

  const footer = (
    <button
      onClick={() => {
        calculateComparador(), changeViewCalendar();
      }}
    >
      Buscar
    </button>
  );

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");
    user_id === "1" ? router.push("/") : "";
    user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    getAllReservations();
    allReservation();
    SecurityPrivileges();
    searchCompletedOrCanceled("");
  }, []);

  const [inputTex, setinputTex] = useState("");

  const handleSearch = (e: any) => {
    const inputText = e.target.value.toLowerCase().trim();
    setinputTex(inputText);
    const filter = reservations?.filter(
      (pro) =>
        pro.order_number.toLowerCase().includes(inputTex) ||
        pro.order_code.toLowerCase().includes(inputTex) ||
        pro.details[0].name.toLowerCase().includes(inputTex)
    );
    setReservationFilter(filter);
  };

  useEffect(() => {
    if (reservations) {
      setReservationFilter(reservations);
    }
  }, [reservations]);

  function getUniqueNames(reservations: any) {
    const uniqueNames = new Set();
    reservations?.forEach((reservation: any) => {
      reservation.details.forEach((detail: any) => {
        uniqueNames.add(capitalizeFirstLetter(detail?.name));
      });
    });
    return Array.from(uniqueNames);
  }
  return (
    <div className="box-reservatios-all-general-container main-page">
      <section className="box-reservatios-all  main-page">
        <div className="  flex flex-col w-full laptop:w-[80.5%] m-auto  h-auto gap-[2rem] laptop:h-auto ">
          <div className="last_reservations-btns">
            <button className="last_reservations_one">Ultimas Reservas</button>
            <button className="last_reservations_two-">Calendario</button>
          </div>

          <div className="last_reservations_title_">
            <h2>Ultimas reservas</h2>

            <div className="box-reservations_content">
              <div className="last-reservastions_filters">
                <select
                  value={estado}
                  onChange={(e) => searchCompletedOrCanceled(e.target.value)}
                  className="last_reservations_state"
                >
                  {/* <option value="all" className="hidden">
                    Estado
                  </option> */}
                  <option value="all">Estados</option>

                  <option value="completed">Completado</option>
                  <option value="cancelled">Cancelado</option>
                </select>
                <select
                  value={experiencia}
                  onChange={(e) => searchNameExperience(e.target.value)}
                  className="last_reservations_state"
                >
                  <option value="">Experiencia</option>
                  {getUniqueNames(reservations).map((name: any, index) => (
                    <option value={name} key={index}>
                      {name}
                    </option>
                  ))}
                </select>

                <select
                  value={modalidad}
                  onChange={(e) => {
                    searchPresencialOrPickup(e.target.value);
                  }}
                  className="last_reservations_state"
                >
                  <option value="" className="hidden">
                    Modalidad
                  </option>
                  <option value="all">Modalidad</option>
                  <option value="presencial">Presencial</option>
                  <option value="pickup">Pickup</option>
                  {/* {reservations?.map((x) =>
                  x.details.map((c) => (
                    <option key={x.id}>{capitalizeFirstLetter(c?.type)}</option>
                  ))
                )} */}
                </select>
                {/* <select
                value={fecha}
                onChange={(e) => setfecha(e.target.value)}
                className="last_reservations_state"
              >
                <option value="">Fecha</option>
                {reservations?.map((x) => (
                  <option key={x.id}>
                    {capitalizeFirstLetter(formatearReservaFecha(x.createdAt))}
                  </option>
                ))}
              </select> */}
                <div
                  onClick={changeViewCalendar}
                  className="last_reservations_state"
                >
                  Fecha
                </div>
                <div
                  className={`day-picker-container ${
                    viewCalendar ? "activate" : ""
                  } `}
                >
                  <DayPicker
                    mode="multiple"
                    max={2}
                    selected={days}
                    onSelect={setDays}
                    footer={footer}
                  />
                </div>
              </div>

              <div className="">
                <input
                  // value="option1"
                  value={inputTex}
                  onChange={handleSearch} 
                  placeholder="Buscar"
                  type="text"
                  className="last_reservations_state-input"
                />
              </div>
            </div>
          </div>

          <div className="last_reservations_box_datos gap-[2rem]  ">
            {reservationFilter
              ? reservationFilter?.sort((a, b) => b.id - a.id )?.map((reser: any) => (
                  <div
                    key={reser?.id}
                    className="info_box_reservations-- px-[1rem]"
                  >
                    
                    <h2
                      style={{
                        display: `${showDataInfo(
                          transformDateAFormatHumanReservation(reser?.createdAt)
                        )}`,
                      }}
                    >
                      {transformDateAFormatHumanReservation(reser.createdAt)}
                    </h2>
                    <div className="info-box-datos--reservations">
                      <div className="info-box-title-orde ">
                        <div className="conten-icon ">
                          <button
                            onClick={() => {
                              router.push({
                                pathname: "/partner_reserva_clientes",
                                query: { data: `${reser.details[0].id}` },
                              });
                            }}
                            className=" w-[2.5rem] h-[2.5rem] laptop:w-[3.2rem]
                            laptop:h-[3.2rem]"
                          >
                            {reser.details[0].type == "pickup" ? (
                              <Image
                                src={"/datils/pickup_white.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-full"
                              />
                            ) : (
                              <Image
                                src={"/datils/pickout.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-full"
                              />
                            )}
                          </button>
                        </div>

                        <div className="info-reservations-title-orders-_-">
                          <div className="-title-date-reservations">
                            {reser?.details?.map((x: any) => (
                              <button
                                className="-title-date-reservations-button-1"
                                onClick={() => {
                                  router.push({
                                    pathname: "/partner_reserva_clientes",
                                    query: { data: `${x.id}` },
                                  });
                                }}
                                key={x?.id}
                              >
                                {x?.name}
                              </button>
                            ))}
                            <button
                              className="-title-date-reservations-button-2"
                              onClick={() => {
                                router.push({
                                  pathname: "/partner_reserva_clientes",
                                  query: { data: `${reser.details[0].id}` },
                                });
                              }}
                            >
                              {capitalizeFirstLetter(
                                formatearFechaReservaHoursMinutes(
                                  reser.details[0].date,
                                  reser?.details[0]?.hour,
                                  reser?.details[0]?.minute
                                )
                              )}
                            </button>
                          </div>

                          <div className="-order-code-reservations">
                            <h2>Orden: {reser?.order_number}</h2>
                            <p>Codigo de reservacion: {reser?.order_code}</p>
                          </div>
                        </div>
                      </div>

                      <div className="-info-box-reservations-price-etc">
                        <div className="inputs-valor-one ">
                          <h6>{reser?.user_name}</h6>
                          <div className="flex gap-[1rem] items-center ">
                            <div className=" w-[2rem] h-[2rem]">
                              <Image
                                src={"/datils/Star.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-full"
                              />
                            </div>
                            <p> {` ${reser.calification_number} ( ${reser.calification_ranking} ) `} </p>
                          </div>
                        </div>
                        <div className="inputs-valor-two ">
                          <h6>Precio:</h6>
                          <h6 className="!text-[#F89C53]">${reser?.order_total}</h6>
                        </div>
                        <div className="inputs-valor-tree ">
                          <p>#N de personas:</p>
                          <h6>{reser?.order_seats}</h6>
                        </div>
                        <div className="inputs-valor-four ">
                          {reser?.details?.map((x: any) => (
                            <h3 key={x?.id}>
                              {capitalizeFirstLetter(x?.type)}
                            </h3>
                          ))}
                          <div className=" w-[1.8rem] h-[1.8rem]">
                            {reser.details[0].type == "pickup" ? (
                              <Image
                                src={"/datils/bagBlack.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-full"
                              />
                            ) : (
                              <Image
                                src={"/partners/pick3.png"}
                                width={500}
                                height={500}
                                alt=""
                                className="w-full h-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="box-reservation_extra_coment">
                        <div className="reservation_extra">
                          <p>Extras:</p>
                          
                          <h6>
                            {reser?.suggestions
                              ?.map((x: any) => x?.quantity + " " + x.name)
                              .join(", ")}
                          </h6>
                        </div>
                        <div className="reservation_coment">
                          <p>Comentarios:</p>
                          <h3>
                            {capitalizeFirstLetter(reser?.order_comments)}
                          </h3>
                        </div>
                        <div className="reservation_status">
                          <p>
                            {reser?.status === "completed"
                              ? "Completado"
                              : reser?.status === "cancelled"
                              ? "Cancelado"
                              : reser?.status === "pendding"}
                          </p>
                          <div
                            className={`status--- ${
                              reser?.status === "completed"
                                ? "bg-[#36FF15]"
                                : reser?.status === "cancelled"
                                ? "bg-[red]"
                                : reser?.status === "pedding" && "bg-[#e9ff24]"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : reservations?.map((reser: any) => (
                  <div
                    key={reser?.id}
                    className="info_box_reservations-- px-[1rem]"
                  >
                    {/* <h2>Experiencia #{reser?.fk_experience_id}</h2> */}
                    <h2
                      style={{
                        display: `${showDataInfo(
                          transformDateAFormatHumanReservation(reser?.createdAt)
                        )}`,
                      }}
                    >
                      {transformDateAFormatHumanReservation(reser.createdAt)}
                    </h2>
                    <div className="info-box-datos--reservations">
                      <div className="info-box-title-orde ">
                        <div className="conten-icon ">
                          <button
                            onClick={() => {
                              router.push({
                                pathname: "/partner_reserva_clientes",
                                query: { data: `${reser.details[0].id}` },
                              });
                            }}
                            className=" w-[2.5rem] h-[2.5rem] laptop:w-[3.2rem]
                            laptop:h-[3.2rem]"
                          >
                            {reser.details[0].type == "pickup" ? (
                              <Image
                                src={"/datils/pickup_white.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-full"
                              />
                            ) : (
                              <Image
                                src={"/datils/pickout.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-full"
                              />
                            )}
                          </button>
                        </div>

                        <div className="info-reservations-title-orders-_-">
                          <div className="-title-date-reservations">
                            {reser?.details?.map((x: any) => (
                              <button
                                className="-title-date-reservations-button-1"
                                onClick={() => {
                                  router.push({
                                    pathname: "/partner_reserva_clientes",
                                    query: { data: `${x.id}` },
                                  });
                                }}
                                key={x?.id}
                              >
                                {x?.name}
                              </button>
                            ))}
                            <button
                              className="-title-date-reservations-button-2"
                              onClick={() => {
                                router.push({
                                  pathname: "/partner_reserva_clientes",
                                  query: { data: `${reser.details[0].id}` },
                                });
                              }}
                            >
                              {capitalizeFirstLetter(
                                formatearFechaReservaHoursMinutes(
                                  reser.details[0].date,
                                  reser?.details[0]?.hour,
                                  reser?.details[0]?.minute
                                )
                              )}
                            </button>
                          </div>

                          <div className="-order-code-reservations">
                            <h2>Orden: {reser?.order_number}</h2>
                            <p>Codigo de reservacion: {reser?.order_code}</p>
                          </div>
                        </div>
                      </div>

                      <div className="-info-box-reservations-price-etc">
                        <div className="inputs-valor-one ">
                          <h3>{reser?.user_name}</h3>
                          <div className="flex gap-[1rem] items-center ">
                            <div className=" w-[2rem] h-[2rem]">
                              <Image
                                src={"/datils/Star.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-full"
                              />
                            </div>
                            <p> {` ${reser.calification_number} ( ${reser.calification_ranking} ) `} </p>
                          </div>
                        </div>
                        <div className="inputs-valor-two ">
                          <p>Precio:</p>
                          <h3>${reser?.order_total}</h3>
                        </div>
                        <div className="inputs-valor-tree ">
                          <p>#N de personas:</p>
                          <h3>{reser?.order_seats}</h3>
                        </div>
                        <div className="inputs-valor-four ">
                          {reser?.details?.map((x: any) => (
                            <h3  className="" key={x?.id}>
                              {capitalizeFirstLetter(x?.type)}
                            </h3>
                          ))}
                          <div className=" w-[1.8rem] h-[1.8rem]">
                            {reser.details[0].type == "pickup" ? (
                              <Image
                                src={"/datils/bagBlack.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                className="w-full h-full"
                              />
                            ) : (
                              <Image
                                src={"/partners/pick3.png"}
                                width={500}
                                height={500}
                                alt=""
                                className="w-full h-full"
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="box-reservation_extra_coment">
                        <div className="reservation_extra">
                          <p>Extras:</p>
                         
                          <h3>
                            {reser?.suggestions
                              ?.map((x: any) => x?.quantity + " " + x.name)
                              .join(", ")}
                          </h3>
                        </div>
                        <div className="reservation_coment">
                          <p>Comentarios:</p>
                          <h3>
                            {capitalizeFirstLetter(reser?.order_comments)}
                          </h3>
                        </div>
                        <div className="reservation_status">
                          <p>
                            {reser?.status === "completed"
                              ? "Completado"
                              : reser?.status === "cancelled"
                              ? "Cancelado"
                              : reser?.status === "pendding"}
                          </p>
                          <div
                            className={`status--- ${
                              reser?.status === "completed"
                                ? "bg-[#36FF15]"
                                : reser?.status === "cancelled"
                                ? "bg-[red]"
                                : reser?.status === "pedding" && "bg-[#e9ff24]"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
