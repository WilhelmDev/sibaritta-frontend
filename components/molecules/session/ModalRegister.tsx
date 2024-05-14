import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import FacebookLogin from "react-facebook-login";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import axios from "axios";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { fetchCreateGoogle, fetchCreateUser } from "@/services/login.services";
import ModalConfirmation from "./ModalConfirmation";
import ModalSession from "../ModalSession";
import { useRouter } from "next/router";
import { emailPattern } from "@/lib/formUtils";
import Drowpdon from "@/components/atoms/Drowpdon";

interface ModalSessionProps {
  openModalLogin: () => void;
  closeModalRegistro: () => void;
  openLogin: boolean;
  children?: string;
  openRegistro: boolean;
  openModalConfirmacion: () => void;
  loginsss?: any;
  handleGoogleLogin?: any;
  setautenti: () => void;
}

const ModalRegister = ({
  openModalLogin,
  closeModalRegistro,
  openLogin,
  children,
  openRegistro,
  openModalConfirmacion,
  setautenti,
}: ModalSessionProps) => {
  const [captchaResponse, setCaptchaResponse] = useState("");
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const captchaRef = useRef<ReCAPTCHAType>(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA as string;
  const [messageErroCaptcha, setMessageCaptcha] = useState("");
  const [emailExit, setMessageEmailExit] = useState("");
  const [checkBox, setcheckBox] = useState(false);
  const [messageErrorCheck, setMessageErrorCheck] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Habilita validación en tiempo real
  });

  //captcha
  const onChangeRecaptcha = (response: any) => {
    setCaptchaResponse(response);
    setShowCaptchaError(false); // Resetea el estado de error del reCAPTCHA
  };

  const { push } = useRouter();

  const handleGoogleLogin = async (response: any) => {

    try {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        }
      );
      const datas = {
        email: res.data.email,
        full_name: res.data.name,
        avatar: res.data.picture,
        external_id: res.data.sub,
        external_auth: "google",
        home_url: `${process.env.NEXT_PUBLIC_URl_BASIC}`,
      };

      try {
        const data = await fetchCreateGoogle(datas);
        if (data.succes) {
          const responseLogin = await fetchCreateGoogle(datas);
          localStorage.setItem("token", responseLogin.data.token);
          localStorage.setItem("userid", responseLogin.data.userid);
          localStorage.setItem("fk_typeuser", responseLogin.data.fk_typeuser);

          setautenti();
        } else {
          const responseLogin = await fetchCreateGoogle(datas);
          closeModalRegistro();
          setautenti();
          localStorage.setItem("token", responseLogin.data.token);
          localStorage.setItem("userid", responseLogin.data.userid);
          localStorage.setItem("fk_typeuser", responseLogin.data.fk_typeuser);
          if (responseLogin.data.fk_typeuser === 2) {
            push("/home_partner");
          }
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginsss = useGoogleLogin({
    onSuccess: handleGoogleLogin,
  });

  // handleGoogleLogin

  //registro
  const onSubmit = async (data: any) => {
    try {

      if (!checkBox) {
        setMessageErrorCheck("Debes tener más de 18 años para registrarte");
        return;
      }

      if (!captchaResponse) {
        setShowCaptchaError(true);
        return;
      }

      const datas = {
        full_name: data.full_name,
        email: data.email,
        password: data.password,
        callback_url: `https://anyer.web.v2.sibaritta.mensorestudio.com/validate`,
        captcha_token: captchaResponse,
      };

      const result = await fetchCreateUser(datas);
      if (result.success) {
        setCaptchaResponse("");
        closeModalRegistro();
        push("/message_socio_register");

        // openModalConfirmacion();
      } else {
        setMessageEmailExit("El correo ya se encuentra en uso");
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
      setCaptchaResponse("");
      if (captchaResponse) {
        captchaRef.current?.reset(); // Resetear solo si hay token almacenado
      }
    }
  };

  return (
    <div >
      <Modal
        visible={openRegistro}
        closeModal={closeModalRegistro}
        width="w-[90%] tablet:w-[55%]  laptop:w-[30%] "
        className="modalsession"
      >
        <div className="!bg-[#E2D5C4] modalsession__card" >
          <div>
            <Image
                    src={"/home/login.png"}
                    alt=""
                    height={70}
                    width={53}
                    className="   m-auto"
            />
          </div>
          <div className="formRegister__titulo">
            <h2 className="ModalSession-title">Registrate para completar la reserva</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pretium lorem, a malesuada diam. Vivamus blandit egestas turpis. Integer at ultricies ipsum.</p> */}
          </div>
         
          <div className="ModalSession-container formRegister__campos">
            <form onSubmit={handleSubmit(onSubmit)} className="pt-[1rem]">
              <div className="w-full">
                <input
                  type="text"
                  className="profile-input h-[4rem] bg-[#e9e3db] text-[#e9e3db]  "
                  placeholder="Nombre completo"
                  {...register("full_name", {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.full_name && (
                  <p className="Login-error text-red-600">
                    {String(errors.full_name.message)}
                  </p>
                )}
                <div className="contenedorInput lg:flex gap-[1.5rem] pt-[1rem]">
                  <div className="w-full">
                    <input
                      type="text"
                      className="profile-input h-[4rem] bg-[#e9e3db] text-[#e9e3db]"
                      placeholder="Correo electrónico"
                      {...register("email", {
                        required: "Este campo es requerido",
                        pattern: {
                          value: emailPattern,
                          message: "formato incorrecto",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="Login-error text-red-600 text-[1rem] ml-[.5rem]">
                        {String(errors.email.message)}
                      </p>
                    )}

                    {emailExit && (
                      <p className="Login-error text-red-600 text-[1rem] pl-[.5rem]">
                        {String(emailExit)}
                      </p>
                    )}
                  </div>
                  <div className="w-full ">
                    <input
                      type="password"
                      className="profile-input h-[4rem] text-[1rem]  bg-[#e9e3db] text-[#A59484]  "
                      placeholder="Contraseña"
                      {...register("password", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.password && (
                      <p className="Login-error text-red-600 text-[1rem]">
                        {String(errors.password.message)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex  pt-[1rem] mb-5 lg:mb-0">
                    <div className="checkRegistro">
                      <label
                      htmlFor="checkBox"
                      className="cursor-pointer flex gap-[.5rem] "
                    >
                      <input
                        checked={checkBox}
                        id="checkBox"
                        onChange={(e) => setcheckBox(e.target.checked)}
                        type="checkbox"
                        className="w-[1.7rem] h-auto checkboxCard"
                      />
                      <p className="text-[1rem] text-black">
                        Confirmo que tengo más de 18 años
                      </p>
                    </label>
                    </div>
                </div>
                {messageErrorCheck && (
                  <p className="Form-error text-red-500 text-[1.3rem]">
                    {messageErrorCheck}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-center items-center py-[1rem]">
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
              <div className="boton boton--transparente">
                <button className="modalSession-button w-full  m-auto">
                  Registrarse
                </button>
              </div>
              
            </form>
            <p className="modalSession-account flex items-center gap-[1rem] text-[1.5rem] text-[#4D3452]  justify-center">
              ¿Ya tienes una cuenta?
              <span
                className="modalSession-span cursor-pointer"
                onClick={openModalLogin}
              >
                Inicia sesión
              </span>
            </p>
          </div>
          <div className="ModalSession-container  ">
            <div className="container-socials hidden">
              <button
                className="google-buttom  p-[.5rem] laptop:p-[2rem]"
                onClick={() => loginsss()}
              >
                <Image
                  src={"/home/google.png"}
                  alt=""
                  height={100}
                  width={100}
                  className=""
                />
              </button>

              {/* <FacebookLogin
                appId={appIDFacebook}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
                cssClass="facebook-icon"
                textButton="Iniciar sesión con Facebook"
              /> */}
            </div>
           
            <p className="modalSession-account flex items-center gap-[1rem] text-[1.5rem] text-[#4D3452]  justify-center hidden">
              ¿No tienes una cuenta?
            
            </p>
          </div>
         
        </div>
      </Modal>
    </div>
  );
};

export default ModalRegister;
