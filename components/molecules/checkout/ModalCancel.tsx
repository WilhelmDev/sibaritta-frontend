import React from "react";
import Modal from "../Modal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/hook";
import {
  addSugerencia,
  resetReservation,
  setEventId,
  setExperiencieId,
  setFecha,
  setHorario,
  setNameExperience,
  setPersonas,
  setPriceExperience,
  setTipoReserva,
} from "@/redux/slice/detalle.slice";
import { updateDates } from "@/redux/slice/clockSlice";

interface ModalCancelProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCancel = ({ visible, setVisible }: ModalCancelProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = "";
  };

  const toGoHome = () => {
    router.push("/");
    closeModal();
    // dispatch(setNameExperience(""));
    // dispatch(setPriceExperience(""));
    // dispatch(setPersonas(""));
    // dispatch(setTipoReserva(""));
    // dispatch(setFecha(""));
    // dispatch(setHorario(""));
    // dispatch(setExperiencieId(""));
    // dispatch(setEventId(""));
    dispatch(resetReservation());
    dispatch(
      updateDates({
        startDate: "",
        startTime: "",
        idReservation: 0,
        order_code: "",
        order_number: "",
      })
    );
    localStorage.removeItem("reservation");
    localStorage.removeItem("Stripe");
  };

  return (
    <div className="">
      <Modal
        visible={visible}
        closeModal={closeModal}
        className="modal-bebida-checkout modal-cancel tablet:w-[50rem] laptop:w-[70rem]"
      >
        <div className="modal-cancel-container">
          {" "}
          <h2 className="modal-cancel-h2">El tiempo para convervar tu reservación  se ha terminado.
          Por favor  vuelve a iniciar el proceso nuevamente.</h2>
          
          <button
            className="p-[1rem] bg-[#4D3452] rounded-md"
            onClick={toGoHome}
          >
            Ir al inicio
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCancel;
