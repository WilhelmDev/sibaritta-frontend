import React, { useState } from "react";
import Modal from "../Modal";
import AddUserModals from "./AddUserModals";
interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function AgregarInvitado({ visible, setVisible }: ModalSessionProps) {
  const [addUser, setAddUser] = useState<boolean>(false);
  const openModalAdd = () => {
    setAddUser(true);
    setVisible(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
  };
  return (
    <section className=" ">
      <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[80%] tablet:w-[58rem]  "
        bg="#2F2A32"
        className="add_invitado_modal"
      >
        <article className="add_container">
          <div className="add_container_p">
            Se aceptan modificaciones solo hasta 12 horas antes de la hora
            programada.
          </div>
          <div className="add_container_p">
            La modificación está sujeta a aprobación, solo si aumenta el número
            de personas.
          </div>
          <article className="add_container_btns">
            <button onClick={openModalAdd} className="add_container_btns_one ">
              Modificar reservación
            </button>
            <button onClick={closeModal} className=" add_container_btns_two">
              Volver
            </button>
          </article>
        </article>
      </Modal>
      <AddUserModals visible={addUser} setVisible={setAddUser} />
    </section>
  );
}

export default AgregarInvitado;
