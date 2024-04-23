import React from "react";
import Modal from "../Modal";
import Image from "next/image";

interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  cancelar: () => void;
}

function CancelarResarvacion({
  visible,
  setVisible,
  cancelar,
}: ModalSessionProps) {
  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
  };

  return (
    <div className="">
      <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[80%] tablet:w-[58rem]  "
        bg="#2F2A32"
        className="reservacion_modal"
      >
        <Image
          src={"/profile/reservaciones/modal/alert.png"}
          alt="alerta"
          width={80}
          height={50}
        />

        <p className="reservation_p-one">
          Estás a punto de cancelar la reservación.
        </p>

        <p className="reservation_p">
          Sólo se realizan reembolsos en reservas canceladas con un mínimo de 24 horas de anticipación al evento. El reembolso se hace efectivo dentro de los 15 días hábiles de la cancelación
        </p>

        <article className="reservation_tbns">
          <button onClick={cancelar} className="reservation_tbn_cancelar">
            Confirmar cancelación
          </button>
          <button onClick={closeModal} className="reservation_tbn_vovler">
            Cancelar
          </button>
        </article>
      </Modal>
    </div>
  );
}

export default CancelarResarvacion;
