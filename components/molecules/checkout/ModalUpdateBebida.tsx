import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { IReservation } from "@/interface/checkout.interface";

interface ModalcheckoutProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  bebida: any;
  reserva: IReservation | undefined | null;
  setReserva: any;
}

function ModalUpdateBebida({
  visible,
  setVisible,
  bebida,
  reserva,
  setReserva,
}: ModalcheckoutProps) {

  const [localCantidad, setLocalCantidad] = useState(bebida.count);

  useEffect(() => {
    setLocalCantidad(bebida.count);
  }, [bebida]);

  const actualizarCantidad = (nuevaCantidad: any) => {
    if (nuevaCantidad >= 0) {
      setLocalCantidad(nuevaCantidad);
    }
  };

  const guardarCambios = () => {
    // Crear una nueva referencia de objeto al actualizar
    const nuevaReserva = {
      ...reserva,
      sugerencias: reserva?.sugerencias?.map((sugerencia) => {
        if (sugerencia.id === bebida.id) {
          return { ...sugerencia, count: localCantidad };
        }
        return sugerencia;
      }),
    };

    // Actualizar el estado de la reserva con la nueva referencia de objeto
    setReserva(nuevaReserva);

    // Guardar la reserva actualizada en el localStorage u otros lugares si es necesario
    localStorage.setItem("reservation", JSON.stringify(nuevaReserva));
    closeModal();
  };

  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = "auto";
  };

  return (
    <div className="">
      <Modal
        visible={visible}
        closeModal={closeModal}
        className="modal-bebida-checkout tablet:w-[50rem] laptop:w-[55rem]"
      >
        <div className="checkout-modal-bebida">
          <h2 className="title">{bebida?.name || "CocaCola"}</h2>
          <p className="precio-">{`${bebida?.regular_price || "$600"}`}</p>
          <section className="modal-checkout-add-bebida">
            <p>Cantidad</p>
            <article className="modal-add-checkout-bebida">
              <div
                onClick={() => actualizarCantidad(localCantidad - 1)}
                className="modal-minus-checkout_"
              >
                -
              </div>
              <h3 className="modal-amount-checkout-_">{localCantidad}</h3>
              <div
                onClick={() => actualizarCantidad(localCantidad + 1)}
                className="modal-update-_-checkout"
              >
                +
              </div>
            </article>
          </section>
          <section className="modal-btn-checkout-_">
            <button onClick={closeModal} className="modal-cancel-checkout-">
              Cancelar
            </button>
            <button onClick={guardarCambios} className="modal-keep-checkout-">
              Guardar
            </button>
          </section>
        </div>
      </Modal>
    </div>
  );
}

export default ModalUpdateBebida;
