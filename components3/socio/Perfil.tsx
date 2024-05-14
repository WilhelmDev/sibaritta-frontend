import Encuesta from '@/components/encuesta/Encuesta'
import Link from 'next/link'

import React, { useRef } from "react";
import { IUser, IUserNew } from "@/interface/user.interface";
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
import { useRouter } from "next/router";
import { getClient } from "@/services/admin/admin.service";
import UpdatePerfilModal from "@/components/molecules/session/UpdatePerfilModal";
import { setTimeout } from "timers";

interface EditingState {
  [key: string]: boolean;
}

export default function PerfilSocioV2() {

  const [infoData, setinfoData] = useState<IUserNew>();
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

  //ADMIN
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

  let userType = null as any;
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

  let userId = null as any;
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
  }, [infoData])

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
    <div className='perfil'>
        {/* <PerfilSocio /> */}
        
        <div className="migajaPan">
          <div className="container-general">
            <div className="migajaPan__card ">
                <ul className="flex">
                  <li>
                      &gt; Home
                  </li>
                  <li className="activeMigaja">
                      &gt; PERFIL
                  </li>
                
                </ul>
            </div>
          </div>
        </div>
        <div className='perfil__contenedor'>
          <div className='container-general'>
            <div className="lg:flex block ">
              <div className='lg:w-1/4 w-full items-center flex'>
                  <div className='perfil__contenedor__left'>
                    <Image src={ infoData?.avatar || "/perfil/perfil.png"} alt='logo' width={250} height={250}/>
                  </div>
              </div>
              <div className='lg:w-1/2 w-full ml-5 mr-5'>
                  <div className='perfil__contenedor__center'>
                    <div className="lg:flex lg:space-x-4 ">
                      <div className="lg:w-1/2 w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="text" className="profile-input " placeholder="Nombre"
                          {...register("name")}
                           />
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>

                      </div>
                      <div className="lg:w-1/2 w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="email" className="profile-input " placeholder="Correo"
                          {...register("email")}/>
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex lg:space-x-4 ">
                      <div className="lg:w-1/2 w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="tel" className="profile-input " placeholder="Celular" name="name"
                          readOnly={!isEditing["phone"]}
                          onInput={(e) => {
                            onInputNumberOnly(setValue, "phone", e);
                          }}/>
                          <i onClick={() => toggleEditing("phone")} 
                          className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="text" className="profile-input " placeholder="Dirección" name="name"
                          readOnly={!isEditing["address"]}/>
                          <i onClick={() => toggleEditing("address")}
                          className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex lg:space-x-4 ">
                      <div className="lg:w-1/2 w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="date" className="profile-input " placeholder="Fecha de nacimiento" name="name" />
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div> 
                      <div className="lg:w-1/2 w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type={`${password ? "text": "password"}`} className="profile-input " placeholder="Contraseña"
                          {...register("password")}
                          />
                          <i 
                          onClick={() => {setpassword(!password)}}
                          className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex lg:space-x-4 ">
                      <div className="lg:w-1/2 w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <div className="boton ">
                            <Link href="/v2/nosotros">CAMBIAR CONTRASEÑA</Link>
                          </div>

                        </div>
                      </div> 
                    </div>
                    <hr />
                    <h2 className="tituloh2">Fechas especiales</h2>
                    <div className="lg:flex lg:space-x-4 items-center">
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <p>Tu cumpleaños</p>
                        </div>
                      </div> 
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="text" className="profile-input " placeholder="Mes"
                          {...register("birthday_day")}
                          maxLength={2}
                          onInput={(e) => {
                          onInputNumberOnly1(setValue, "birthday_day", e);
                          }}/>
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div> 
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="text" className="profile-input " placeholder="Día"
                          {...register("birthday_month")}
                          maxLength={2}
                          onInput={(e) => {
                          onInputNumberOnly2(setValue, "birthday_month", e);
                          }}/>
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex lg:space-x-4 items-center">
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <p>Cumpleaños de tu pareja</p>
                        </div>
                      </div> 
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="text" className="profile-input " placeholder="Mes"
                          {...register("couple_month")}
                          maxLength={2}
                          onInput={(e) => {
                          onInputNumberOnly1(setValue, "couple_month", e);
                          }}/>
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div> 
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="text" className="profile-input " placeholder="Día"
                          {...register("couple_day")}
                          maxLength={2}
                          onInput={(e) => {
                            onInputNumberOnly2(setValue, "couple_day", e);
                          }}/>
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex lg:space-x-4 items-center mb-5">
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <p>Tu aniversario</p>
                        </div>
                      </div> 
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="text" className="profile-input " placeholder="Mes"
                          {...register("anniversary_month")}
                          maxLength={2}
                          onInput={(e) => {
                            onInputNumberOnly1(setValue, "anniversary_month", e);
                          }} />
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div> 
                      <div className="lg:w-1/3  w-full">
                        <div className="perfil__contenedor__center__card relative">
                          <input type="text" className="profile-input " placeholder="Día"
                          {...register("anniversary_day")}
                          maxLength={2}
                          onInput={(e) => {
                            onInputNumberOnly2(setValue, "anniversary_day", e);
                          }}/>
                          <i className="cursor-pointer icon-edit text-[#E1D4C4] text-[1.4rem] absolute top-[1.8rem] right-[1.5rem]"></i>
                        </div>
                      </div>
                    </div>
                    <div className='w-full'>
                      <p>
                        <b>Para solicitar tu factura electrónica, envía un correo a facturacion@sibaritta.com</b>
                      </p>
                    </div>
                  </div>
              </div>
              <div className="lg:w-1/4 w-full">
                <div className='perfil__contenedor__right'>
                  <Encuesta />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='perfil__insignias'>
          <div className='perfil__insignias__titulo'>
            <h2 className='tituloh2'>TUS INSIGNIAS</h2>
            <p>
              Sigue paso a paso tu progreso hasta convertirte en un Maestro Sibaritta
            </p>
            <select name="" id="">
              <option value="">Tus insignias</option>
              <option value="">Tus insignias 1</option>
              <option value="">Tus insignias 2</option>

            </select>
          </div>
          <div className='perfil__insignias__card'>
            <div className='container-general'>
              <div className='grid-cols-2	 grid lg:flex'>
                {
                  (infoData?.insignias && infoData.insignias.length > 0)
                  ? infoData.insignias.map((element, i) => (
                    < Insignia imageName={element?.imageName} key={i}/>
                  ))
                  : <>
                    <Insignia imageName={'ocultas'}/>
                    <Insignia imageName={'ocultas'}/>
                    <Insignia imageName={'ocultas'}/>
                  </>
                }
                {/* <div className='w-full lg:w-1/3'>
                  <div className='perfil__insignias__card__imagen '>
                    <img src={"/perfil/insignia2.png"} alt='logo' className='m-auto'/>
                  </div>
                </div>
                <div className='w-full lg:w-1/3'>
                  <div className='perfil__insignias__card__imagen '>
                    <img src={"/perfil/insignia3.png"} alt='logo' className='m-auto'/>
                  </div>
                </div>
                <div className='w-full lg:w-1/3'>
                  <div className='perfil__insignias__card__imagen '>
                    <img src={"/perfil/insignia4.png"} alt='logo' className='m-auto'/>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className='perfil__insignias__titulo perfil__insignias__titulo--2'>
            <p>
              insignias que puedes conquistar este mes
            </p>
          </div>
          <div className='perfil__insignias__card--2'> 
            <div className='container-general'>
              <div className='grid-cols-2	 grid lg:flex lg:w-2/3	m-auto items-center	'>
                <div className=' w-full lg:w-1/3'>
                  <div className='perfil__insignias__card__imagen '>
                    <img src={"/perfil/ocultas.png"} alt='logo' className='m-auto'/>
                  </div>
                </div>
                <div className=' w-full lg:w-1/3'>
                  <div className='perfil__insignias__card__imagen '>
                  <img src={"/perfil/ocultas.png"} alt='logo' className='m-auto'/>
                  </div>
                </div>
                <div className=' w-full lg:w-1/3'>
                  <div className='perfil__insignias__card__imagen '>
                  <img src={"/perfil/ocultas.png"} alt='logo' className='m-auto'/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className='w-full'>
              <div className="boton ">
                <Link href="#" className='m-auto'>¿CÓMO GANAS INSIGNIAS?</Link>
              </div>
          </div>
        </div>
      </div>
  )
}
function Insignia({imageName}) {
  return <div className='w-full lg:w-1/3'>
    <div className='perfil__insignias__card__imagen '>
      <Image src={`/perfil/${imageName || 'ocultas'}.png`} alt='logo' className='m-auto' width={300} height={300}/>
    </div>
  </div>;
}

