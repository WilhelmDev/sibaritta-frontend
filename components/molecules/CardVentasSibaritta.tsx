import StarIcon from "@/public/ventas_sibarita/StarIcon.png";
import Image from "next/image";
import { transformDateAFormatHuman } from "@/lib/calculateTypeDate";
import { capitalizeFirstLetter } from "@/lib/utils_sale_pay_sibaritta";
import { formatearDataPartner } from "@/utils/formaterDate";
import ModalPartnerReservaVentas from "@/components/molecules/ModalPartnerReservaVentas";
import { useState } from "react";
import { PresencialWhite } from "@/components/ui/icons/PresencialWhite";
import { PickupWhite } from "@/components/ui/icons/PickupWhite";
import { estadosTraducidos } from "@/utils/estadosTraducidos";

interface CardVentasSibaritta {
  DataSibaritta: any;
}

const CardVentasSibaritta = ({ DataSibaritta }: CardVentasSibaritta) => {
  const [modalPartner, setmodalPartner] = useState<boolean>(false);

  const closeModalPartnerReserva = () => {
    setmodalPartner(false);
  };
  const openModalPartnerReserva = () => {
    setmodalPartner(true);
  };
  const numberStairs2 = 3;

  const totalAftercommission = DataSibaritta?.total - DataSibaritta?.comision;

  return (
    <div className={`card_ventas_general`}>
      <div className="sale-especific-1-general">
        <p className="sale-especific-1-name">{DataSibaritta?.user_name}</p>
        <p className="sale-especific-1-code">{DataSibaritta?.order_number}</p>
        <p className="sale-especific-1-date">
          {transformDateAFormatHuman(DataSibaritta?.createdAt)}
        </p>
      </div>
      <div className="sale-especific-1-general-laptop">
        <p className="sale-especific-1-laptop-left">
          {transformDateAFormatHuman(DataSibaritta?.createdAt)}
        </p>
        <div className="sale-especific-1-laptop-rigth">
          <p className="sale-especific-1-laptop-rigth-1">
            Orden: {DataSibaritta?.order_number}
          </p>
          <p className="sale-especific-l-laptop-rigth-2">Estado: en curso</p>
        </div>
      </div>
      <div className="sale-especific-2-general">
        <div className="sale-especific-pay-comision">
          <div className="sale-especific-2-pay sale-especific-2">
            <p className="text-left-pay">Pago:</p>
            <p className="text-right-pay">
              {estadosTraducidos?.[DataSibaritta?.status]}
            </p>
          </div>
        </div>
        <div className="sale-especific-pay-comision">
          <div className="sale-especific-2-pay-method sale-especific-2">
            <p className="text-left-pay-method">Método de Pago:</p>
            <p className="text-right-pay-method">
              {capitalizeFirstLetter(DataSibaritta?.metodo_pago)}
            </p>
          </div>
          <div className="sale-especific-2-total sale-especific-2">
            <p className="text-left-total">Total despues de comisiones:</p>
            <p className="text-right-total">${totalAftercommission}</p>
          </div>
        </div>
      </div>
      <div className="sale-especific-3-general">
        <div className="sale-especific-3-left">
          <p className="text-left-left">Factura electrónica:</p>
          <p className="text-right-left">SI</p>
        </div>
        <div className="sale-especific-3-right">
          <p className="text-left-right">Devoluciones: </p>
          <p className="text-right-right">NO</p>
        </div>
      </div>
      <div className="sale-especific-4-general">
        <p className="paragraph-bill">
          <span className="paragraph-bill-left">
            Número de factura electrónica:
          </span>
          <span className="paragraph-bill-right">
            {DataSibaritta?.factura_electronica}
          </span>
        </p>
      </div>
      <div className={`qualification`}>
        <div className="qualification-top">
          <div className="qualification-top-1 cursor-pointer">
            <div
              onClick={openModalPartnerReserva}
              className="qualification-top-1-left"
            >
              {DataSibaritta?.type === "presencial" ? (
                <PickupWhite />
              ) : (
                <PresencialWhite />
              )}
            </div>
            <div className="qualification-top-1-right">
              <p
                onClick={openModalPartnerReserva}
                className="qualification-top-1-right-1"
              >
                {DataSibaritta?.experience}
              </p>
              <p
                onClick={openModalPartnerReserva}
                className="qualification-top-1-right-2"
              >
                {capitalizeFirstLetter(
                  formatearDataPartner(DataSibaritta?.date)
                )}
              </p>
            </div>
          </div>
          <div className="qualification-top-2">
            <div className="qualification-top-2-1">
              <Image
                className="qualification-top-2-1-logo-image"
                width={100}
                height={100}
                src={DataSibaritta?.partner_avatar}
                alt="fork imagen"
              />
            </div>
            <div className="qualification-top-2-2">
              <p className="qualification-top-2-2-2">
                {DataSibaritta?.partner_comercial_name}
              </p>
            </div>
            <button className="qualification-top-2-3-button">
              <div className="qualification-top-2-3-1">Ricardo Fernandez</div>
              <div className="qualification-top-2-3-2">
                {Array.from({ length: DataSibaritta?.ranking })?.map(
                  (_, index) => (
                    <div
                      key={index}
                      className="qualification-top-2-3-2-star-image"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={StarIcon.src}
                        alt="fork imagen"
                      />
                    </div>
                  )
                )}
                <p className="qualification-top-2-3-2-2">4.7(50)</p>
              </div>
            </button>
          </div>
        </div>
        <div
          className={`qualification-bottom ${
            DataSibaritta?.ranking ? "activate" : ""
          }`}
        >
          <p className="qualification-bottom-1">
            CALIFICACIÓN EDL SOCIO (POR EL PARTNER)
          </p>
          <div className="qualification-bottom-2-images">
            {Array?.from({ length: numberStairs2 })?.map((_, index) => (
              <div
                key={index}
                className={`qualification-bottom-2-image qualification-bottom-2-image-${
                  index + 1
                }`}
              >
                <Image
                  width={100}
                  height={100}
                  src={StarIcon.src}
                  alt={`imagen ${index}`}
                />
              </div>
            ))}
          </div>
          <p className="qualification-bottom-3">
            El socio se comporta muy bien
          </p>
          <p className="qualification-bottom-4">
            CALIFICACION DE SOCIO (POR EL PARTNER)
          </p>
          <button className="qualification-bottom-5">
            Calificar socio Sibaritta
          </button>
        </div>
      </div>
      {DataSibaritta && (
        <ModalPartnerReservaVentas
          Datasibarita={DataSibaritta}
          visible={modalPartner}
          closeModal={closeModalPartnerReserva}
        />
      )}
    </div>
  );
};

export default CardVentasSibaritta;
