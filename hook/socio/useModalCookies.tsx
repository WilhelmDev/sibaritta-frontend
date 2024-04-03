import React, { useState } from 'react'

export const  useModalCookies = ()  => {
  const [cookiesModal, setcookies] = useState<boolean>(false)

  const closeModal = () => {
    setcookies(false)
  }
  const openModalCookis = () => {
    setcookies(true)
  }

  return {cookiesModal , closeModal , openModalCookis}


}


export default  useModalCookies