import React from 'react';
import Modal from '../Modal';

interface RecoveryMensajeModal {
  visible: any;
  closeModal: any;
}

function MensajeRecoveryModal({ visible, closeModal }: RecoveryMensajeModal) {
  return (
    <div>
      <Modal
        visible={visible}
        closeModal={closeModal}
        width='w-[80%] min-h-[43rem] tablet:w-[58rem] '
        className='modal-mensaje-recovery'
      >
        <article className='modal-mensaje-recovery'>
          <h3 >
            Gracias por su solicitud. Por favor, revise su bandeja de correo
            para actualizar su contraseña
          </h3>
        </article>
      </Modal>
    </div>
  );
}

export default MensajeRecoveryModal;
