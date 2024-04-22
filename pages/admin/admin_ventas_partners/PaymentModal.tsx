import { Payment, uploadReceipt } from "@/services/payment.service";
import moment from "moment";
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

function PaymentModal({
  setPaymentModal,
  payment,
  setPaymentsToShow,
  setDataPayments,
}: {
  setPaymentModal: Dispatch<SetStateAction<Boolean>>;
  payment: Payment;
  setPaymentsToShow: Dispatch<SetStateAction<Payment[]>>;
  setDataPayments: Dispatch<SetStateAction<Payment[]>>;
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [receiptFile, setReceiptFile] = useState<File>();

  const capitalizeMonth = (dateString: string) => {
    let words = dateString.split(" ");
    words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    return words.join(" ");
  };

  const confirmPayment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!receiptFile) return;
    const maxMb = process.env.MAX_SIZE_FILES_UPLOAD
      ? parseFloat(process.env.MAX_SIZE_FILES_UPLOAD)
      : 1;
    const maxSize = maxMb * 1024 * 1024;
    if (receiptFile.size > maxSize) {
      alert(
        `El archivo es muy pesado para subirlo, el tamaño máximo es de ${maxMb}MB.`
      );
      return;
    }

    setIsUploading(true);
    try {
      const paymentId = payment.id;
      const paymentWithReceipt = await uploadReceipt(
        paymentId,
        paymentMethod,
        receiptFile
      );
      if (paymentWithReceipt) {
        setPaymentsToShow((prevPayments) =>
          prevPayments.map((item) =>
            paymentId === item.id ? paymentWithReceipt : item
          )
        );
        setDataPayments((prevPayments) =>
          prevPayments.map((item) =>
            paymentId === item.id ? paymentWithReceipt : item
          )
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-between p-4 align-bottom bg-white rounded-lg h-[400px] w-[400px] text-black text-2xl">
          <p>Está a punto de confirmar el pago</p>
          <h2>{payment.amount}MXN</h2>
          <h3>{`${capitalizeMonth(
            moment(payment.payment_period_start_date)
              .utc()
              .format("DD MMMM YYYY")
          )} 
            - 
            ${capitalizeMonth(
              moment(payment.payment_period_end_date)
                .utc()
                .format("DD MMMM YYYY")
            )}`}</h3>
          <form action="" onSubmit={confirmPayment}>
            <select
              name=""
              id=""
              required
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            >
              <option value="">Selecciona un metodo de pago</option>
              <option value="transferencia">Transferencia</option>
              <option value="efectivo">Efectivo</option>
            </select>
            <input
              type="file"
              id="receiptUpload"
              accept="application/pdf,image/jpeg,image/jpg,image/png"
              onChange={(e) => {
                if (e.target.files) setReceiptFile(e.target.files[0]);
              }}
              style={{ display: "none" }}
              disabled={isUploading}
              required
            />
            <label
              htmlFor="receiptUpload"
              className={`text-3xl ${
                isUploading ? "cursor-default" : "cursor-pointer"
              }`}
            >
              Adjuntar archivo
            </label>
            <div>
              <button
                className="text-2xl border border-black"
                onClick={() => setPaymentModal(false)}
              >
                Cancelar
              </button>
              <button className="text-2xl border border-black" type="submit">
                Confirmar Pago
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
