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
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

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
  const [password, setPassword] = useState("password");
  const [hidePassword, setHidePassword] = useState(false);


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


  const showPassword = () => {
    if (!hidePassword) {
      setHidePassword(!hidePassword);
      setPassword('text');
    } else {
      setHidePassword(!hidePassword);
      setPassword('password');
    }
  }

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
            <svg className="m-auto" width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9339 0C21.1692 0 20.5518 0.705678 20.5518 1.5796C20.5518 2.45352 21.1692 3.15919 21.9339 3.15919C22.6986 3.15919 23.3161 2.45352 23.3161 1.5796C23.3161 0.705678 22.6986 0 21.9339 0Z" fill="#100A11" />
              <path d="M26.9274 0.270298C26.8825 0.270298 26.8416 0.265625 26.8048 0.265625C26.7843 0.265625 26.7639 0.270298 26.7475 0.270298H26.7393C26.2159 0.312359 25.7988 0.803062 25.7988 1.4106C25.7988 2.01814 26.2159 2.51351 26.7393 2.5509H26.7802C26.7884 2.5509 26.7966 2.5509 26.8048 2.5509C26.8211 2.5509 26.8416 2.5509 26.862 2.5509H29.1929V37.4609H31.5605V2.55557H43.0798V0.270298H26.9274Z" fill="#100A11" />
              <path d="M16.7493 0.270298H16.7412C16.7207 0.270298 16.7003 0.265625 16.6839 0.265625C16.6471 0.265625 16.6062 0.265625 16.5572 0.270298H0V2.55557H11.5152V37.4656H13.8828V2.55557H16.6226C16.6226 2.55557 16.6635 2.55557 16.6798 2.55557C16.688 2.55557 16.6962 2.55557 16.7044 2.55557H16.7453C17.2687 2.51351 17.6858 2.01814 17.6858 1.4106C17.6858 0.803062 17.2687 0.307685 16.7453 0.270298H16.7493Z" fill="#100A11" />
            </svg>

          </div>
          <div className="formRegister__titulo">
            <h2 className="ModalSession-title">Registrate para completar la reserva</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pretium lorem, a malesuada diam. Vivamus blandit egestas turpis. Integer at ultricies ipsum.</p> */}
          </div>

          <div className="ModalSession-container formRegister__campos">
            <form onSubmit={handleSubmit(onSubmit)} className="pt-[1rem]">

              <div className="contenedorInput lg gap-[1.5rem] pt-[1rem]">
                <div className="w-full mb-5">
                  <div className="w-full mb-5">
                    <input
                      type="text"
                      className="profile-input h-[4rem] bg-[#e9e3db]  "
                      placeholder="Nombre completo"
                      {...register("full_name", {
                        required: "Este campo es requerido",
                      })}
                    />
                    {errors.full_name && (
                      <p className="Login-error text-red-600 text-[1rem]">
                        {String(errors.full_name.message)}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-5">
                    <input
                      type="text"
                      className="profile-input h-[4rem] bg-[#e9e3db]"
                      placeholder="Correo electrónico"
                      {...register("email", {
                        required: "Este campo es requerido",
                        pattern: {
                          value: emailPattern,
                          message: "Formato incorrecto",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="Login-error text-red-600 text-[1rem] text-[1rem] ml-[.5rem]">
                        {String(errors.email.message)}
                      </p>
                    )}

                    {emailExit && (
                      <p className="Login-error text-red-600 text-[1rem] text-[1rem] pl-[.5rem]">
                        {String(emailExit)}
                      </p>
                    )}
                  </div>
                  <div className="w-full ">
                    <div className="perfil__contenedor__center__card relative">
                      <input
                        type={password}
                        className="profile-input h-[4rem] text-[1rem]  bg-[#e9e3db] text-[#A59484]  "
                        placeholder="Contraseña"
                        {...register("password", {
                          required: "Este campo es requerido",
                        })}
                      />
                      {hidePassword ? (
                        <FaRegEye onClick={showPassword} className="cursor-pointer icon-FaRegEye text-[black] text-[1.4rem] absolute top-[1.1rem] top-xl-1-5rem right-[1.8rem]" />
                      ) : (
                        <FaEyeSlash onClick={showPassword} className="cursor-pointer icon-FaRegEye text-[black] text-[1.4rem] absolute top-[1.1rem] top-xl-1-5rem right-[1.8rem]" />
                      )}
                    </div>
                    {errors.password && (
                      <p className="Login-error text-red-600 text-[1rem] text-[1rem]">
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
                className="google-buttom "
                onClick={() => loginsss()}
              >
                <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="101" height="101" rx="10" fill="#F3EEE7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M59.9385 39.9637C58.262 38.4263 55.3221 36.5866 50.9636 36.5866C44.8258 36.5866 39.6164 40.5432 37.7335 46.0118L37.7335 46.0131C37.2693 47.4243 36.9857 48.9364 36.9857 50.499C36.9857 52.0612 37.2692 53.5733 37.7591 54.9844L37.7591 54.9844C39.6162 60.4532 44.8257 64.4097 50.9636 64.4097C54.4193 64.4097 57.0499 63.4773 59.0099 62.1416L59.0102 62.1395C62.1051 60.0227 63.4977 56.8724 63.7555 54.7806H50.9639V46.3633H72.7563C73.0914 47.7746 73.2463 49.1355 73.2463 51.0004C73.2463 57.9056 70.7188 63.7273 66.3346 67.684L66.3312 67.6837L66.3344 67.6861C62.4915 71.1639 57.2305 73.1801 50.9636 73.1801C41.8857 73.1801 34.0457 68.0894 30.2288 60.6804L30.2287 60.6805C28.6556 57.6058 27.7529 54.1533 27.7529 50.499C27.7529 46.8447 28.6556 43.392 30.2287 40.3174L30.2293 40.3171L30.2285 40.3164C34.0454 32.9071 41.8855 27.8164 50.9636 27.8164C57.2305 27.8164 62.466 30.0594 66.4891 33.7136L59.9385 39.9637Z" fill="#4D3452" />
                </svg>

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
