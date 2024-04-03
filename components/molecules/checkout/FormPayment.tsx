import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface IFormPayment {
  reference: any;
}
const FormPayment = ({ reference }: IFormPayment) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorCard, setErrorCard] = useState<String>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Maneja la falta de stripe o elements aquí
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (!error) {
        localStorage.setItem("Stripe", JSON.stringify(paymentMethod.id));
        localStorage.setItem(
          "last4",
          JSON.stringify(paymentMethod.card?.last4)
        );
      } else {
        console.log("Error: " + error?.message);
        setErrorCard(error.message + "");
        setTimeout(() => setErrorCard(""), 2500);
      }
    }
  };
  return (
    <form className="form2">
      <CardElement
        options={{
          style: {
            base: {
              color: "white",
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: "antialiased",
              fontSize: "15px",
              "::placeholder": {
                color: "#A59484",
              },
            },
            invalid: {
              color: "#red",
              iconColor: "withe",
            },
          },
        }}
        className="car-payment text-white"
      />
      {errorCard.trim() && (
        <p className="main-page  Login-error text-[1.2rem]  text-red-600  font-lato">
          {errorCard}
        </p>
      )}

      <button ref={reference} onClick={handleSubmit} className="riki hidden">
        pay
      </button>
    </form>
  );
};

export default FormPayment;
