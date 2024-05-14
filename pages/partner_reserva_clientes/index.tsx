import React, { useEffect, useState } from "react";
import Calendar from "@/components/ui/icons/Calendar";
import { StartIcons2 } from "@/components/ui/icons/StartIcons2";
import { getAllPartnerSell } from "@/services/partnerReservaClientes";
import { useRouter } from "next/router";
import debounceFunction from 'debounce-fn';
 

import Image from "next/image";
import {
  IHeader,
  IpartnerReservation,
} from "@/interface/partnerReservationInterface";

import { formatearReservaFecha } from "@/utils/formaterDate";
const moment = require("moment");
import "moment/locale/es";
import { getAllServicePartnersOrder } from "@/services/partnersSuggestion.service";
import { Reservation } from "@/interface/partnersInterface";

function Index() {
  const [allData, setallData] = useState<IpartnerReservation[]>([]); // Inicializa allData como un array vacío
  const [allHeader, setallHeader] = useState<IHeader | any>();
  const [reser, setReser] = useState<Reservation[]>([])
  const [date, setDate] = useState(allHeader?.date || new Date().toISOString().split('T')[0]);
  const [currentReservationIndex, setCurrentReservationIndex] = useState(0);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [actualEvent, setActualEvent] = useState(0)
  const [isAdition, setIsAdition] = useState(0)
  const [isLast, setIsLast] = useState(false)

  const router = useRouter();

  const receivedData2 = router.query.data;
  
  let debounceTimeoutId: NodeJS.Timeout | null = null as any;

  const incrementReservation = debounceFunction(() => {
    if (reser && currentReservationIndex < reser.length - 1) {
      setCurrentReservationIndex(currentReservationIndex + 1)
      setIsAdition(1);
    }
    setIsDebouncing(true);
    if (debounceTimeoutId) clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => setIsDebouncing(false), 300);
  }, {wait: 300});
  
  const decrementReservation = debounceFunction(() => {
    if (reser && currentReservationIndex > 0) {
      setCurrentReservationIndex(currentReservationIndex - 1)
      setIsAdition(2);
    }
    setIsDebouncing(true);
    if (debounceTimeoutId) clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => setIsDebouncing(false), 300);
  }, {wait: 300}); 

  const cupos = () => {
    const totalQuotas = allHeader?.seats;

    const sumSeats: number = allData?.reduce(
      (acumulator: number, actualValue: any) => {
        return acumulator + parseInt(actualValue?.seats!);
      },
      0
    );

    return `Reservas / Cupos: ${sumSeats} / ${totalQuotas}`;
  };

  const getAllReservations = async () => {
    try {
      const part = {
        fk_user_id: localStorage.getItem("userid"),
      };
      const { data } = await getAllServicePartnersOrder(part);

      setReser(data);

      let initialIndex = data.findIndex((reservation: Reservation) => 
        reservation.details.some(details => details.id === Number(receivedData2))
      );
      
      if (initialIndex !== undefined && initialIndex !== -1) {
        setCurrentReservationIndex(initialIndex);
      }
      setActualEvent(+data[currentReservationIndex]?.details[0]?.fk_event_id)
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPartners = async () => {
    try {
      if (reser.length === 0) {
        return
      }
      let editedIndex = currentReservationIndex;
      let newEvent = reser?.[editedIndex]?.details[0]?.fk_event_id;

        const iterateForward = isAdition === 1;
        const iterateLimit = iterateForward ? reser.length - 1 : 0;
        // Loop until a different event is found or loop limit is reached
        while (isAdition > 0 && editedIndex < iterateLimit && reser?.[editedIndex]?.details[0]?.fk_event_id === actualEvent) {
          editedIndex = iterateForward 
          ? (editedIndex + 1)
          : editedIndex - 1
  
        // Check if loop reached the end (without finding a different event)
        if (editedIndex === iterateLimit) {
          setIsLast(true);
          return;
        }
  
        newEvent = reser?.[editedIndex]?.details[0]?.fk_event_id;
        
        // Update state variables based on the new event
        setActualEvent(actualEvent !== newEvent ? (newEvent || actualEvent) : actualEvent);
      }
      const fk_detail_id = reser?.[editedIndex]?.details?.[0]?.id ?? null;
      // console.log(reser?.[currentReservationIndex]?.details?.[0].fk_event_id)
      const { data } = await getAllPartnerSell(fk_detail_id);

      // if (data?.data?.header === allHeader) {
      //   setCurrentReservationIndex(currentReservationIndex + 1)
      //   return
      // }
      // console.log(data)
      setCurrentReservationIndex(editedIndex || 0)
      setallData(data?.data?.data);
      setallHeader(data?.data?.header);
      setDate(data?.data?.header)
      // setActualEvent(actualEvent !== newEvent ? (newEvent || actualEvent) : actualEvent)
    } catch (error) {
      console.log(error);
    }
  };
  

  const SecurityPrivileges = () => {
    let user_id;
    if(typeof window !== 'undefined'){
      user_id = localStorage.getItem('fk_typeuser')
    }

    user_id === "1" ? router.push("/") : "";
    // user_id === "2"?router.push("/home_partner"):"";
    user_id === "3" ? router.push("/admin/admin_home") : "";
  };


  useEffect(() => {
    getAllReservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    getAllPartners();
    SecurityPrivileges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reser, currentReservationIndex]);

  return (
    <div className="--reservation_details_partners main-page">
      <div className="box_datils-partners-reservations--">
      <div className="details_partners_fecha---">
        <button 
          onClick={decrementReservation} 
          style={{color: isDebouncing || currentReservationIndex === 0 ? 'gray' : 'white'}} 
          disabled={isDebouncing || currentReservationIndex === 0}
        >
        &lt;
        </button>
          <Calendar />
          <p>
          {formatearReservaFecha(
              date?.date +
                " " +
                date?.hour +
                ":" +
                date?.minute +
                ":00"
            )}
          </p>
          <button 
            onClick={incrementReservation} 
            style={{color: isDebouncing || (reser && currentReservationIndex === reser.length - 1) ? 'gray' : 'white'}}
            disabled={isDebouncing || (reser && currentReservationIndex === reser.length - 1)}
          >
          &gt;
          </button>
      </div>
        <div className="details_partners_title_dates">
          <div className="box_icon_presencial">
            {allHeader?.experience_type === "pickup" ? (
              <Image
                src={"/datils/pickup_white.png" || ""}
                width={1000}
                height={1000}
                alt=""
                style={{
                  width: "calc(5.5rem * var(--scale))",
                  height: "calc(5.9rem * var(--scale))",
                }}
              />
            ) : (
              <Image
                src={"/datils/pickout.png" || ""}
                width={1000}
                height={1000}
                alt=""
                style={{
                  width: "calc(5.5rem * var(--scale))",
                  height: "calc(5.9rem * var(--scale))",
                }}
              />
            )}
          </div>
          <div className='details_partners_title_type_-'>
            <h2>{allHeader?.experience_name}</h2>

            <p>{cupos()}</p>
          </div>
        </div>

        <div className="boxt-partner-details-general-coten ">
          {allData?.map((dts: any) => (
            <div key={dts?.id} className="details_partners_dates-client ">
              <article className="contenainer-new-order ">
                <div className="flex flex-col gap-[.5rem]  ">
                  <div className="details_partners_name_calification">
                    <h3>{dts?.user_name}</h3>
                    <div className="detailt-partners_califications">
                      <StartIcons2 />
                      <p> {dts?.start}</p>
                    </div>
                  </div>
                  <p>Ver comprobante de pago</p>
                  <p
                    className='cursor-pointer duration-300 ease-in-out hover:text-[#E1D4C4]'
                    onClick={() => {
                      router.push({
                        pathname: '/partner_chat',
                        query: { data: `${dts?.id}` },
                      });
                    }}
                  >
                    Ver mensajes
                  </p>
                </div>
                <div className="numeros_order_etc">
                  <div className="order-codig ">
                    <h3>Orden :</h3>
                    <p>{(+dts?.id || 0) + 300}</p>
                  </div>

                  <div className="reserva-codigs">
                    <h4>codigo de reserva :</h4>
                    <h4>{dts?.order_code}</h4>
                  </div>
                </div>
              </article>

              <div className="datails_partner_information__price_">
                <div className="details_partnet_prices__">
                  <p>Precio:</p>
                  <h3>{dts?.precio}</h3>
                </div>

                <div className="details_partnet_prices__">
                  <p>Invitados:</p>
                  <h3>{dts?.seats}</h3>
                </div>

                <div className="details_partnet_extras__">
                  <p>Extras:</p>
                  <h3>{dts?.extras}</h3>
                </div>

                <div className="details_partnet_coment__">
                  <p>Comentarios:</p>
                  <h3>{dts?.calification_comments} </h3>
                </div>
                <div className="details_partnet_status__">
                  <p>En curso</p>
                  <div
                    className={`w-[2rem] h-[2rem]  rounded-full ${
                      dts?.status === "completed" ? "bg-[#2cff2c]" : "bg-[red]"
                    } 
                `}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
