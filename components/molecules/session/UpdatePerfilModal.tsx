import React, { useState } from 'react'
import Modal from '../Modal';
import Image from 'next/image';

interface UpdatePerfilModal {
    visible: boolean;
    closeModal: () => void;
    updateUsers?:any;
    setpasswordNew: any;
    handleSubmit?: any
  }



function UpdatePerfilModal({visible,closeModal , setpasswordNew ,updateUsers ,handleSubmit}:UpdatePerfilModal) {

    const [password, setpassword] = useState<boolean>(false)

  return (
    <div>
        <Modal
        visible={visible}
        closeModal={closeModal}
        width="w-[90%] tablet:w-[50%] laptop:w-[30%] min-h-[43rem] py-[3rem]"
        className="modal-cookis-socio"
        >
             <form onSubmit={handleSubmit(updateUsers)} 
             className='conten-box-cookis '>
          <div className='logo-pagina'>
            <Image src={"/home/social/logo.svg"} width={1000} height={1000} alt='logo' className='w-full h-full'/>
          </div>

          <h5 className='w-[60%] m-auto '>Ingresar constraseña actual para procede con la Actualización</h5>

          <div className='conten_box_btns-cookis relative'>
          
          <input onChange={(e:any) => setpasswordNew(e.target.value)} type={`${password ? "text" : "password"}`} placeholder='*********'/>
          <div onClick={() => setpassword(!password)}
          className='absolute w-[3rem] h-[3rem] top-[.3rem] right-10'>
            <Image src={"/profile/password.svg"} width={1000} height={1000} alt='logo' className='w-full h-full cursor-pointer' />
          </div>
          </div>
         

          <div className='conten_box_btns-update-password '>
            <button >Aceptar</button>
          </div>
        </form>

        </Modal>
    </div>
  )
}

export default UpdatePerfilModal