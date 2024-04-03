import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import { estadosTraducidos } from "@/utils/estadosTraducidos";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { capitalizeFirstLetter } from "@/lib/utils_sale_pay_sibaritta";
import { PresencialWhite } from "@/components/ui/icons/PresencialWhite";
import { PickupWhite } from "@/components/ui/icons/PickupWhite";

interface PartnerReservaModal {
  visible: boolean;
  closeModal: () => void;
  Datasibarita: any;
}

function ModalPartnerReservaVentas({
  visible,
  closeModal,
  Datasibarita,
}: PartnerReservaModal) {

  const valorExperienciaTodosInvitados =
    Datasibarita?.reservation_details?.reduce(
      (accumulator: number, currentValue: any) => {
        return (
          accumulator +
          parseInt(currentValue?.price_item) * parseInt(currentValue?.quantity)
        );
      },
      0
    );
  const fechaDePago: Date = parseISO(Datasibarita?.date);

  const fechaDePagoString = format(fechaDePago, "d 'de' MMMM", { locale: es });

  const bebidaExtra = Datasibarita?.reservation_details?.reduce(
    (accumulator: number, currentValue: any) => {
      if (currentValue.fk_event_id == null) {
        return (
          accumulator +
          parseInt(currentValue.price_item) * parseInt(currentValue.quantity)
        );
      } else {
        return accumulator;
      }
    },
    0
  );

  return (
    <div>
      <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[80%] min-h-[43rem] tablet:w-[68rem]  "
        className="partner-reservation-ventas"
      >
        <div className="  w-full h-auto">
          <h2 className="container_card_experiencia">
            Experiencia # {Datasibarita?.id}
          </h2>

          <div className="reservacion_titulo !w-full ">
            <div className="reservation_box">
              <div className="reservation_box_text">
                {/* {card?.details?.map((expe) => (
              <h3 key={expe.id} className=' reservacion_titulo_h3'>
                {expe.name}
              </h3>
            ))} */}
                <h3 className=" reservacion_titulo_h3">
                  Título de la experiencia
                </h3>
                <p className="reservacion_titulo_ciudad">Ciudad</p>
              </div>

              <div className="reservacion_card_imagen "></div>
            </div>
            <section className="reservation_titulo_two-">
              <article className="one-reservation-">
                <div className="logo_reservations_id  ">
                  {Datasibarita?.type === "presencial" ? (
                    <PickupWhite />
                  ) : (
                    <PresencialWhite />
                  )}
                </div>
              </article>
              <article className="two-resevation-_--- ">
                <h2>{capitalizeFirstLetter(Datasibarita?.experience)} </h2>
                <p>{Datasibarita?.partner_address} </p>
              </article>
              <article className="three-reservation--_-  ">
                <div className="flex gap-[1rem] items-center">
                  <h3>Orden :</h3>
                  <h3>{Datasibarita?.order_number}</h3>
                </div>
                <div className="flex w-full gap-[1rem] items-center">
                  <p>Codigo reservacion :</p>
                  <p>{Datasibarita?.order_code} </p>
                </div>
              </article>
            </section>

            <p className="fecha_reservation_reserva">
              {/* {formatearReservaFecha(card?.createdAt)} */}
              12/diciembre
            </p>

            <div className="container_card_info">
              <div className="container_card_info_caja">
                <p className="container_card_info_p">Estado</p>
                <h2 className="container_card_info_h2">
                  {estadosTraducidos?.[Datasibarita?.status]}{" "}
                </h2>
              </div>

              <div className="container_card_info_caja">
                <p className="container_card_info_p">Nº de personas</p>
                <h2 className="container_card_info_h2">
                  {Datasibarita?.reservation_details.find(
                    (detail: any) => detail.fk_event_id !== null
                  )?.quantity || "No data"}
                </h2>
              </div>

              <div className="container_card_info_caja">
                <p className="container_card_info_p">
                  Valor experiencia para todos los invitados
                </p>
                <h2 className="container_card_info_h2">
                  {valorExperienciaTodosInvitados}
                </h2>
              </div>

              <div className="container_card_info_caja">
                <p className="container_card_info_p">Bebida extra</p>
                <h2 className="container_card_info_h2">{bebidaExtra}</h2>
              </div>

              <div className="container_card_info_caja">
                <p className="container_card_info_p">
                  Costo total de Experiencia
                </p>
                <h2 className="container_card_info_h2">
                  {Datasibarita?.total}
                </h2>
              </div>
              <div className="container_card_info_caja">
                <p className="container_card_info_p">Fecha y hora del pago</p>
                <h2 className="container_card_info_h2">
                  {/* {formatearFechaReserva(card?.order_paymentAt)} */}
                  {fechaDePagoString ? fechaDePagoString : null}
                </h2>
              </div>
              <div className="container_card_info_caja">
                <p className="container_card_info_p">Metodo de pago</p>
                <h2 className="container_card_info_h2">
                  Tarjeta terminana en *{Datasibarita?.cardnumber}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPartnerReservaVentas;