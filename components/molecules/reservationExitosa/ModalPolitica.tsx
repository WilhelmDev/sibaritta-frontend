import React from "react";
import Modal from "../Modal";
import { useAppSelector } from "@/redux/hook";

interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalPolitica({ visible, setVisible }: ModalSessionProps) {
  const politica = useAppSelector((state) => state.police);
  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
  };
  return (
    <div>
      <Modal
        visible={visible}
        closeModal={closeModal}
        bg="#2F2A32"
        className="politica-modal"
      >
        <div className="conten-politica">
          <h2>Politicas del restaurante</h2>
          <p>
            {politica.politice ||
              "las politicas son buenas y tiene que respetarlas"}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPolitica;
