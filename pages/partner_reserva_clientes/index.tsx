import React, { useEffect, useState } from "react";
import Calendar from "@/components/ui/icons/Calendar";
import { StartIcons2 } from "@/components/ui/icons/StartIcons2";
import { getAllPartnerSell } from "@/services/partnerReservaClientes";
import { useRouter } from "next/router";

import Image from "next/image";
import {
  IHeader,
  IpartnerReservation,
} from "@/interface/partnerReservationInterface";

import { formatearReservaFecha } from "@/utils/formaterDate";

function Index() {
  const [allData, setallData] = useState<IpartnerReservation[]>([]); // Inicializa allData como un array vacío
  const [allHeader, setallHeader] = useState<IHeader | any>();

  const router = useRouter();

  const receivedData2 = router.query.data;

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

  const getAllPartners = async () => {
    try {
      const fk_detail_id = receivedData2;

      const { data } = await getAllPartnerSell(fk_detail_id);

      setallData(data?.data?.data);
      setallHeader(data?.data?.header);
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
    getAllPartners();
    SecurityPrivileges();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedData2]);

  return (
    <div className="--reservation_details_partners main-page">
      <div className="box_datils-partners-reservations--">
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
            <p>
              {allHeader?.experience_type === "pickup"
                ? "Pickup"
                : "Pencresial"}
            </p>

            <p>{cupos()}</p>
          </div>
        </div>

        <div className="details_partners_fecha---">
          <Calendar />
          <p>
            {formatearReservaFecha(
              allHeader?.date +
                " " +
                allHeader?.hour +
                ":" +
                allHeader?.minute +
                ":00"
            )}
          </p>
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
                    <p>{dts?.order_number}</p>
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
