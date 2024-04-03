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
          Cancelación solo hasta 2 horas antes de la hora programada.
        </p>

        <p className="reservation_p">
          El reembolso se hará efectivo dentro de los próximos 15 días habiles.
        </p>

        <article className="reservation_tbns">
          <button onClick={cancelar} className="reservation_tbn_cancelar">
            Cancelar reservación
          </button>
          <button onClick={closeModal} className="reservation_tbn_vovler">
            Volver
          </button>
        </article>
      </Modal>
    </div>
  );
}

export default CancelarResarvacion;
