import React from 'react'

interface History {
  experiencia: string
  bebida: string
  cargo: string
  total: string
  personas: string
  fecha: string
  fechaPago: string
  metodo: string
}

interface PaymentHistoryCard {
  history: History
}

const PaymentHistoryCard = ({ history }: PaymentHistoryCard) => {
  return (
    <div className='paymentHistoryCard'>
      <h3 className='paymentHistoryCard-title'>Titulo de la experiencia</h3>
      <h4 className='paymentHistoryCard-subtitle'>Ciudad</h4>
      <div className='paymentHistoryCard-content'>
        <div className='paymentHistoryCard-content-field'>
          <h5>Experiencia</h5>
          <p>{history.experiencia}</p>
        </div>

        <div className='paymentHistoryCard-content-field'>
          <h5>Bebida extra</h5>
          <p>{history.bebida}</p>
        </div>

        <div className='paymentHistoryCard-content-field'>
          <h5>Cargo de servicio</h5>
          <p>{history.cargo}</p>
        </div>

        <div className='paymentHistoryCard-content-field'>
          <h5>Total</h5>
          <p>{history.total}</p>
        </div>

        <div className='paymentHistoryCard-content-field'>
          <h5>Nº de personas</h5>
          <p>{history.personas}</p>
        </div>

        <div className='paymentHistoryCard-content-field'>
          <h5>20 de diciembre de 2023</h5>
          <p>{history.fecha}</p>
        </div>

        <div className='paymentHistoryCard-content-field'>
          <h5>Fecha y hora del pago</h5>
          <p>{history.fechaPago}</p>
        </div>

        <div className='paymentHistoryCard-content-field'>
          <h5>Método de pago</h5>
          <p>{history.metodo}</p>
        </div>
      </div>
      <button>Calificar experiencia</button>
    </div>
  )
}

export default PaymentHistoryCard
