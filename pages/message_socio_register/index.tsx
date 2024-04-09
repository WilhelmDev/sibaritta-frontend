import Image from 'next/image'
import React from 'react'

function index() {
  return (
    <div className='container-general  graciasGeneral'>
      <div className="graciasGeneral__card">
        <div className='socio-register-message-box '>

          <div className='box-content-register-message '>
            <Image src={"/home/social/logo.svg"} width={1000} height={1000} alt='logo'/>
          </div>
          <p>Estimado socio/a</p>
          <p>Es un placer darte la Bienvenida como Socio Sibaritta </p>
          <p>
            Hemos  enviado un correo  electrónico  a tu cuenta.
          </p>
          <p>Necesitamos que lo abras y hagas clic  en el enlace para validar tu cuenta</p>

        </div>
      </div>
    </div>
  )
}

export default index
