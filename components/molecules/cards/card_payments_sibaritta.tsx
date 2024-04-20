import { Payment } from "@/services/payment.service";
import moment from "moment";
import { Dispatch, SetStateAction } from "react";

const CardPaymentsSibaritta = ({ payment, index, typeUser, setPaymentsToShow, setDataPayments }: { payment: Payment, index: number, typeUser: number, setPaymentsToShow: Dispatch<SetStateAction<Payment[]>>, setDataPayments: Dispatch<SetStateAction<Payment[]>> }) => {
  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function capitalizeMonth(dateString: string) {
    let words = dateString.split(' ');
    words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    return words.join(' ');
  }
  function downloadFile(file: Blob, fileName: string) {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(file)
    a.download = `${fileName}`
    a.click()
  }

  return (
    <div className={`card-container-render render ? "activate" : ""}`}>
      <div className="sale-especific-1-general-laptop-pay">
        <div className="sale-especific-1-laptop-left-pay">
          <p className="sale-especific-1-laptop-left-pay-1">Fecha del Pago</p>
          <p className="sale-especific-1-laptop-left-pay-2">
            {payment.payment_date ? capitalizeMonth(moment(payment.payment_date).utc().format("DD MMMM YYYY")) : ""}
          </p>
        </div>
        <div className="sale-especific-1-laptop-rigth-pay">
          <p className="sale-especific-1-laptop-rigth-1-pay">{`Pago #${index}`}</p>
          <p className="sale-especific-2-laptop-rigth-2-pay">
            {`${capitalizeMonth(moment(payment.payment_period_start_date).utc().format("DD MMMM YYYY"))} 
            - 
            ${capitalizeMonth(moment(payment.payment_period_end_date).utc().format("DD MMMM YYYY"))}`}
          </p>
        </div>
      </div>
      <div className="sale-especific-2-general-pay ">
        <div className="sale-especific-pay-bill-pay-3 sale-especific-pay-comision">
          <div className="sale-especific-2-bill sale-especific-2">
            <p className="text-left-bill">Factura Electrónica:</p>
            {
              payment.invoice_file_path ?
              <button className="text-right-bill" onClick={async () => {
                const response = await fetch(`${payment.invoice_file_path}`);
                const data = await response.blob();
                downloadFile(data, `factura_${moment(payment.invoicing_date).utc().format("DD_MM_YYYY")}`);
              }}>Descargar</button>
              :
              typeUser === 2 ?
              <button className="text-right-bill">Adjuntar</button>
              :
              <p className="text-right-bill">No disponible</p>
            }
          </div>
          <div className="sale-especific-2-voucher sale-especific-2">
            {
              (!payment.receipt_file_path && typeUser === 3) ?
              <button>Pagar</button>
              :
              <>
                <p className="text-left-voucher">Comprobante de pago:</p>
                {payment.receipt_file_path ?
                  <button className="text-right-voucher" onClick={async () => {
                    const response = await fetch(`${payment.receipt_file_path}`);
                    const data = await response.blob();
                    downloadFile(data, `comprobante_pago_${moment(payment.payment_date).utc().format("DD_MM_YYYY")}`);
                  }}>Descargar</button>
                  : typeUser === 2 ?
                  <button className="text-right-voucher">Pendiente</button>
                  :
                  <p className="text-right-voucher">No disponible</p>
                }
              </>
              }
          </div>
        </div>
        <div className="sale-especific-pay-comision-pay-1 sale-especific-pay-comision">
          <div className="sale-especific-2-pay sale-especific-2">
            <p className="text-left-pay">Pago:</p>
            <p className={`text-right-pay estadoPago == "Pagado" ? "paid" : "" `}>{payment.status ? "Pagado" : "Pendiente"}</p>
          </div>
          <div className="sale-especific-2-pay-method sale-especific-2">
            <p className="text-left-pay-method">Método de Pago:</p>
            <p className="text-right-pay-method">{payment.payment_method? capitalize(payment.payment_method) : ""}</p>
          </div>
        </div>
        <div className="sale-especific-pay-comision-pay-2 sale-especific-pay-comision">
          {typeUser === 3 && <div className="sale-especific-2-commission sale-especific-2">
            <p className="text-left-commission">Total comisión:</p>
            <p className="text-right-commission">${payment.commission}</p>
          </div>}
          <div className="sale-especific-2-total sale-especific-2">
            <p className="text-left-total">Total:</p>
            <p className="text-right-total">${payment.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentsSibaritta;
