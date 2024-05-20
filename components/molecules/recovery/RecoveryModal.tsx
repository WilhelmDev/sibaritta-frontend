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
        callback_url: `https://anyer.web.v2.sibaritta.mensorestudio.com/recovery`,
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
        width="w-[80%] tablet:w-[58rem]  "
        className="modalsession"
      >
        <article className="!bg-[#E2D5C4] modalsession__card ">
          <div className="formRegister__titulo">
            <h2 className="ModalSession-title">¡Bienvenido a Sibaritta!</h2>
            <h5 className="">
              Coloca tu email para recuperar tu contraseña
            </h5>
          </div>
          <div className="formRegister__campos">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="contenedorInput">
                <input className="profile-input  h-[4rem] bg-[#E9E3DB]"
                  {...register("email", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: emailPattern,
                      message: "Formato incorrecto",
                    },
                  })}
                  type="text"
                  placeholder="sibarita@gmail.com"
                />
                {errors.email && (
                  <p className="Login-error text-red-600 text-[1rem] pt-[.2rem] pl-[.2rem] text-[1rem] ml-[.5rem]">
                    {String(errors.email.message)}
                  </p>
                )}
                {emailExit && (
                  <p className="Login-error text-red-600 text-[1rem] pt-[.2rem] pl-[.2rem]">
                    {String(emailExit)}
                  </p>
                )}
              </div>
              <div className="flex  mt-5 flex-col justify-center items-center">
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
              <div className="w-full pt-[1rem] boton boton--transparente mt-5 ">
                <button className="modalSession-button w-full m-auto">
                Enviar
                </button>
              </div>
            </form>
          </div>

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
