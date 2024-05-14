import React from 'react'
import Modal from '../molecules/Modal';
import Image from 'next/image';

interface CookisModal {
    visible: boolean;
    closeModal: () => void;
  }

function CookisModal( {visible,closeModal}:CookisModal) {
  const confirmCokkis = () => {
    localStorage.setItem("cookis", "true")
    closeModal()
  }
  return (
    <div>
        <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[90%] tablet:w-[50%] laptop:w-[30%] min-h-[43rem] py-[3rem]"
        className="modal-cookis-socio"
        >
        <div className='conten-box-cookis '>
          <div className='logo-pagina'>
            <Image src={"/logo.png"} width={1000} height={1000} alt='logo' className='w-full h-full'/>
          </div>

          <h5 className='w-[70%] m-auto '>Utilizamos cookies para asegurarnos de brindarte la mejor experiencia en nuestro sitio web. Para obtener más información, consulta nuestra <span className='underline'>política de cookies</span></h5>

          <div className='conten_box_btns-cookis '>
            <button onClick={confirmCokkis}>Aceptar</button>
          </div>
        </div>
        </Modal>
    </div>
  )
}

export default CookisModal