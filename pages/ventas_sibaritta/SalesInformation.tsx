import React from 'react'

// interface SalesInformation{
//     dataImportGeneral?: any;
//     dateComparator:String
//     currency?:any
//   }

const SalesInformation = ({salesData}:any) => {
  return (
    <>
    <div className="sale-total-container movile">
        <div className="sale-total-head-general">
          <p className="sale-total-head-1">Tus Ventas Totales han Sido de</p>
          <p className="sale-total-head-2">{`${salesData?.dateComparator}`} </p>
        </div>
        <p className="sale-total-mid">${(salesData?.dataImportGeneral?.total?salesData?.dataImportGeneral?.total:0)} mxn</p>
        <p className="sale-total-bottom">Después de Comisiones</p>
      </div>
      <div className="sale-total-container-tablet laptop">
      <div className="sale-total-tablet-1">
        <p className="sale-total-tablet-1-1">{`${salesData?.dateComparator}`}</p>
      </div>
      <div className="sale-total-tablet-2">
        <p className="sale-total-tablet-2-1">Tus Ventas Totales han sido de</p>
        <p className="sale-total-tablet-2-2">{salesData?.currency?.currency_symbol}{(salesData?.dataImportGeneral?.total?salesData?.dataImportGeneral?.total:0)} {""} {salesData?.currency?.currency}</p>
        <p className="sale-total-tablet-2-3">Después de Comisiones</p>
      </div>
      <div className="sale-total-tablet-3">
        <p className="sale-total-tablet-3-1">Reservas totales</p>
        <p className="sale-total-tablet-3-2">{(salesData?.dataImportGeneral?.quantity?salesData?.dataImportGeneral?.quantity:0)}</p>
      </div>
      <div className="sale-total-tablet-4">
        <p className="sale-total-tablet-4-1">Nuevos Clientes</p>
        <p className="sale-total-tablet-4-2">{salesData?.dataImportGeneral?.news || 0}</p>
      </div>
    </div>
    </>
  )
}

export default SalesInformation