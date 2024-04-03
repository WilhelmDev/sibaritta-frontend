import React, { useState } from 'react'
import { InputSwitch } from 'primereact/inputswitch'

interface PaymentCardProps {
  name: string
  number: string
  id: any
  isDefault: boolean
  deleteCard: any
  updateDefaultCard: any
}

const PaymentCard = ({
  name,
  number,
  id,
  isDefault,
  deleteCard,
  updateDefaultCard,
}: PaymentCardProps) => {
  const handleSwitchChange = (e: any) => {
    updateDefaultCard(id)
  }

  const lastDigits = number.slice(-4)

  return (
    <div className='paymentCard'>
      <div className='paymentCard-card'>
        <p className='paymentCard-card-name'>{name}</p>
        <p className='paymentCard-card-number'>
          <span>****</span>
          <span>****</span>
          <span>****</span>
          {lastDigits}
        </p>
      </div>
      <div className='paymentCard-options'>
        <p>Usar como pago predeterminado</p>
        <div className='paymentCard-options-btns'>
          <InputSwitch checked={isDefault} onChange={handleSwitchChange} />
          <div
            className='paymentCard-options-btns-delete cursor-pointer'
            onClick={() => deleteCard(id)}
          >
            <i className='icon-delete'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentCard
