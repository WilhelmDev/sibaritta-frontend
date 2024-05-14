import React from "react";



const AdminSalesInformation = ({adminSalesData, status} :any) => {
  return (
    <>
      <div className="sale-total-container movile">
        <div className="sale-total-head-general">
          <p className="sale-total-head-1">
            { status === 'cancelled'
              ? 'Total reembolsado'
              : 'Tus Ventas Totales han Sido de'
            }
          </p>
          <p className="sale-total-head-2">{`${adminSalesData?.dateComparator}`} </p>
        </div>
        <p className="sale-total-mid">
          ${adminSalesData?.dataImportGeneral?.total ? adminSalesData?.dataImportGeneral?.total : 0} mxn
        </p>
        <p className="sale-total-bottom">Después de Comisiones</p>
      </div>
      <div className="sale-total-container-tablet laptop block">
        <div className="sale-total-tablet-1">
          <p className="sale-total-tablet-1-1">{`${adminSalesData?.dateComparator}`}</p>
        </div>
        <div className="ventasCard">
          <div className="sale-total-tablet-2 ss">
            <p className="sale-total-tablet-2-1">
              { status === 'cancelled'
                ? 'Total reembolsado'
                : 'Ventas Totales'
              }
            </p>
            <h4 className="sale-total-tablet-2-2">
              {adminSalesData?.currency?.currency_symbol}
              { status === 'cancelled'
                ? (adminSalesData?.dataImportGeneral?.total_refounded || 0 )
                : (adminSalesData?.dataImportGeneral?.total_sells || 0 )
              }
              {adminSalesData?.currency?.currency}</h4>
            {/* <p className="sale-total-tablet-2-3"></p> */}
          </div>
        {
          status === 'cancelled'
          ? (
            <>
              <div className="sale-total-tablet-2">
                <p className="sale-total-tablet-2-1">Reservas Canceladas</p>
                <p className="sale-total-tablet-2-2">{adminSalesData?.countCancelled}</p>
              </div>
              <div className="sale-total-tablet-3">
                <p className="sale-total-tablet-3-1">Reservas Reembolsadas</p>
                <h4 className="sale-total-tablet-3-2">{adminSalesData?.refounded}</h4>
              </div>
            </>
          )
          : (
            <>

              <div className="sale-total-tablet-3">
                <p className="sale-total-tablet-3-1">Ganancia Sibarita</p>
                <h4 className="sale-total-tablet-3-2">{adminSalesData?.currency?.currency_symbol}{(adminSalesData?.dataImportGeneral?.commission? adminSalesData?.dataImportGeneral?.commission: 0)} {adminSalesData?.currency?.currency}</h4>
              </div>
              <div className="sale-total-tablet-3">
                <p className="sale-total-tablet-3-1">Reservas totales</p>
                <h4 className="sale-total-tablet-3-2">{(adminSalesData?.dataImportGeneral?.quantity?adminSalesData?.dataImportGeneral?.quantity:0)}</h4>
              </div>
              <div className="sale-total-tablet-3">
                <p className="sale-total-tablet-3-1">Nuevos Clientes</p>
                <h4 className="sale-total-tablet-3-2">{adminSalesData?.dataImportGeneral?.news || 0}</h4>
              </div>
              <div className="sale-total-tablet-3">
                <p className="sale-total-tablet-3-1">Reservas Canceladas</p>
                <h4 className="sale-total-tablet-3-2">{adminSalesData?.countCancelled}</h4>
              </div>
            </>
          )
      }
      </div>
    </div>
    </>
  );
};

export default AdminSalesInformation;
