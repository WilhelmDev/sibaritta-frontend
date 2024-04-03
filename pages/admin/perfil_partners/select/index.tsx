import SearchSocio from "@/components/admin/SearchSocio";
import Camera from "@/components/ui/icons/Camera";
import { IUser } from "@/interface/user.interface";
import { baseApi } from "@/lib/baseApi";
import { emailPattern, onInputNumberOnly } from "@/lib/formUtils";
import { getPartAll, getPartById } from "@/services/admin/admin.service";
import { getUserById } from "@/services/login.services";
import {
  partner_sendemail,
  updatePerfil,
} from "@/services/partnerPerfil.service";
import getConfig from "@/utils/getConfig";
import { GetStaticProps } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/router";
import PerfilPartnerGeneral from "@/components/perfilPartnerGeneral/PerfilPartnerGeneral";
// import PerfilPartnerGeneral from "@/components/perfilPartnerGeneral/perfilPartnerGeneral";

interface EditingState {
  [key: string]: boolean;
}

function Index() {
  const [isEditing, setIsEditing] = useState<EditingState>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [infoData, setinfoData] = useState<any>();
  const [dataPartne, setdataPartne] = useState<any>();
  const [partId, setpartId] = useState(0);
  const [responseId, setresponseId] = useState(0);


  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setError,
    setValue,
  } = useForm({
    mode: "onChange",
  });


  let userId: any = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const { asPath } = useRouter();

  const resetEditingState = () => {
    setIsEditing({});
  };

  const toggleEditing = (inputName: string): void => {
    setIsEditing((prev: EditingState) => ({
      ...prev,
      [inputName]: !prev[inputName],
    }));
  };

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
     
      setImageFile(file);
    }
  };



  const sendEmail = async () => {
    try {
      const formData = {
        id: partId,
        callback_url: "http://localhost:3000/recovery",
      };

      const perfilCreate = await partner_sendemail(formData);
      if (perfilCreate.success === true) {
        toast("Invitacion enviada  exitosamente", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] font-lato",
            title: "text-[2rem]",
          },
          position: "top-center",
        });
      } else {
        toast("ya existe un usuario con esta cuenta", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] font-lato",
            title: "text-[2rem]",
          },
          position: "top-center",
        });
      }

      resetEditingState();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const updatePerfilPartner = async (dts: any) => {
    try {
      const formData = new FormData();
      if (imageFile !== null) {
        formData.append("files", imageFile);
      }
      const id =
        asPath === "/admin/perfil_partners/select"
          ? partId
          : infoData?.partner?.id;
      formData.append("fk_user_id", userId);
      formData.append("responsable_name", dts.responsable_name);
      formData.append("business_email", dts.business_email);
      formData.append("phone1", dts.phone1);
      formData.append("description", dts.description);
      formData.append("curp", dts.curp);
      formData.append("commission", dts.commission);



      const perfilUpdateChild = await updatePerfil(id, formData);


      if (perfilUpdateChild.success === true) {
        toast("Datos actualizado", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] font-lato",
            title: "text-[2rem]",
          },
          position: "top-center",
        });
      } else {
        toast("Hubo un error al actualizar los datos", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] font-lato",
            title: "text-[2rem]",
          },
          position: "top-center",
        });
      }
      resetEditingState();
      getUserByIds();
    } catch (error) {
      console.log(error);
    }
  };

  const allPartner = async () => {
    try {
      const { data } = await getPartAll();

      

      setdataPartne(
        data.map((pa: any) => {
          return {
            id: pa.id,
            names: pa.full_name,
            photo: pa.avatar,
            idUser: pa.user.id,
          };
        })
      );
      setpartId(data[0].id);
    } catch (error) {}
  };

  const getUserByIds = async () => {
    try {
      const rest = await getPartById(partId!);
      setresponseId(rest.data.id);
      setinfoData(rest.data);
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");

    user_id === "1" ? router.push("/") : "";
    user_id === "2" ? router.push("/home_partner") : "";
    // user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    allPartner();
    SecurityPrivileges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getUserByIds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partId]);
  useEffect(() => {
    reset({
      avatar: infoData?.avatar || imageFile,
      responsable_name: infoData?.responsable_name,
      phone1: infoData?.phone1,
      description: infoData?.description,
      business_email: infoData?.business_email,
      curp: infoData?.curp,
      address: infoData?.address,
      commission: infoData?.commission,
    });
  }, [infoData]);

  let type_user = null;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("fk_typeuser");
    type_user = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const pathname = router?.pathname;
  const commission = infoData?.commission;

  const dataProps = {
    handleSubmit: handleSubmit,
    imageFile: imageFile,
    infoData: infoData,
    handleDrop: handleDrop,
    updatePerfilPartner: updatePerfilPartner,
    register: register,
    isEditing: isEditing,
    toggleEditing: toggleEditing,
    setValue: setValue,
    errors: errors,
    type_user: type_user,
    pathname: pathname,
    dataPartne: dataPartne,
    setpartId: setpartId,
    sendEmail: sendEmail,
    commission:commission,
  };

  return (
    <>
      <PerfilPartnerGeneral dataProps={dataProps} />
    </>
  );
}

export default Index;
