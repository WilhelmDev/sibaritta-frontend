import { fechtUpdatePassowrd } from "../../services/recovery.services";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { setTimeout } from "timers";
import Image from "next/image";
import { toast } from "sonner";

function Recovery() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const router = useRouter();
  const { token } = router.query;

  const onSubmit = async (data: any) => {
    try {
      const datas = {
        password: data.password,
        token: token,
        callback_url: process.env.NEXT_PUBLIC_URl_BASIC,
      };
      const response = await fechtUpdatePassowrd(datas);
      toast("Update exitosamente.. revisar tu Correo", {
        unstyled: true,
        classNames: {
          toast:
            "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
          title: " text-[2rem]  ",
        },
        position: "top-center",
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_URl_BASIC}`);
      }, 1500);
      console.log(response);
    } catch (error) {
      console.log(error);

      toast("error", {
        unstyled: true,
        classNames: {
          toast:
            "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
          title: " text-[2rem]  ",
        },
        position: "top-center",
      });
    }
  };

  return (
    <div className="recovery">
      {/* <article className="recovery_img"></article> */}
      <article className="recovery_box ">
        <div className="bxo-image ">
          <Image
            src={"/logo.png"}
            className="w-full h-full"
            width={1000}
            height={1000}
            alt="logo"
          />
        </div>
        <h2>Cambiar su nueva contraseña</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="recovery_form ">
          <div className="recovery_inputs  ">
            <label id="password">Password</label>
            <div>
              <input
                className="profile-input h-[4rem]"
                type="password"
                id="password"
                placeholder="Ingrese su nueva contraseña"
                {...register("password", {
                  required: "Este campo es requerido",
                })}
              />
              {errors.password && (
                <p className="Login-error text-red-600 text-[1rem] ml-[.5rem] pt-[.2rem]">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
          </div>
          <button className="recovery_btn">Enviar</button>
        </form>
      </article>
    </div>
  );
}

export default Recovery;
