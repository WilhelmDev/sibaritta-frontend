import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";
import FacebookLogin from "react-facebook-login";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import axios from "axios";
import ModalRegister from "@/components/molecules/session/ModalRegister";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

import {
  fetchCreateFacebook,
  fetchCreateGoogle,
  fetchLogin,
} from "@/services/login.services";
import RecoveryModal from "./recovery/RecoveryModal";
import { log } from "console";
import { useRouter } from "next/router";
import { emailPattern } from "@/lib/formUtils";
import { classNames } from 'primereact/utils';

interface ModalSessionProps {
  children?: string;
  closeModalLogin: () => void;
  openModalRegistro: () => void;
  openRegistro: boolean;
  openLogin: boolean;
  openModalForgot: () => void;
  setautenti?: any;
  openModalLogin?: any;
  closeModalRegistro?: any;
  openModalConfirmacion?: any;
}

const ModalSession = ({
  closeModalLogin,
  closeModalRegistro,
  openModalRegistro,
  openModalLogin,
  openRegistro,
  openLogin,
  openModalForgot,
  openModalConfirmacion,
  setautenti,
}: ModalSessionProps) => {
  const captchaRef = useRef<ReCAPTCHAType>(null);
  const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA as string;
  const [captchaResponse, setCaptchaResponse] = useState("");
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const [recovery, setRecovery] = useState(false);
  const [messageErroCaptcha, setMessageCaptcha] = useState("");  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const openRecovery = () => {
    setRecovery(true);
  };

  //captcha
  const onChangeRecaptcha = (response: any) => {
    setCaptchaResponse(response);
    setShowCaptchaError(false); // Resetea el estado de error del reCAPTCHA
  };
  const { push } = useRouter();

  

  const appIDFacebook = process.env.NEXT_PUBLIC_APP_ID_FACEBOOK || "";

  //login facebook
  const responseFacebook = async (response: any) => {
    const datas = {
      email: response?.email,
      full_name: response?.name,
      avatar: response?.picture?.data?.url,
      external_id: response?.userID,
      external_auth: "facebook",
      home_url: `https://anyer.web.v2.sibaritta.mensorestudio.com/`,
    };

    try {
      const data = await fetchCreateFacebook(datas);
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await fetchCreateFacebook(datas);

      localStorage.setItem("token", data.data.token);
      localStorage.setItem("userid", data.data.userid);
      localStorage.setItem("fk_typeuser", data.data.fk_typeuser);
      closeModalLogin();
    } catch (error) {
      console.log(error);
    }
  };

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
        home_url: `https://anyer.web.v2.sibaritta.mensorestudio.com/`,
      };

      try {
        const data = await fetchCreateGoogle(datas);

        if (data.succes) {
          const responseLogin = await fetchCreateGoogle(datas);
          localStorage.setItem("is_social", responseLogin?.data?.is_social);
          localStorage.setItem("token", responseLogin.data.token);
          localStorage.setItem("userid", responseLogin.data.userid);
          localStorage.setItem("fk_typeuser", responseLogin.data.fk_typeuser);
          localStorage.removeItem("modal_validate");
          closeModalLogin();
        } else {
          const responseLogin = await fetchCreateGoogle(datas);
          localStorage.setItem("is_social", responseLogin?.data?.is_social);
          localStorage.setItem("token", responseLogin.data.token);
          localStorage.setItem("userid", responseLogin.data.userid);
          localStorage.setItem("fk_typeuser", responseLogin.data.fk_typeuser);
          if (responseLogin.data.fk_typeuser === 2) {
            push("/home_partner");
          }

          if (responseLogin.data.fk_typeuser === 3) {
            push("/admin/admin_home");
          }
          closeModalLogin();
          setautenti();
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

  //login
  const onSubmit = async (data: any) => {
    try {
      if (!captchaResponse) {
        setShowCaptchaError(true);
        return;
      }

      const datas = {
        email: data.email,
        password: data.password,
        captcha_token: captchaResponse,
      };

      const result = await fetchLogin(datas);
      localStorage.removeItem("modal_validate");
      localStorage.setItem("is_social", result?.data?.is_social);
      localStorage.removeItem("modal_validate");
      if (!result.success) {
        toast.error("Credenciales incorrectas", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
            title: " text-[2rem]  ",
          },
          position: "top-center",
        });
        return
      }else{
        toast("usuario logeado",{
          unstyled: true,
          classNames: {
            toast: 'bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ',
            title: ' text-[2rem]  ',
          },
           position :"top-center" 
        });
        localStorage.removeItem("modal_validate");
      }
      const { token, userid, fk_typeuser , fk_partner_id } = result.data;
      
      localStorage.setItem("token", token);
      localStorage.setItem("userid", userid.toString());
      localStorage.setItem("fk_typeuser", fk_typeuser);
      if (fk_typeuser === 2) {
        localStorage.setItem("fk_partner_id", fk_partner_id);
        push("/home_partner");
      }

      if (fk_typeuser === 3) {
        push("/admin/admin_home");
      }

      closeModalLogin();
      setautenti();
    } catch (error) {
      console.log(error);
      setCaptchaResponse("");
      if (captchaResponse) {
        captchaRef.current?.reset(); // Resetear solo si hay token almacenado
      }
    }
  };

  return (
    <div>
      <Modal
        visible={openLogin}
        closeModal={closeModalLogin}
        width="w-[90%] tablet:w-[55%]  laptop:w-[30%] "
        className="modalsession "
      >
        <div className="!bg-[#E2D5C4] modalsession__card" >
          <div>
            <Image
                    src={"/home/login.png"}
                    alt=""
                    height={64}
                    width={52}
                    className="   m-auto"
            />
          </div>
          <div className="formRegister__titulo">
            <h2 className="ModalSession-title">BIENVENIDO A SIBARITTA</h2>
            <h5>Inicia sesión o registrate</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pretium lorem, a malesuada diam. Vivamus blandit egestas turpis. Integer at ultricies ipsum.</p> */}
          </div>
          <div className="formRegister__campos">
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="contenedorInput lg:flex gap-[1.5rem] contenedorInput">
                <div className="w-full">
                  <input
                    type="email"
                    className="profile-input h-[4rem] bg-[#E9E3DB] text-[#A59484]"
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
                </div>
                <div className="w-full ">
                  <input
                    type="password"
                    className="profile-input h-[4rem] bg-[#E9E3DB] text-[#A59484]  "
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.password && (
                    <p className="Login-error text-red-600">
                      {String(errors.password.message)}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex  flex-col justify-center items-center pt-[1.5rem]">
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
                  Iniciar sesión
                </button>
              </div>
              <span
                onClick={openModalForgot}
                className="modalSession-span cursor-pointer pt-[1rem] mb-5"
              >
                ¿Has olvidado tu contraseña?
              </span>
            </form>
          </div>
          <div className="flex items-center justify-center gap-[1rem] divisorCard">
              <div className="w-[12rem] bg-[#585858] h-[.1rem]"></div>
              <span className="text-[#000]  text-[1.8rem] font-medium">
                o
              </span>
              <div className="w-[12rem] bg-[#585858] h-[.1rem]"></div>
          </div>
          <div className="formRegister__titulo">
            <h5>Continúa con tus redes sociales</h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pretium lorem, a malesuada diam. Vivamus blandit egestas turpis. Integer at ultricies ipsum.</p> */}
          </div>
          <div className="ModalSession-container  ">
            <div className="container-socials">
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
           
            <p className="modalSession-account flex items-center gap-[1rem] text-[1.5rem] text-[#4D3452]  justify-center">
              ¿No tienes una cuenta?
              <span
                className="modalSession-span cursor-pointer"
                onClick={openModalRegistro}
              >
                Registrarse
              </span>
            </p>
          </div>
        </div>
      </Modal>
      <Toaster />
      <ModalRegister
        handleGoogleLogin={handleGoogleLogin}
        openModalLogin={openModalLogin}
        closeModalRegistro={closeModalRegistro}
        openLogin={openLogin}
        openRegistro={openRegistro}
        openModalConfirmacion={openModalConfirmacion}
        setautenti={setautenti}
      />
    </div>
  );
};

export default ModalSession;
