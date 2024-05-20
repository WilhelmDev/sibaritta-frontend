import React from "react";
import Modal from "../Modal";
import Image from "next/image";

interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  cancelar: () => void;
}

function CancelarSuccess({
  visible,
  setVisible,
  cancelar,
}: ModalSessionProps) {
  const closeModal = () => {
    setVisible(false);
    cancelar()
    // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
  };

  return (
    <div className="">
      <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[80%] tablet:w-[58rem]  "
        bg="#E9E3DB"
        className="reservacion_modal alertaCard "
      >

        <p className="reservation_p-one">
        La cancelación ha sido confirmada. <br />
        El reembolso se hará efectivo dentro de los próximos 15 días hábiles
        </p>

      </Modal>
    </div>
  );
}

export default CancelarSuccess;
