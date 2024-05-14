import React, { useEffect, useState } from "react";
import CancelarResarvacion from "./reservacion/CancelarResarvacion";
import RestrictionReserva from "./reservacion/RestrictionReserva";
import AgregarInvitado from "./reservacion/AgregarInvitado";
import ExperienceModal from "./reservacion/ExperienceModal";
import { IReservacions } from "@/interface/getAllReservationsInterface";
import { formatearFechaReserva } from "@/utils/formaterDate";
import { useRouter } from "next/router";
import Image from "next/image";
import { formatearReservaFecha } from "@/utils/formaterDate";
import moment from "moment";
import 'moment-timezone';
import { cancelReservationConfir } from "@/services/reservaciones.service";
import { getCalificationSocio } from "@/services/calificacion.service";
import { ICalification } from "@/interface/calificationInterface";
import { Rating } from "primereact/rating";
import { toast } from "sonner";
import { estadosTraducidos } from "@/utils/estadosTraducidos";
import ModalPoliticasCancelacion from "./partner/ModalPoliticasCancelacion";
import { PresencialWhite } from "../ui/icons/PresencialWhite";
import { PickupWhite } from "../ui/icons/PickupWhite";
import CancelarSuccess from "./reservacion/CancelarSuccess";

interface ICardProps {
  card: IReservacions;
  first?: number;
  reservas: any;
}
function CardReservacion({ card, first, reservas, index }: any) {
  const [visible, setVisible] = useState<boolean>(false);
  const [restricion, setRestriction] = useState<boolean>(false);
  const [agregar, setAgregar] = useState<boolean>(false);
  const [calificar, setCalificar] = useState<boolean>(false);
  const [calification, setCalification] = useState<
    ICalification[] | undefined
  >();
  const [success, setSuccess] = useState(false)

  const router = useRouter();

  const [modalPoliticaCancel, setmodalPoliticaCancel] =
    useState<boolean>(false);

  const userType: string | null = localStorage.getItem("fk_typeuser");

  const openPoliticaCancel = () => {
    setmodalPoliticaCancel(true);
  };

  const getCalification = async () => {
    try {
      const userlogin = localStorage.getItem("userid");
      const socio = {
        fk_reservation_id: card.id,
        fk_user_id: userlogin,
      };
      const { data } = await getCalificationSocio(socio);
      setCalification(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCalification();
  }, [calificar]);

  const totalPrecioItems = card?.aditionals.reduce(
    (acc: any, adicional: any) => {
      const subtotal = adicional.price_item * adicional.quantity;
      return acc + subtotal;
    },
    0
  );

  const isValidAction = () => {
    const actualDate = moment()
    const eventDate = moment().tz("America/Mexico_City")
    .set({ 
      year: moment(card?.details[0]?.date).get('year'),
      month: moment(card?.details[0]?.date).get('month'),
      day: moment(card?.details[0]?.date).get('day'),
      hour: card?.details[0]?.hour,
      minute: card?.details[0]?.minute
    });
    const hoursDifference = eventDate.diff(actualDate, 'hours');
    return hoursDifference >= 24
  }

  const parseDate = (date:string) => {
    const dateParsed = moment(date).format('DD [de] MMMM [del] yyyy, H:mma')
    return dateParsed
  }

  const cancelar = async () => {
    try {
      const idDelete = {
        reservation_id: card.id,
      };
      const data = await cancelReservationConfir(idDelete);

      if (data.success === false) {
        toast("Tiempo de cancelar reserva Expirado", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[0px_0px_2px_1px_#E1D4C4] ",
            title: " text-[2rem]  ",
          },
          position: "top-center",
        });
      } else {
        toast("Reserva cancela Exitosa", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[0px_0px_2px_1px_#E1D4C4] ",
            title: " text-[2rem]  ",
          },
          position: "top-center",
        });
      }
      setVisible(false);
      setSuccess(true)
    } catch (error) {
      console.log(error);
    }
  };

  const reload = () => {
    location.reload();
  }
  const ruta = () => {
    localStorage.setItem("experienId", `${card?.id}`);
    router.push({
      pathname: '/chat',
      query: { data: `${card?.experience_name}` }
    });
  };

  const openModal = () => {
    const valid = isValidAction()
    if (valid) {
      setVisible(true);
    }
    // document.body.style.overflow = 'hidden';
  };
  const openModalRestriction = () => {
    setRestriction(true);
    // document.body.style.overflow = 'hidden';
  };
  const openModalAgregar = () => {
    setAgregar(true);
    // document.body.style.overflow = 'hidden';
  };
  const openModalCalificar = () => {
    setCalificar(true);
    // document.body.style.overflow = "hidden";
  };

  let status_socio = calification?.filter(
    (xd) => xd.status === "calified-socio" && xd.ranking > 0
  );
  status_socio = status_socio?.length! > 0 ? status_socio : undefined;

  let status_partner = calification?.filter(
    (xd) => xd.status === "calified-partner" && xd.ranking > 0
  );
  status_partner = status_partner?.length! > 0 ? status_partner : undefined;

  


  return (
    <div className="container_card ">
      <h3 className="container_card_experiencia">
        {/* Experiencia # {card.fk_experience_id} */}
        {/* Experiencia # {+card.id + 300} */}
      </h3>

      <div className="reservacion_titulo ">
        <div className="reservation_box">
          <div className="reservation_box_text">
            {/* {card?.details?.map((expe) => (
              <h3 key={expe.id} className=' reservacion_titulo_h3'>
                {expe.name}
              </h3>
            ))} */}
            <h3 className=" reservacion_titulo_h3">{card.experience_name}</h3>
            <p className="reservacion_titulo_ciudad">Ciudad</p>
          </div>

          <div className="reservacion_card_imagen "></div>
        </div>
        <section className="reservation_titulo_two-">
          <article className="one-reservation-">
            <div className="logo_reservations_id  ">
              {card.details[0].type === "presencial" ? (
                <PickupWhite />
              ) : (
                <PresencialWhite />
              )}
            </div>
          </article>
          <article className="two-resevation-_--- ">
            {/* <h2>{card.details[0].name}</h2> */}
            <h3>{card.experience_name}</h3>
            {/* <h5>{card.details[0].type}</h5> */}
          </article>
          <article className="three-reservation--_-  ">
            <div className="flex justify-end gap-[1rem] items-center">
              <h3>Orden :</h3>
              <h3>{+card.id + 300}</h3>
            </div>
            <div className="flex justify-end w-full gap-[1rem] items-center">
              <p>Codigo reservacion :</p>
              <p>{card.order_code}</p>
            </div>
          </article>
        </section>

        <p className="fecha_reservation_reserva">
          {/* {formatearReservaFecha(card?.createdAt)} */}
          {formatearReservaFecha(
            card?.details[0]?.date +
              " " +
              card?.details[0]?.hour +
              ":" +
              card?.details[0]?.minute +
              ":00"
          )}
          <p>{card?.partner?.full_name}</p>
          <p>{card?.partner?.address}</p>
          {
            (card?.status === 'cancelled') && (
              <p>Fecha de cancelación: {moment(card?.cancelation_date).format('DD [de] MMMM yyyy, HH:mm:ss [hs]')}</p>
            )
          }
        </p>

        <div className="container_card_info">
          <div className="container_card_info_caja">
            <p className="container_card_info_p">Estado</p>
            <h2 className="container_card_info_h2">
              {estadosTraducidos[card.status]}
            </h2>
          </div>

          <div className="container_card_info_caja">
            <p className="container_card_info_p">Nº de personas</p>
            <h2 className="container_card_info_h2">{card?.order_seats}</h2>
          </div>

          <div className="container_card_info_caja">
            <p className="container_card_info_p">
              Valor experiencia para todos los invitados
            </p>
            <h2 className="container_card_info_h2">
              ${card?.details[0].price_item * card?.details[0].quantity}
            </h2>
          </div>

          <div className="container_card_info_caja">
            <p className="container_card_info_p">Sugerencia Sibaritta</p>
            {/* {card?.aditional.map(x => x.?price_item * x?.quantity )} */}
            <h2 className="container_card_info_h2">$ {totalPrecioItems}</h2>
          </div>

          {/* <div className="container_card_info_caja">
            <p className="container_card_info_p">Cargo de servicio</p>
            <h2 className="container_card_info_h2">$567</h2>
          </div> */}
          {/* <div className="container_card_info_caja">
            <p className="container_card_info_p">Propina</p>
            <h2 className="container_card_info_h2">$80</h2>
          </div> */}
          <div className="container_card_info_caja">
            <p className="container_card_info_p">Costo total de Experiencia</p>
            <h2 className="container_card_info_h2">${card.order_total}</h2>
          </div>
          <div className="container_card_info_caja">
            <p className="container_card_info_p">Fecha y hora del pago</p>
            <h2 className="container_card_info_h2">
              {parseDate(card?.order_paymentAt)}
            </h2>
          </div>
          <div className="container_card_info_caja">
            <p className="container_card_info_p">Método de pago</p>
            <h2 className="container_card_info_h2">
              Tarjeta terminada en *{card?.cardnumber || "8958"}
            </h2>
          </div>

          {moment().startOf("day").isAfter(moment(card.details[0].date)) && (
            <>
              <div className="clasifiacion_card-">
                <p className="">
                  CALIFICACIÓN DE LA EXPERIENCIA (POR EL SOCIO)
                </p>
                {userType === "1" && (
                  <>
                    {status_socio ? (
                      <>
                        <Rating
                          value={status_socio[0]?.ranking}
                          readOnly
                          cancel={false}
                        />
                        <div className="response-rating_response__ ">
                          {status_socio[0].message}
                        </div>
                      </>
                    ) : (
                      <button onClick={openModalCalificar}>
                        Clasificar la experiencia
                      </button>
                    )}
                  </>
                )}
                {userType === "2" && (
                  <>
                    {status_socio ? (
                      <>
                        <Rating
                          value={status_socio[0]?.ranking}
                          readOnly
                          cancel={false}
                        />
                        <div className="response-rating_response__ ">
                          {status_socio[0].message}
                        </div>
                      </>
                    ) : (
                      <button className="!bg-[#252026]">
                        El socio aun no ha calificado la experiencia
                      </button>
                    )}
                  </>
                )}
              </div>
            </>
          )}

          {moment().startOf("day").isAfter(moment(card.details[0].date)) && (
            <>
              <div className="clasifiacion_card-">
                <p className="">
                  CALIFICACIÓN DE LA EXPERIENCIA (POR EL PARTNER)
                </p>
                {userType === "2" && (
                  <>
                    {status_partner ? (
                      <>
                        <Rating
                          value={status_partner[0]?.ranking}
                          readOnly
                          cancel={false}
                        />
                        <div className="response-rating_response__ ">
                          {status_partner[0].message}
                        </div>
                      </>
                    ) : (
                      <button onClick={openModalCalificar}>
                        Clasificar la experiencia
                      </button>
                    )}
                  </>
                )}

                {userType === "1" && (
                  <>
                    {status_partner ? (
                      <>
                        <Rating
                          value={status_partner[0]?.ranking}
                          readOnly
                          cancel={false}
                        />
                        <div className="response-rating_response__ ">
                          {status_partner[0].message}
                        </div>
                      </>
                    ) : (
                      <button className="!bg-[#252026]">
                        El partner aun no ha realizado la calificacion
                      </button>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
        <button onClick={openModal} className="btn-cancel-_--_reservation ">
          Cancelar
        </button>
        {card.status === "completed" &&
          moment()
            .startOf("day")
            .isSameOrBefore(moment(card.details[0].date).startOf("day")) && (
            <button onClick={ruta} className="btn-coments-order">
              Mensaje
            </button>
          )}

        <button
          onClick={openModalRestriction}
          className="btn-restricciones-reservation"
        >
          Restricciones
        </button>
        {/* {card?.restricciones === true ? (
          ''
        ) : (
          <button onClick={openModalRestriction}
          className='btn-restricciones-reservation'>
            restricciones
          </button>
        )} */}
        {card.status === "completed" &&
          moment()
            .startOf("day")
            .isSameOrBefore(moment(card.details[0].date).startOf("day")) && (
            <>
              <div className="btn-cancel-reservation ">
                <p onClick={openModal} className={`${isValidAction() ? 'cursor-pointer' : 'opacity-50'}`}>
                  Solicitar reembolso
                </p>
                <div className="descrition-cancel-reservation-btn  ">
                  <h6 className="!no-underline">
                    { isValidAction() 
                      ? 'El reembolso implica la aceptación de nuestra'
                      : 'El reembolso sólo es posible hasta 24 horas antes de la Experiencia. Ver nuestra' 
                    }
                    
                  </h6>
                  <h6 onClick={openPoliticaCancel} className="cursor-pointer ">
                    Política de Cancelaciones
                  </h6>
                </div>
              </div>
            </>
          )}
        <div className="w-full   text-[1.6rem] md:hidden ">
          <span>
            El reembolso implica la aceptación de nuestra
            Cancelaciones.
          </span>
        </div>
      </div>
      <RestrictionReserva
        card={card}
        visible={restricion}
        setVisible={setRestriction}
      />
      <CancelarResarvacion
        cancelar={cancelar}
        visible={visible}
        setVisible={setVisible}
      />
      <CancelarSuccess 
        cancelar={reload}
        visible={success}
        setVisible={setSuccess}
      />
      <AgregarInvitado visible={agregar} setVisible={setAgregar} />
      <ModalPoliticasCancelacion
        visible1={modalPoliticaCancel}
        setVisible1={setmodalPoliticaCancel}
      />
      <ExperienceModal
        card={card}
        visible={calificar}
        setVisible={setCalificar}
      />
    </div>
  );
}

export default CardReservacion;
