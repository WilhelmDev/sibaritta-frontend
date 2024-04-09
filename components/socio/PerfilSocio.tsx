import React, { useRef } from "react";
import { IUser } from "@/interface/user.interface";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Dropzone from "react-dropzone";
import { getUserById, updateUser } from "@/services/user.service";
import { Toast } from 'primereact/toast';


import {
  onInputNumberOnly,
  onInputNumberOnly1,
  onInputNumberOnly2,
} from "@/utils/validations";
import Camera from "@/components/ui/icons/Camera";
import SearchSocio from "../admin/SearchSocio";
import Encuesta from "../encuesta/Encuesta";
import { useRouter } from "next/router";
import { getClient } from "@/services/admin/admin.service";
import UpdatePerfilModal from "../molecules/session/UpdatePerfilModal";
import { setTimeout } from "timers";

interface EditingState {
  [key: string]: boolean;
}

function PerfilSocio() {
  const [infoData, setinfoData] = useState<IUser>();
  const [isEditing, setIsEditing] = useState<EditingState>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [modalupdate, setmodalupdate] = useState<boolean>(false);
  const [password, setpassword] = useState<boolean>(false);
  const [passwordNew , setpasswordNew] = useState<string>("");

  const toast = useRef<Toast>(null);

  const show = () => {
      toast.current?.show({ severity:'success', summary: 'Success', detail: 'Actualización correcta' ,life: 2000});
  }

   const router = useRouter()

 
  //DMIN
  const [infoDataClient, setinfoDataClient] = useState<any>();
  const [clientId, setClienId] = useState(0);




  const closeModal = () => {
    setmodalupdate(false)
  }

  const openModalUpdate = () => {
    setmodalupdate(true)
  }

  //
  const { asPath } = useRouter();
  const toggleEditing = (inputName: string): void => {
    setIsEditing((prev: EditingState) => ({
      ...prev,
      [inputName]: !prev[inputName],
    }));
  };

  let userType = null;
  if (typeof window !== "undefined") {
    const typeUser = localStorage.getItem("fk_typeuser");
    userType = typeUser ? parseInt(typeUser, 10) : null;
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });


  // esta variable is_social  muestra si true se logeo con google si es false solo se logeo com  correo y password
  let is_social:any = null;
  if (typeof window !== 'undefined') {
    is_social = localStorage.getItem("is_social");
  }

  let userId = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const getUserByIds = async () => {
    try {
      const id = asPath === "/admin/perfil_socio" ? clientId : userId!;


      const res = await getUserById(id);
      setinfoData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userId!) {
      getUserByIds();
    }
  }, []);

  useEffect(() => {
    const findMetaDataValue = (metaKey: any) => {
      const metaDataItem = infoData?.meta_data?.find(
        (metaItem: any) => metaItem?.meta_key === metaKey
      );
      return metaDataItem?.meta_value || "";
    };

    const initialValues = {
      name: infoData?.name,
      email: infoData?.email,
      user_contact_phone: findMetaDataValue("user_contact_phone"),
      user_curp: findMetaDataValue("user_curp"),
      user_address: findMetaDataValue("user_address"),
      user_other_phone: findMetaDataValue("user_other_phone"),
      birthday_day: findMetaDataValue("birthday_day"),
      birthday_month: findMetaDataValue("birthday_month"),
      couple_day: findMetaDataValue("couple_day"),
      couple_month: findMetaDataValue("couple_month"),
      anniversary_day: findMetaDataValue("anniversary_day"),
      anniversary_month: findMetaDataValue("anniversary_month"),
    };

    reset(initialValues);
  }, [infoData]);

  const handleDrop = (acceptedFiles: any) => {
    setImageFile(acceptedFiles[0]);
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setImageUrl(imageUrl);
  };

  const resetEditingState = () => {
    setIsEditing({});
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("code");
    localStorage.removeItem("notifyId");
    localStorage.removeItem("name_partner");
    localStorage.removeItem("fk_typeuser");
    localStorage.removeItem("fk_partner_id");
    localStorage.removeItem("experienId");
    localStorage.removeItem("_grecaptcha");
    localStorage.removeItem("reservation");
    closeModal();
    
  }

  const updateUsers: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const meta_data = [
        { meta_key: "user_address", meta_value: data.user_address },
        { meta_key: "user_curp", meta_value: data.user_curp },
        {
          meta_key: "user_contact_phone",
          meta_value: data.user_contact_phone,
        },
        { meta_key: "user_other_phone", meta_value: data.user_other_phone },
        { meta_key: "birthday_month", meta_value: data.birthday_month },
        { meta_key: "birthday_day", meta_value: data.birthday_day },
        { meta_key: "couple_day", meta_value: data.couple_day },
        { meta_key: "couple_month", meta_value: data.couple_month },
        { meta_key: "anniversary_day", meta_value: data.anniversary_day },
        { meta_key: "anniversary_month", meta_value: data.anniversary_month },
      ];
      const formData = new FormData();
      if (imageFile) {
        formData.append("files", imageFile);
      }
      formData.append("passwordvalidate",passwordNew);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("meta_data", JSON.stringify(meta_data));

      const id = asPath === "/admin/perfil_socio" ? clientId : userId!;

      const res = await updateUser(id, formData);
      if (res.success === true){
        show()
        closeModal()
        setpasswordNew("")
        // Si actualizas la contraseña, desloguea al usuario
        if (data.password) {
          await logout(); // Desloguea al usuario
          router.push('/')
          setTimeout(() => {
            window.location.reload(); // Recarga la página después de redirigir a la página de inicio
          }, 200);
        }
      }
      
      
      resetEditingState();
      getUserByIds();
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userId!) {
      getUserByIds();
    }
  }, []);

  ///admin

  const allClien = async () => {
    try {
      const { data } = await getClient();
      

      setinfoDataClient(
        data.map((pa: any) => {
          return {
            id: pa.id,
            names: pa.name,
            photo: pa.avatar,
          };
        })
      );
      setClienId(data[0].id);
    } catch (error) {}
  };
  useEffect(() => {
    allClien();
  }, []);

  useEffect(() => {
    getUserByIds();
  }, [clientId]);


  const handleSubmitForm = async (e: any) => {
    e.preventDefault(); // Prevenir el comportamiento de envío de formulario predeterminado
  
    if (is_social === "true") {
      try {
        // Si es un inicio de sesión social, ejecutar directamente el envío del formulario
        await handleSubmit(updateUsers)();
      } catch (error) {
        console.error(error);
      }
    } else {
      // Si no es un inicio de sesión social, abrir el modal y ejecutar las funciones dentro de él
      openModalUpdate();
    }
  };
  
  
  

 
  
  return (
    <>
      <div className="profiles-container">
        <div
          className={`profiles main-page ${
            asPath === "/admin/perfil_socio"
              ? "  !pt-[15rem] laptop:pb-[10rem] laptop:items-end laptop:justify-end laptop:pr-[6rem]"
              : ""
          }`}
        >
          {asPath !== "/admin/perfil_socio" && (
            <>
              <div className="profile-image">
                <Image
                  src={"/img/profile.png"}
                  width={500}
                  height={500}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="profile-destok  ">
                <Image
                  alt=""
                  src={"/img/destok.png"}
                  width={1000}
                  height={1000}
                  className=" w-full h-full  object-cover  "
                />
              </div>
            </>
          )}

          <div className={`profile-form`}>
            <div className="relative">
              <div className="  ">
                {asPath === "/admin/perfil_socio" && (
                  <SearchSocio
                    select={"SOCIO"}
                    infoData={infoDataClient}
                    setpartId={setClienId}
                  />
                )}
              </div>

              <div className="profile-image2 relative">
                {!imageFile ? (
                  <Image
                    alt=""
                    src={infoData?.avatar || "/img/person.png"}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-full   "
                  />
                ) : (
                  <Image
                    alt=""
                    src={imageUrl ? imageUrl : ""}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover  rounded-full  "
                  />
                )}
                <div className="imageDrop">
                  <Dropzone onDrop={handleDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <>
                        <input {...getInputProps()} />
                        <div
                          className="w-full h-full  justify-center flex items-center"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <div className="w-[2.3rem] h-[2.3rem] !text-white">
                            {" "}
                            <Camera />
                          </div>
                        </div>
                      </>
                    )}
                  </Dropzone>
                </div>
              </div>
            </div>

            <div >
              <form
              
              onSubmit={handleSubmitForm}
                // className='flex flex-col gap-[1.5rem] laptop:grid laptop:grid-cols-2'
              >
                <div className="flex flex-col gap-[1.5rem] laptop:grid laptop:grid-cols-2">
                  <div className="relative ">
                    <input
                      type="text"
                      className={`profile-input ${
                        isEditing["name"]
                          ? "bg-[#4D3452] duration-300 ease-in-out"
                          : ""
                      }`}
                      placeholder="Nombre"
                      {...register("name")}
                      readOnly={!isEditing["name"]}
                    />
                    <i
                      onClick={() => toggleEditing("name")}
                      className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"
                    ></i>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      disabled
                      className={`profile-input  `}
                      placeholder="Correo"
                      {...register("email")}
                      // readOnly={!isEditing["email"]}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      className={`profile-input ${
                        isEditing["phone"]
                          ? "bg-[#4D3452] duration-300 ease-in-out"
                          : ""
                      }`}
                      placeholder="Celular"
                      {...register("user_contact_phone")}
                      readOnly={!isEditing["phone"]}
                      maxLength={15}
                      onInput={(e) => {
                        onInputNumberOnly(setValue, "phone", e);
                      }}
                    />
                    <i
                      onClick={() => toggleEditing("phone")}
                      className="icon-edit cursor-pointer text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"
                    ></i>
                  </div>
                  <div className="relative ">
                    <input
                      type="text"
                      className={`profile-input ${
                        isEditing["curp"]
                          ? "bg-[#4D3452] duration-300 ease-in-out"
                          : ""
                      }`}
                      placeholder="CURP"
                      {...register("user_curp")}
                      readOnly={!isEditing["curp"]}
                    />
                    <i
                      onClick={() => toggleEditing("curp")}
                      className="icon-edit cursor-pointer text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"
                    ></i>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className={`profile-input ${
                        isEditing["address"]
                          ? "bg-[#4D3452] duration-300 ease-in-out"
                          : ""
                      }`}
                      placeholder="Dirección"
                      {...register("user_address")}
                      readOnly={!isEditing["address"]}
                    />
                    <i
                      onClick={() => toggleEditing("address")}
                      className="icon-edit cursor-pointer text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"
                    ></i>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className={`profile-input ${
                        isEditing["other_phone"]
                          ? "bg-[#4D3452] duration-300 ease-in-out"
                          : ""
                      }`}
                      placeholder="Contacto de emergencia"
                      {...register("user_other_phone")}
                      readOnly={!isEditing["other_phone"]}
                      maxLength={15}
                      onInput={(e) => {
                        onInputNumberOnly(setValue, "phone", e);
                      }}
                    />
                    <i
                      onClick={() => toggleEditing("other_phone")}
                      className="icon-edit cursor-pointer text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"
                    ></i>
                  </div>
                  <div className="relative">
                    <input
                      type={`${password ? "text": "password"}`}
                      className={`profile-input ${
                        password 
                          ? "bg-[#4D3452] duration-300 ease-in-out"
                          : ""
                      }`}
                      placeholder="Contraseña"
                      {...register("password")}
                      // readOnly={!isEditing["password"]}
                    />
                     <i
                      onClick={() => {setpassword(!password)                      
                    }}
                      className="icon-edit cursor-pointer  text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"
                    ></i>
                  
                    
                  </div>
                </div>
                <div className="w-full h-[.2rem] bg-[#2F2A32] mt-[4rem]"></div>
                <h2 className="profile-h2">Fechas especiales</h2>
                <div className="flex flex-col gap-[1.5rem]">
                  <div className="profile-inputs">
                    <span className="profile-label"> Tu cumpleaños</span>
                    <div className="relative">
                      <input
                        type="text "
                        className="profile-input"
                        placeholder="Mes"
                        {...register("birthday_day")}
                        maxLength={2}
                        onInput={(e) => {
                          onInputNumberOnly1(setValue, "birthday_day", e);
                        }}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text "
                        className="profile-input"
                        placeholder="Día"
                        {...register("birthday_month")}
                        maxLength={2}
                        onInput={(e) => {
                          onInputNumberOnly2(setValue, "birthday_month", e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="profile-inputs">
                    <span className="profile-label">
                      Cumpleaños de tu pareja
                    </span>
                    <div className="relative">
                      <input
                        type="text "
                        className="profile-input"
                        placeholder="Mes"
                        {...register("couple_month")}
                        maxLength={2}
                        onInput={(e) => {
                          onInputNumberOnly1(setValue, "couple_month", e);
                        }}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        className="profile-input"
                        placeholder="Día"
                        {...register("couple_day")}
                        maxLength={2}
                        onInput={(e) => {
                          onInputNumberOnly2(setValue, "couple_day", e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="profile-inputs">
                    <span className="profile-label"> Tu aniversario</span>
                    <div className="relative">
                      <input
                        type="text"
                        className="profile-input"
                        placeholder="Mes"
                        {...register("anniversary_month")}
                        maxLength={2}
                        onInput={(e) => {
                          onInputNumberOnly1(setValue, "anniversary_month", e);
                        }}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text "
                        className="profile-input"
                        placeholder="Día"
                        {...register("anniversary_day")}
                        maxLength={2}
                        onInput={(e) => {
                          onInputNumberOnly2(setValue, "anniversary_day", e);
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* <div className="profile-inputs">
                    <span className="profile-label"> Metodo Pago</span>
                    <div className="xd relative ">
                      <input
                        type="text"
                        className="profile-input "
                        placeholder="42424242424242424242"
                        
                        
                        onInput={(e) => {
                          onInputNumberOnly1(setValue, "anniversary_month", e);
                        }}
                      />
                    </div>
                    
                  </div> */}
                  
                </div>
                


                <div className="w-full justify-end flex pt-[2rem]">
                  <button  
                  type="submit"
                  className="profile-buttons">Actualizar</button>
                </div>
              </form>
              <h2 className="profile-text">
                Para solicitar tu factura electrónica, envía un correo a
                facturacion@sibaritta.com
              </h2>
            </div>
            <Encuesta />
          </div>
        </div>
        <UpdatePerfilModal handleSubmit={handleSubmit} setpasswordNew={setpasswordNew} visible={modalupdate} updateUsers={updateUsers} closeModal={closeModal}/>
        <Toast ref={toast} position="top-center" />
      </div>
    </>
  );
}

export default PerfilSocio;
