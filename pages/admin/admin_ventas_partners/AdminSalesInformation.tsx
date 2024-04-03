import React from "react";



const AdminSalesInformation = ({adminSalesData} :any) => {
  return (
    <>
      <div className="sale-total-container movile">
        <div className="sale-total-head-general">
          <p className="sale-total-head-1">Tus Ventas Totales han Sido de</p>
          <p className="sale-total-head-2">{`${adminSalesData?.dateComparator}`} </p>
        </div>
        <p className="sale-total-mid">
          ${adminSalesData?.dataImportGeneral?.total ? adminSalesData?.dataImportGeneral?.total : 0} mxn
        </p>
        <p className="sale-total-bottom">Después de Comisiones</p>
      </div>
      <div className="sale-total-container-tablet laptop">
      <div className="sale-total-tablet-1">
        <p className="sale-total-tablet-1-1">{`${adminSalesData?.dateComparator}`}</p>
      </div>
      <div className="sale-total-tablet-2">
        <p className="sale-total-tablet-2-1">Tus Ventas Totales han sido de</p>
        <p className="sale-total-tablet-2-2">{adminSalesData?.currency?.currency_symbol}{(adminSalesData?.dataImportGeneral?.total?adminSalesData?.dataImportGeneral?.total:0)} {adminSalesData?.currency?.currency}</p>
        <p className="sale-total-tablet-2-3">Después de Comisiones</p>
      </div>
      <div className="sale-total-tablet-3">
        <p className="sale-total-tablet-3-1">Comisión Sibarita</p>
        <p className="sale-total-tablet-3-2">{adminSalesData?.currency?.currency_symbol}{(adminSalesData?.dataImportGeneral?.commission?adminSalesData?.dataImportGeneral?.commission:0)} {adminSalesData?.currency?.currency}</p>
      </div>

      <div className="sale-total-tablet-3">
        <p className="sale-total-tablet-3-1">Reservas totales</p>
        <p className="sale-total-tablet-3-2">{(adminSalesData?.dataImportGeneral?.quantity?adminSalesData?.dataImportGeneral?.quantity:0)}</p>
      </div>
      <div className="sale-total-tablet-4">
        <p className="sale-total-tablet-4-1">Nuevos Clientes</p>
        <p className="sale-total-tablet-4-2">{adminSalesData?.dataImportGeneral?.news || 0}</p>
      </div>
    </div>
    </>
  );
};

export default AdminSalesInformation;
