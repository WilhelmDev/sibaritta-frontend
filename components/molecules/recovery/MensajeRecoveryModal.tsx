import React from 'react';
import Modal from '../Modal';
import Image from 'next/image';

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
        width='w-[40%] tablet:w-[40rem]  '
        className='alertaCard'
      >
        <div className='alertaCard__card'>
          <Image src={"/alerta.png"} width={66} height={61} className='m-auto' alt='logo' data-aos="fade-left" data-aos-duration="3000"/>
          <p className="title-alert uppercase">Gracias por su solicitud. <br/><br/>Por favor, revise su bandeja de correo
            para actualizar su contraseña</p>
        </div>

      </Modal>
    </div>
  );
}

export default MensajeRecoveryModal;
