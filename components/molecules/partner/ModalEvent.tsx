import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { PiForkKnifeLight } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";

import { monthFormater } from "@/utils/formaterDate";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";
import { set } from "date-fns";
import { setEditEvents, seteEvents } from "@/redux/slice/partnerSlice";

interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  eventSelected: any;
}

function ModalEvent({ visible, setVisible, eventSelected }: ModalSessionProps) {
  const [reservaTru, setreservaTru] = useState(false);
  const [numberPeople, setnumberPeople] = useState(false);
  const [hourTru, sethourTru] = useState(false);
  const [picked, setpicked] = useState(false);

  let number;

  const { experience } = useAppSelector((state) => state.partner);
  const dispatch = useDispatch();
  const [event, setEvent] = useState<any>();
  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = "";
  };
  const getNum = (num: number) => {
    if (num < 9 && num >= 0) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  /*
    {
        "id": 9,
        "type": "pickup",
        "seats": 4,
        "date": "2024-01-16T05:00:00.000Z",
        "hour": 12,
        "minute": 22,
        "price": "10",
        "status": "active",
        "fk_experience_id": 1
      }  
  */

  useEffect(() => {
    setEvent({
      ...eventSelected,
      date:
        eventSelected.id === 0
          ? eventSelected.date
          : new Date(eventSelected.date),
      hour: getNum(eventSelected.hour),
      minute: getNum(eventSelected.minute),
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

    setpicked(false);

    closeModal();
  };


  return (
    <div>
      <Modal
        visible={visible}
        closeModal={closeModal}
        bg="#2F2A32"
        className="initail_reservation initail_reservation-partner"
      >
        <div className="content-eventb">
          <div className="content-event_headerb">
            <div className="event_header-textb">Nuevo evento</div>
            <div className="event_header-dateb">
              <div className="header-date_iconb ">
                <FaRegCalendarAlt />
              </div>
              <span className="header-date_textb">
                {" "}
                {monthFormater(event?.date)}
              </span>

              {/* {dateToYMD(new Date(event?.date))} */}
            </div>
          </div>

          <div className="content-event_typeb">
            <div className="event_type-headerb">
              <div className="content-type-headerb">
                <div className="type-header_contentCenab">
                  <div className="type-header_iconb">
                    {" "}
                    <LuChefHat />
                  </div>
                  <div className="type-header_textb"> &nbsp; Cena Chef</div>
                </div>

                <button className="type-header_actionb">-</button>
              </div> 

              <div className="event_type-bodyb">
                <div
                  className={`type-body_btnb  ${
                    event?.type === "presencial" && "selectedb"
                  }`}
                  onClick={() => {
                    setEvent({ ...event, type: "presencial" });
                    setpicked(true);
                    setreservaTru(false);
                  }}
                >
                  <div className="body_btn-knifeb">
                    <PiForkKnifeLight />
                  </div>
                  <span className="body_btnb"> &nbsp; Presencial</span>
                </div>
                <div
                  className={`type-body_btnb  ${
                    event?.type === "pickup" && "selectedb"
                  }`}
                  onClick={() => {
                    setEvent({ ...event, type: "pickup" });
                    setpicked(true);
                    setreservaTru(false);
                  }}
                >
                  <div className="body_btn-shopb">
                    <MdOutlineShoppingBag />
                  </div>
                  <span className="body_btnb"> &nbsp; Pickup</span>
                </div>
              </div>
              {reservaTru && (
                <h4 className="!text-[#F89C53] alertasGlobal">
                  Seleccione un tipo de evento
                </h4>
              )}
            </div>

            <div className="content-event_personb">
              <div className="event-person_numberb">N° de personas</div>
              <button
                className="event-person_btnb"
                onClick={() => {
                  if (event.seats > 1) {
                    setEvent({ ...event, seats: event.seats - 1 });
                    setnumberPeople(false);
                  }
                }}
              >
                {" "}
                -
              </button>
              <span className="event-person-valueb">{event?.seats}</span>
              <button
                className="event-person_btnb positiveb"
                onClick={() => {
                  setEvent({ ...event, seats: event.seats + 1 });
                  setnumberPeople(false);
                }}
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
          <div className="content-event_dateb flex flex-col">
            <div className="flex ">
              <div className="dateb_container-inputb">
                <input
                  className="event_date-inputb"
                  type="text"
                  value={typeof event?.hour === "string"
                  ? event?.hour.substring(0, 2)
                  : event?.hour}
                  onChange={(e: any) => {
                    let input = e.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
                    input = input.substring(0, 2); // Limita la entrada a dos caracteres
                    input === "" ? (number = 0) : (number = parseInt(input)); // Convierte a número, si está vacío establece como 0
                    input == 0 ? sethourTru(true) : sethourTru(false);
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
              <span className="event_date-auxb"> &nbsp;:&nbsp;</span>
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
                    input === "" ? (number = 0) : (number = parseInt(input)); // Convierte a número, si está vacío establece como 0
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
                  className={`date-timeb  ${event?.hour >= 12 && "selectedb"}`}
                >
                  AM
                </div>

                <div
                  className={`date-timeb  ${event?.hour < 12 && "selectedb"}`}
                >
                  PM
                </div>
              </div>
            </div>
            {hourTru && (
              <h4 className="!text-[#F89C53] alertasGlobal">Digite su hora </h4>
            )}
          </div>
          <div className="content-event_actionb">
            <button className="event_action-btnb" onClick={closeModal}>
              Descartar cambios
            </button>
            <button
              className="event_action-btnb guardarb"
              onClick={() => {
                picked && event.seats != 0 && event.hour != 0
                  ? handleGuardar()
                  : picked == false
                  ? setreservaTru(true)
                  : event.seats == 0
                  ? setnumberPeople(true)
                  : event.hour == 0
                  ? sethourTru(true)
                  : () => {
                      setreservaTru(false);
                      setnumberPeople(false);
                      sethourTru(true);
                    };
              }}
            >
              Guardar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalEvent;
