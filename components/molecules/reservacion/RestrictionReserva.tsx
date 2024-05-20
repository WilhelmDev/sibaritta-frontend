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
        width="w-[80%]  tablet:w-[58rem] "
        bg="#2F2A32"
        className="resttriction_modal modalsession__card"
      >
        <div className="tablaRestriciones">
          <table className="table-auto w-full">
            <tr>
              <td>
                Código de vestimenta
              </td>
              <td>
              {card?.experience_dress_code || "Formal"}
              </td>
            </tr>
            <tr>
              <td>
                Duración
              </td>
              <td>
                {card?.experience_duration || "No"} Horas
              </td>
            </tr>
            <tr>
              <td>
                Hora de llegada
              </td>
              <td>
                {card?.experience_checkin || "No"} 
              </td>
            </tr>
            <tr>
              <td>
                Rango de edad
              </td>
              <td>
                {card?.experience_age || "Todos"}
              </td>
            </tr>
            <tr>
              <td>
                Adicionales
              </td>
              <td>
                {card?.experience_aditionals || "Sin adicionales"}
              </td>
            </tr>
            <tr>
              <td>
                Zona de fumadores
              </td>
              <td>
              {card?.experience_smoking_zone || "No"}
              </td>
            </tr>
          </table>
        </div>
        <div className="boton boton--transparente">
          <button onClick={closeModal} className="resttriction_modal_btn_close">
            Volver
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default RestrictionReserva;
