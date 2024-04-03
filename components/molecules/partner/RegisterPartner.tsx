import React, { useState } from "react";
import Modal from "../Modal";
import { partnerRegister } from "@/services/registerPartner.service";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ModalRegisterPartnerProps {
  visible1: boolean;
  setVisible1: React.Dispatch<React.SetStateAction<boolean>>;
}

function RegisterPartner({ visible1, setVisible1 }: ModalRegisterPartnerProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const closeModal = () => {
    setVisible1(false);
    // document.body.style.overflow = "";
  };
  const onSubmit = async (data: any) => {
    try {
      const datos = {
        full_name: data?.full_name,
        comercial_name: data?.comercial_name,
        responsable_name: data?.responsable_name,
        business_email: data?.business_email,
        address: data?.address,
        city: data?.city,
        postal_code: data?.postal_code,
        rfc: data?.rfc,
        phone: data?.phone,
        google_ranking: data?.google_ranking,
        position: data?.position,
        comment: data?.comment,
        callback_url: "http://localhost:3000/pagina-registro",
      };
      const results = await partnerRegister(datos);


      if (results.success === true) {
        closeModal();
        reset();
        toast("Solicitud de registro de partner exitoso",{
          unstyled: true,
          classNames: {
            toast: 'bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] font-lato',
            title: ' text-[2rem]  ',
          },
           position :"top-center"
        });
      }else{
        toast("algo fallo registro intentar nueva mente",{
          unstyled: true,
          classNames: {
            toast: 'bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] font-lato',
            title: ' text-[2rem]  ',
          },
           position :"top-center"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        visible={visible1}
        closeModal={closeModal}
        width="w-[90%] tablet:w-[60%]   tablet:w-[50%] laptop:w-[45%] h-auto "
        className="register-Partner-modal-"
      >
        <div className="w-full h-full bg-[#F0EFEB] flex flex-col gap-[2rem] p-[1rem]">
          <div className="infos-">
            <h2>Sé parte de Sibaritta Partners</h2>
            <p>
              ¡Si tienes experiencias auténticas de alta calidad y quieres
              darlas a conocer en la única plataforma de experiencias de alto
              nivel de México, este es el lugar correcto!.

            </p>
            <p className="bold-400">Regístrate y recibirás una llamada personalizada para evaluar tu
            establecimiento como Partner de Sibaritta.</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="box_partnet_register_inputs"
          >
            <div className="partner-register-input-name-cargo ">
              <div className="w-full h-auto">
                <input
                  type="text"
                  placeholder="Nombre del Responsable"
                  {...register("responsable_name", { required: true })}
                />
                {errors?.responsable_name?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>
              <div className="w-full h-full">
                <input
                  type="text"
                  placeholder="Cargo"
                  {...register("position", { required: true })}
                />
                {errors?.position?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>
            </div>
            <div className="partner-register-input-name-cargo ">
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="Email Corporativo"
                  {...register("business_email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                />
                {errors?.business_email?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
                {errors.business_email?.type === "pattern" && (
                  <p className="text-red-600">
                    El formato del email es incorrecto
                  </p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Dirección"
                  {...register("address", { required: true })}
                />
                {errors?.address?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>
            </div>

            <div className="partner-register-input-name-cargo">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Ciudad"
                  {...register("city", { required: true })}
                />
                {errors?.city?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Código Postal"
                  {...register("postal_code", { required: true })}
                />
                {errors?.postal_code?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>
            </div>

            <div className="partner-register-input-name-cargo ">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Nombre de Establecimiento"
                  {...register("comercial_name", { required: true })}
                />
                {errors?.comercial_name?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Razón social"
                  {...register("full_name", { required: true })}
                />
                {errors?.full_name?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="RFC"
                  {...register("rfc", { required: true })}
                />
                {errors?.rfc?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>
            </div>
            <div className="partner-register-input-name-cargo ">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Teléfono"
                  {...register("phone", { required: true })}
                />
                {errors?.phone?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Calificación de Goggle"
                  {...register("google_ranking", { required: true })}
                />
                {errors?.google_ranking?.type === "required" && (
                  <p className="text-red-600">campo requerido</p>
                )}
              </div>
            </div>
            <div className="w-full ">
              <input
                className="py-[1rem]"
                type="text"
                {...register("comment", { required: true })}
                placeholder="Cuéntanos un poco más de tu establecimiento para preparar nuestra llamada."
              />
              {errors?.comment?.type === "required" && (
                <p className="text-red-600">campo requerido</p>
              )}
            </div>
            <div className="partner-register-btons">
              <button>Enviar</button>
              <p>
                Agradecemos tu interés en formar parte de Sibarita Business. Nos
                pondremos en contacto contigo en el menor tiempo posible para
                brindarte información detallada
              </p>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default RegisterPartner;
