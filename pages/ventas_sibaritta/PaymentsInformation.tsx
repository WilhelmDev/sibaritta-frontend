import React from 'react'

interface PaymentsInformation{
    dateComparator:String
    }

const PaymentsInformation = ({dateComparator}:PaymentsInformation) => {
  return (
    <>
    <div className="sale-total-container">
        <div className="sale-total-head-general">
          <p className="sale-total-head-1">Tus Pagos Totales han Sido de</p>
          <p className="sale-total-head-2">1 - 31 Diciembre - 2023</p>
        </div>
        <p className="sale-total-mid">$25.780 mxn</p>
        <p className="sale-total-bottom">Después de Comisiones</p>
      </div>
      <div className="sale-total-container-tablet">
        <div className="sale-total-tablet-1-pay">
          <p className="sale-total-tablet-1-1-pay">Total pagos Facturados</p>
        </div>
        <div className="sale-total-tablet-2">
          <p className="sale-total-tablet-2-1-pay">{}</p>
          <p className="sale-total-tablet-2-2-pay">Después de Comisiones</p>
        </div>

        <p className="sale-total-tablet-3-pay">{`${dateComparator}`} </p>

      </div>
    </>
  )
}

export default PaymentsInformation