import React from "react";
import Modal from "../Modal";
import { IReservacions } from "@/interface/getAllReservationsInterface";

interface ModalSessionProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  card ?: IReservacions;
}

function RestrictionReserva({ visible, setVisible , card }: ModalSessionProps) {
  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = ""; // Restaurar el desplazamiento de la página
  };


  return (
    <div className="grid gap-[1rem] place-items-center ">
      <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[80%] min-h-[43rem] tablet:w-[58rem] "
        bg="#2F2A32"
        className="resttriction_modal"
      >
        <article className=" resttriction_modal_btns ">
          <button className="resttriction_modal_btn_one  ">
            Código de vestimenta
          </button>
          <button className="  resttriction_modal_btn_two">{card?.experience_dress_code || "Formal"}</button>
        </article>

        <article className="resttriction_modal_btns ">
          <button className=" resttriction_modal_btn_one ">
          Duración
          </button>
          <button className="resttriction_modal_btn_two">{card?.experience_duration || "No"} Horas</button>
        </article>

        <article className="resttriction_modal_btns">
          <button className=" resttriction_modal_btn_one ">
            Hora de llegada
          </button>
          <button className="resttriction_modal_btn_two text-[1.2rem] ">
            {card?.experience_checkin || "No"} 
          </button>
        </article>

        <article className="resttriction_modal_btns">
          <button className=" resttriction_modal_btn_one ">
          Rango de edad
          </button>
          <button className="resttriction_modal_btn_two text-[1.2rem] ">
            {card?.experience_age || "Todos"}
          </button>
        </article>

        <article className="resttriction_modal_btns">
          <button className=" resttriction_modal_btn_one ">
          Adicionales
          </button>
          <button className="resttriction_modal_btn_two text-[1.2rem] ">
            {card?.experience_aditionals || "Sin adicionales"}
          </button>
        </article>

        <article className="resttriction_modal_btns">
          <button className=" resttriction_modal_btn_one ">
          Zona de fumadores
          </button>
          <button className="resttriction_modal_btn_two text-[1.2rem] ">
            {card?.experience_smoking_zone || "No"}
          </button>
        </article>

        <button onClick={closeModal} className="resttriction_modal_btn_close">
          Volver
        </button>
      </Modal>
    </div>
  );
}

export default RestrictionReserva;
