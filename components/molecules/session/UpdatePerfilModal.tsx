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
        width="w-[100%] "
        className="alertaCard  cambiarContrasena"
        >
          {/* <div className='formRegister__campos'>
            <form onSubmit={handleSubmit(updateUsers)} 
              className='conten-box-cookis '>
              <div className=''>
                <svg className="m-auto" width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9339 0C21.1692 0 20.5518 0.705678 20.5518 1.5796C20.5518 2.45352 21.1692 3.15919 21.9339 3.15919C22.6986 3.15919 23.3161 2.45352 23.3161 1.5796C23.3161 0.705678 22.6986 0 21.9339 0Z" fill="#100A11"></path><path d="M26.9274 0.270298C26.8825 0.270298 26.8416 0.265625 26.8048 0.265625C26.7843 0.265625 26.7639 0.270298 26.7475 0.270298H26.7393C26.2159 0.312359 25.7988 0.803062 25.7988 1.4106C25.7988 2.01814 26.2159 2.51351 26.7393 2.5509H26.7802C26.7884 2.5509 26.7966 2.5509 26.8048 2.5509C26.8211 2.5509 26.8416 2.5509 26.862 2.5509H29.1929V37.4609H31.5605V2.55557H43.0798V0.270298H26.9274Z" fill="#100A11"></path><path d="M16.7493 0.270298H16.7412C16.7207 0.270298 16.7003 0.265625 16.6839 0.265625C16.6471 0.265625 16.6062 0.265625 16.5572 0.270298H0V2.55557H11.5152V37.4656H13.8828V2.55557H16.6226C16.6226 2.55557 16.6635 2.55557 16.6798 2.55557C16.688 2.55557 16.6962 2.55557 16.7044 2.55557H16.7453C17.2687 2.51351 17.6858 2.01814 17.6858 1.4106C17.6858 0.803062 17.2687 0.307685 16.7453 0.270298H16.7493Z" fill="#100A11"></path></svg>
              </div>
              <div className='formRegister__titulo'>
                <h5>Ingresar constraseña actual para procede con la Actualización</h5>
              </div>
              <div className='contenedorInput lg:flex gap-[1.5rem] contenedorInput relative'>
                
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

          </div> */}
          <div className="modalsession">
            <div className="h-lvh modalsession__card w-[60%] tablet:w-[50rem]  m-auto">
              {/* <article className="recovery_img"></article> */}
              <div className='alertaCard__card !bg-[#E2D5C4] modalsession__card'>
                  <div>
                      <svg className="m-auto" width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.9339 0C21.1692 0 20.5518 0.705678 20.5518 1.5796C20.5518 2.45352 21.1692 3.15919 21.9339 3.15919C22.6986 3.15919 23.3161 2.45352 23.3161 1.5796C23.3161 0.705678 22.6986 0 21.9339 0Z" fill="#100A11"/>
                      <path d="M26.9274 0.270298C26.8825 0.270298 26.8416 0.265625 26.8048 0.265625C26.7843 0.265625 26.7639 0.270298 26.7475 0.270298H26.7393C26.2159 0.312359 25.7988 0.803062 25.7988 1.4106C25.7988 2.01814 26.2159 2.51351 26.7393 2.5509H26.7802C26.7884 2.5509 26.7966 2.5509 26.8048 2.5509C26.8211 2.5509 26.8416 2.5509 26.862 2.5509H29.1929V37.4609H31.5605V2.55557H43.0798V0.270298H26.9274Z" fill="#100A11"/>
                      <path d="M16.7493 0.270298H16.7412C16.7207 0.270298 16.7003 0.265625 16.6839 0.265625C16.6471 0.265625 16.6062 0.265625 16.5572 0.270298H0V2.55557H11.5152V37.4656H13.8828V2.55557H16.6226C16.6226 2.55557 16.6635 2.55557 16.6798 2.55557C16.688 2.55557 16.6962 2.55557 16.7044 2.55557H16.7453C17.2687 2.51351 17.6858 2.01814 17.6858 1.4106C17.6858 0.803062 17.2687 0.307685 16.7453 0.270298H16.7493Z" fill="#100A11"/>
                      </svg>
                  </div>
                  <div className="formRegister__titulo mt-4">
                    <h5>Ingresar constraseña actual para proceder con la Actualización</h5>
                  </div>
                  <div className="formRegister__campos">
                    <div className="contenedorInput">
                      <form onSubmit={handleSubmit(updateUsers)}  className=" ">
                        <div className="  ">
                          <div className="contenedorInput lg:flex gap-[1.5rem] ">
                            <input  onChange={(e:any) => setpasswordNew(e.target.value)} type={`${password ? "text" : "password"}`} placeholder='*********'
                              className="profile-input  h-[4rem] bg-[#E9E3DB]"
                              id="password"
                             
                            />
                         
                          </div>
                        </div>
                        <div className="w-full pt-[1rem] boton boton--transparente mt-5 ">
                          <button className="modalSession-button w-full m-auto">
                            Guardar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default UpdatePerfilModal