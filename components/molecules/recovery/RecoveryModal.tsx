import React, { useRef, useState } from "react";
import Modal from "../Modal";
import { fechtRecoveryPassword } from "@/services/recovery.services";
import { useForm } from "react-hook-form";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import { setTimeout } from "timers";
import MensajeRecoveryModal from "./MensajeRecoveryModal";
import { emailPattern } from "@/lib/formUtils";

interface RecoveryModal {
  openForgot: boolean;
  closeModalForgot: () => void;
}

function RecoveryModal({ openForgot, closeModalForgot }: RecoveryModal) {
  const [mensajeModal, setmensajeModal] = useState<boolean>(false);
  const openModalMensaje = () => {
    setmensajeModal(true);
  };
  const closeModalMensaje = () => {
    setmensajeModal(false);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const captchaRef = useRef<ReCAPTCHAType>(null);
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA as string;
  const [captchaResponse, setCaptchaResponse] = useState("");
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const [messageErroCaptcha, setMessageCaptcha] = useState("");
  const [emailExit, setMessageEmailExit] = useState("");

  const onChangeRecaptcha = (response: any) => {
    setCaptchaResponse(response);
    setShowCaptchaError(false); // Resetea el estado de error del reCAPTCHA
  };

  const onSubmit = async (data: any) => {
    if (!captchaResponse) {
      setShowCaptchaError(true);
      return;
    }
    try {
      const datas = {
        email: data.email,
        callback_url: `${process.env.NEXT_PUBLIC_URl_BASIC}recovery`,
        captcha_token: captchaResponse,
      };

      const response = await fechtRecoveryPassword(datas);

      if (response.success) {
        openModalMensaje();
        // closeModalForgot();
      } else {
        setMessageEmailExit("correo no encontrado");
        setCaptchaResponse("");
        if (captchaResponse) {
          captchaRef.current?.reset(); // Resetear solo si hay token almacenado
        }
        setTimeout(() => {
          setMessageEmailExit("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        visible={openForgot}
        closeModal={closeModalForgot}
        width="w-[80%] min-h-[43rem] tablet:w-[58rem]  "
        className="modalsession"
      >
        <article className="recovery_box_ !bg-[#F0EFEB] ">
          <h2 className="recovery_box_title">¡Bienvenido a Sibaritta!</h2>
          <h2 className="recovery_box_indication">
            Coloca tu email para recuperar tu contraseña
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="recovery_btns">
            <div>
              <input
                {...register("email", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: emailPattern,
                    message: "formato incorrecto",
                  },
                })}
                type="text"
                placeholder="sibarita@gmail.com"
              />
              {errors.email && (
                <p className="Login-error text-red-600 pt-[.2rem] pl-[.2rem] text-[1rem] ml-[.5rem]">
                  {String(errors.email.message)}
                </p>
              )}
              {emailExit && (
                <p className="Login-error text-red-600 pt-[.2rem] pl-[.2rem]">
                  {String(emailExit)}
                </p>
              )}
            </div>
            <div className="flex  flex-col justify-center items-center">
              <ReCAPTCHA
                sitekey={captchaKey}
                ref={captchaRef}
                onChange={onChangeRecaptcha}
              />
              {showCaptchaError && (
                <p className="Form-error text-red-500 text-[1.3rem]">
                  completa el captcha
                </p>
              )}
              {messageErroCaptcha && (
                <p className="Form-error text-red-500 text-[1.3rem]">
                  completa el captcha
                </p>
              )}
            </div>
            <button type="submit">Enviar</button>
          </form>
        </article>
      </Modal>
      <MensajeRecoveryModal
        visible={mensajeModal}
        closeModal={closeModalMensaje}
      />
    </div>
  );
}

export default RecoveryModal;
