import React, { useEffect, useRef, useState } from 'react';
import Modal from '../Modal';
import { setTimeout } from 'timers';

interface ModalSessionProps {
  closeModalConfirmacion: () => void;
  openConfirmacion: boolean;
}

const ModalConfirmation = ({
  closeModalConfirmacion,
  openConfirmacion,
}: ModalSessionProps) => {
  setTimeout(() => {
    closeModalConfirmacion();
  }, 9000);

  return (
    <div>
      <Modal
        visible={openConfirmacion}
        closeModal={closeModalConfirmacion}
        width='w-[90%] tablet:w-[55%]  laptop:w-[30%] laptop:!px-[5rem]'
        className='ModalRegisters'
      >
        <div className='modal_box '>
          <h2 className='ModalConfirmation-title'>Confirma tu email</h2>
          <p>
            Gracias por su registro. Por favor, revise su bandeja de correo para
            confirmar su cuenta
          </p>
          <p>
            ¿No has recibido un correo electrónico en 5 minutos? Permítanos
            ayudarle mediante <span>whatsapp</span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ModalConfirmation;
