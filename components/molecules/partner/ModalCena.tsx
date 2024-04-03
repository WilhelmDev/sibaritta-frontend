import React, { useEffect, useState } from "react";
import Modal from "../Modal";

interface ModalSessionProps {
  visible1: boolean;
  setVisible1: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalCena({ visible1, setVisible1 }: ModalSessionProps) {
  const closeModal = () => {
    setVisible1(false);
    // document.body.style.overflow = "";
  };

  return (
    <div>
      <Modal
        visible={visible1}
        closeModal={closeModal}
        width="w-[100%]   "
        bg="#2F2A32"
        className="initail_reservation"
        
      >
        <div className="content-invitados">
          <div className="content-invitados_head">Agregar invitados</div>
          <div className="content-invitados_body">
            <div className="invitados_body-icon">icon</div>
            <div className="invitados_body-action">
              <span className="body-action_text">Número de personas</span>
              <div className="body-action_content">
                <button>-</button>
                <input type="text" value={12} />
                <button>+</button>
              </div>
              <div>Quedan 2 cupos para este día en este horario</div>
            </div>
            <div className="invitaos_bodu-footer">
              <button>Cancelar</button>
              <button>Guardar</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalCena;
