import React from 'react'
import Modal from '../Modal';

interface ModalSessionProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }



function ModalRestricciones({ visible, setVisible }: ModalSessionProps) {

    const restricciones = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum non, tenetur maiores esse alias laudantium ipsa porro doloremque quasi iste vero assumenda dolore laboriosam accusantium quos natus ullam quae dolorem?"

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
        className="restricciones-modal"
      >

<div className="conten-restricciones">
          <h2>Politicas del restaurante</h2>
          <p>
            {restricciones ||
              "las restricciones "}
          </p>
          <p></p>
        </div>
      </Modal>
    </div>
  )
}

export default ModalRestricciones