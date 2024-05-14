import { IUser } from "@/interface/user.interface";
import { getUserById } from "@/services/login.services";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { updatePerfil } from "@/services/partnerPerfil.service";
import { toast } from "sonner";
import Camera from "@/components/ui/icons/Camera";
import { onInputNumberOnly } from "@/lib/formUtils";
import { emailPattern } from "@/lib/formUtils";
import { useRouter } from "next/router";
import perfilPartnerGeneral from "@/components/perfilPartnerGeneral/PerfilPartnerGeneral";
import PerfilPartnerGeneral from "@/components/perfilPartnerGeneral/PerfilPartnerGeneral";
import TTSibarita from "@/public/admin/TT Sibaritta.jpg"

interface EditingState {
  [key: string]: boolean;
}
function Index() {
  const [isEditing, setIsEditing] = useState<EditingState>({});
  const [imageFile, setImageFile] = useState<File | null >(null);
  const [infoData, setinfoData] = useState<IUser>();

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

  let userId: any = null as any;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("userid");
    userId = storedUserId ? parseInt(storedUserId, 10) : null;
  }


  const resetEditingState = () => {
    setIsEditing({});
  };
  const getUserByIds = async () => {
    try {
      const rest = await getUserById(userId);
      setinfoData(rest.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updatePerfilPartner = async (dts: any) => {

    try {
      const formData = new FormData();
      if (imageFile !== null as any) {
        formData.append("files", imageFile as Blob);
      }
      formData.append("fk_user_id", userId);
      formData.append("responsable_name", dts.responsable_name);
      formData.append("business_email", dts.business_email);
      formData.append("phone1", dts.phone1);
      formData.append("description", dts.description);
      formData.append("curp", dts.curp);
      formData.append("commission", dts.commission);
      const perfilUpdateChild = await updatePerfil(
        infoData?.partner?.id,
        formData
      );

      toast("Datos actualizado", {
        unstyled: true,
        classNames: {
          toast:
            "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
          title: "text-[2rem]",
        },
        position: "top-center",
      });
      resetEditingState();
      getUserByIds();
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {}, [infoData]);

  const toggleEditing = (inputName: string): void => {
    setIsEditing((prev: EditingState) => ({
      ...prev,
      [inputName]: !prev[inputName],
    }));
  };

  useEffect(() => {
    reset({
      avatar: infoData?.avatar || imageFile,
      responsable_name: infoData?.partner?.responsable_name,
      phone1: infoData?.partner?.phone1,
      description: infoData?.partner?.description,
      business_email: infoData?.partner?.business_email,
      curp: infoData?.partner?.curp,
      address: infoData?.partner?.address,
      commission: infoData?.partner?.commission,
    });
  }, [infoData]);

  const router = useRouter();

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser"); 
    user_id === "1" ? router.push("/") : "";
    // user_id === "2"?router.push("/home_partner"):"";
    user_id === "3" ? router.push("/admin/admin_home") : "";
  };

  useEffect(() => {
    if (userId!) {
      getUserByIds();
    }
    SecurityPrivileges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setImageFile(file);
    }
  };
  let type_user = null as any;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("fk_typeuser");
    type_user = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const commission = infoData?.partner?.commission;

  const dataProps = {
    handleSubmit: handleSubmit,
    updatePerfilPartner: updatePerfilPartner,
    imageFile: imageFile,
    infoData: infoData,
    handleDrop: handleDrop,
    register: register,
    isEditing: isEditing,
    toggleEditing: toggleEditing,
    setValue: setValue,
    errors: errors,
    type_user: type_user, 
    commission:commission,
    setError:setError

  };
  return (
    <>
      <PerfilPartnerGeneral dataProps={dataProps} />
    </>
  );
}

export default Index;
