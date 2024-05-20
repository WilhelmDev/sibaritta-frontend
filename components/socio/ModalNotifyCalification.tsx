
import React from 'react'
import Modal from '../molecules/Modal';
import Image from 'next/image';
import { PickupWhite } from '../ui/icons/PickupWhite';
import { PresencialWhite } from '../ui/icons/PresencialWhite';
import { capitalizeFirstLetter } from '@/lib/utils_sale_pay_sibaritta';
import { transformDateAFormatHuman } from '@/lib/calculateTypeDate';

interface NotifyCalification {
    visible: boolean;
    closeModal: () => void;

  }

function ModalNotifyCalification( {visible, closeModal}:NotifyCalification) {

  return (
    <div>
        <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[80%] min-h-[45rem] tablet:w-[43%]  "
        className="notifyCalification"
        >
          <div>
          <div className={`card_ventas_general`}>
      <div className="sale-especific-1-general">
        <p className="sale-especific-1-name">username</p>
        <p className="sale-especific-1-code">ordennumber</p>
        <p className="sale-especific-1-date">{transformDateAFormatHuman("2023-03-01")}</p>
      </div>
      <div className="sale-especific-1-general-laptop">
        <p className="sale-especific-1-laptop-left">
          {transformDateAFormatHuman("2023-03-01")}
        </p>
        <div className="sale-especific-1-laptop-rigth">
          <p className="sale-especific-1-laptop-rigth-1">
            Orden: jkcjsdjsjs
          </p>
          <p className="sale-especific-l-laptop-rigth-2">Estado: en curso</p>
        </div>
      </div>
      <div className="sale-especific-2-general">
        <div className="sale-especific-pay-comision">
          <div className="sale-especific-2-pay sale-especific-2">
            <p className="text-left-pay">Pago:</p>
            <p className="text-right-pay">cancelado</p>
          </div>
         
        </div>
        <div className="sale-especific-pay-comision">
        <div className="sale-especific-2-pay-method sale-especific-2">
            <p className="text-left-pay-method">Método de Pago:</p>
            <p className="text-right-pay-method">
              {capitalizeFirstLetter("stripe")}
            </p>
          </div>
          {/* <div className="sale-especific-2-commission sale-especific-2">
            <p className="text-left-commission">Total comisión</p>
            <p className="text-right-commission">${DataSibaritta?.comision}</p>
          </div> */}
          <div className="sale-especific-2-total sale-especific-2">
            <p className="text-left-total">Total despues de comisiones:</p>
            <p className="text-right-total">$90000</p>
          </div>
        </div>
      </div>
      <div className="sale-especific-3-general hidden">
        <div className="sale-especific-3-left">
          <p className="text-left-left">Factura electrónica:</p>
          <p className="text-right-left">SI</p>
        </div>
        <div className="sale-especific-3-right">
          <p className="text-left-right">Devoluciones: </p>
          <p className="text-right-right">NO</p>
        </div>
      </div>
      <h5 className="tituloh5 informacionAdicional textoNaranja text-uppercase mt-5 pt-4 pb-4">INFORMACIÓN ADICIONAL</h5>

      <div className="sale-especific-4-general">
        <p className="paragraph-bill">
          <span className="paragraph-bill-left">
            Número de factura electrónica:
          </span>
          <span className="paragraph-bill-right">
            factura
          </span>
        </p>
      </div>
      <div className={`qualification`}>
        <div className="qualification-top">
          <div  className="qualification-top-1 cursor-pointer">
            <div  className="qualification-top-1-left">
            <PickupWhite />
              {/* {
                DataSibaritta?.type === "presencial" ?<PickupWhite />  : <PresencialWhite/>
              } */}
              {/* <Image
              onClick={openModalPartnerReserva}
                className="qualification-top-1-left-fork-image cursor-pointer"
                width={100}
                height={100}
                src={ForkImage.src}
                alt="fork imagen"
              /> */}
            </div>
            <div className="qualification-top-1-right">
              <p  className="qualification-top-1-right-1">
                peru
              </p>
              <p  className="qualification-top-1-right-2">
                xd
              </p>
            </div>
          </div>
          <div className="qualification-top-2">
            <div className="qualification-top-2-1">
              <Image
                className="qualification-top-2-1-logo-image"
                width={100}
                height={100}
                src={""}
                alt="fork imagen"
              />
            </div>
            <div className="qualification-top-2-2">
              {/* <p className="qualification-top-2-2-1">Seratta</p> */}
              <p className="qualification-top-2-2-2">{"xd"}</p>
            </div>
            <button className="qualification-top-2-3-button">
              <div className="qualification-top-2-3-1">Ricardo Fernandez</div>
              <div className="qualification-top-2-3-2">
               
                <p className="qualification-top-2-3-2-2">4.7(50)</p>
              </div>
            </button>
          </div>
        </div>
        <div
          className={`qualification-bottom `}
        >
          <p className="qualification-bottom-1">
            CALIFICACIÓN EDL SOCIO (POR EL PARTNER)
          </p>
          <div className="qualification-bottom-2-images">
           
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
      </div>
          </div>
        
      
        </Modal>
  
    </div>
  )
}

export default ModalNotifyCalification