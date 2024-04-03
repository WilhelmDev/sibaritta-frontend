import React, { SetStateAction } from "react";
import Modal from "../Modal";
interface ModalPropinaProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  own: number;
  setOwn: (arg: SetStateAction<number>) => void;
}

function ModalPropina({ visible, setVisible, own, setOwn }: ModalPropinaProps) {
  const closeModal = () => {
    setVisible(false);
    // document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <Modal
        visible={visible}
        closeModal={closeModal}
        className="modal-own_box tablet:w-[45rem] laptop:w-[48rem]"
      >
        <div className="box-own_">
          <h2>Propina</h2>
          <section className="modal-checkout-add-bebida">
            <p>Cantidad</p>
            <article className="modal-add-checkout-bebida">
              <div
                onClick={() => setOwn(own <= 0 ? 0 : own - 1)}
                className="modal-minus-checkout_"
              >
                -
              </div>
              <h3 className="modal-amount-checkout-_">{own}</h3>
              <div
                onClick={() => setOwn(own + 1)}
                className="modal-update-_-checkout"
              >
                +
              </div>
            </article>
          </section>
          <section className="modal-btn-checkout-_">
            <button onClick={closeModal} className="modal-cancel-checkout-">
              Cancelar
            </button>
            <button onClick={closeModal} className="modal-keep-checkout-">
              Guardar
            </button>
          </section>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPropina;
