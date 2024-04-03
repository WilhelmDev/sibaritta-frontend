import React, { useState } from "react";
import Modal from "../Modal";
import Image from "next/image";

interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddUserModals({ visible, setVisible }: ModalSessionProps) {
  const [Invitados, setInvitados] = useState<number>(1);

  const addUser = () => {
    Invitados === 10 ? setInvitados(10) : setInvitados(Invitados + 1);
  };
  const addMinusUser = () => {
    Invitados === 1 ? setInvitados(1) : setInvitados(Invitados - 1);
  };

  const closeModal = () => {
    setVisible(false);
    setInvitados(1);
    // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
  };

  return (
    <section>
      <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[80%] tablet:w-[58rem]  "
        bg="#2F2A32"
        className="add_user"
      >
        <div className="add_user_modal_add">
          <Image
            src={"/profile/reservaciones/modal/alert.png"}
            alt="alerta"
            width={70}
            height={70}
          />

          <article className="add_user_update_modal">
            <div className="add_user_img">
              <Image src={"/Users.png"} alt="alerta" width={50} height={50} />
            </div>

            <div className="add_user_amount ">
              <div className="add_user_amount_person">Número de Personas</div>
              <div className="add_user_increment ">
                <div
                  onClick={addMinusUser}
                  className={`add_user_increment_less cursor-pointer ${
                    Invitados === 1 && "cursor-none opacity-[0.3]"
                  }`}
                >
                  <Image
                    src={"/minus.png"}
                    width={100}
                    height={100}
                    alt="min"
                  />
                </div>
                <div className="add_user_increment_number">{Invitados}</div>
                <button
                  onClick={addUser}
                  className={`add_user_increment_further__ cursor-pointer ${
                    Invitados === 10 && "cursor-none opacity-[0.3]"
                  }`}
                >
                  <Image src={"/plus.png"} width={100} height={100} alt="min" />
                </button>
              </div>
            </div>
          </article>

          <article className="add_user_p text-center ">
            {Invitados === 10 ? (
              <p>Ya no Quedan cupos para este día en este horario</p>
            ) : (
              <p>Quedan 10 cupos para este día en este horario</p>
            )}
          </article>

          <article className="add_user_btns ">
            <button onClick={closeModal} className="add_user_one">
              Guardar cupos
            </button>
            <button onClick={closeModal} className="add_user_two">
              CANCELAR
            </button>
          </article>
        </div>
      </Modal>
    </section>
  );
}

export default AddUserModals;
