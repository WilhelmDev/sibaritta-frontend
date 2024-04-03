import React, { useState } from "react";
import Modal from "../Modal";
import { Rating } from "primereact/rating";
import { createCalificationSocio } from "@/services/calificacion.service";
import { IReservacions } from "@/interface/getAllReservationsInterface";
interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  card: IReservacions;
}

function ExperienceModal({ visible, setVisible, card }: ModalSessionProps) {
  const [value, setValue] = useState<number | undefined>(1);
  const [areaText, setareaText] = useState<string>("");

  const createCalification = async () => {
    try {
      const userlogin = localStorage.getItem("userid");
      const socio = {
        message: areaText,
        ranking: value,
        fk_reservation_id: card.id,
        fk_user_id: userlogin,
      };
      const data = await createCalificationSocio(socio);
    } catch (error) {
      console.log(error);
    }
    closeModal();
    setareaText("");
    setValue(1);
  };

  const captuAre = (e: any) => {
    setareaText(e.target.value);
  };

  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
  };

  return (
    <section>
      <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[90%] tablet:w-[58rem]  "
        bg="#2F2A32"
        className="experiencie_user"
      >
        <article className="experiencie_user_container">
          <div className="experiencie_user_fields">
            <p className="experiencie_user_p">¿Cuéntanos cómo te fue?</p>
            <textarea
              value={areaText}
              onChange={captuAre}
              placeholder="Escribe aquí..."
              className="experiencie_user_area"
              cols={5}
              rows={5}
            ></textarea>
          </div>

          <div className="experiencie_user_stars">
            <p className="experiencie_user_stars_p">Califica tu experiencia</p>
            <Rating
              value={value ?? undefined}
              onChange={(e) => setValue(e.value as number | undefined)}
              cancel={false}
            />
          </div>

          <div className="experiencie_user_btns">
            <button onClick={closeModal} className="experiencie_user_btns_one">
              Volver
            </button>
            <button
              onClick={createCalification}
              className="experiencie_user_btns_two"
            >
              Calificar
            </button>
          </div>
        </article>
      </Modal>
    </section>
  );
}

export default ExperienceModal;
