interface ICardPaymentsSibaritta {}

const CardPaymentsSibaritta = ({}: ICardPaymentsSibaritta) => {
  return (
    <div className={`card-container-render render ? "activate" : ""}`}>
      <div className="sale-especific-1-general-laptop-pay">
        <div className="sale-especific-1-laptop-left-pay">
          <p className="sale-especific-1-laptop-left-pay-1">Fecha del Pago</p>
          <p className="sale-especific-1-laptop-left-pay-2">
            17 de Octubre 2023
          </p>
        </div>
        <div className="sale-especific-1-laptop-rigth-pay">
          <p className="sale-especific-1-laptop-rigth-1-pay">{`Pago #paymentCounter`}</p>
          <p className="sale-especific-2-laptop-rigth-2-pay">{` - $`}</p>
        </div>
      </div>
      <div className="sale-especific-2-general-pay ">
        <div className="sale-especific-pay-bill-pay-3 sale-especific-pay-comision">
          <div className="sale-especific-2-bill sale-especific-2">
            <p className="text-left-bill">Factura Electrónica:</p>
            <button className="text-right-bill">Descargar</button>
          </div>
          <div className="sale-especific-2-voucher sale-especific-2">
            <p className="text-left-voucher">Comprobante de pago:</p>
            <button className="text-right-voucher">Descargar</button>
          </div>
        </div>
        <div className="sale-especific-pay-comision-pay-1 sale-especific-pay-comision">
          <div className="sale-especific-2-pay sale-especific-2">
            <p className="text-left-pay">Pago:</p>
            <p
              className={`text-right-pay estadoPago == "Pagado" ? "paid" : "" `}
            >
              estadoPago
            </p>
          </div>
          <div className="sale-especific-2-pay-method sale-especific-2">
            <p className="text-left-pay-method">Método de Pago:</p>
            <p className="text-right-pay-method">MetodoDePago </p>
          </div>
        </div>
        <div className="sale-especific-pay-comision-pay-2 sale-especific-pay-comision">
          <div className="sale-especific-2-commission sale-especific-2">
            <p className="text-left-commission">Total comisión:</p>
            <p className="text-right-commission">$TotalComision</p>
          </div>
          <div className="sale-especific-2-total sale-especific-2">
            <p className="text-left-total">Total:</p>
            <p className="text-right-total">$total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentsSibaritta;
