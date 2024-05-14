import Camera from "@/components/ui/icons/Camera";
import { IUser } from "@/interface/user.interface";
import { emailPattern, onInputNumberOnly } from "@/lib/formUtils";
import {
  createPartner,
  partner_sendemail,
  updatePerfil,
} from "@/services/partnerPerfil.service";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { toast } from "sonner";
import PerfilPartnerGeneral from "@/components/perfilPartnerGeneral/PerfilPartnerGeneral";

interface EditingState {
  [key: string]: boolean;
}

function Index() {
  const [isEditing, setIsEditing] = useState<EditingState>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [infoData, setinfoData] = useState<IUser>();
  const [responseId, setresponseId] = useState(0);

  const router = useRouter();

  const SecurityPrivileges = () => {
    const user_id = localStorage.getItem("fk_typeuser");

    user_id === "1" ? router.push("/") : "";
    user_id === "2" ? router.push("/home_partner") : "";
    // user_id === "3" ? router.push("/admin/admin_home") : "";
  };

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
        id: responseId,
        callback_url: "http://localhost:3000/recovery",
      };

      const perfilCreate = await partner_sendemail(formData);
      if (perfilCreate.success === true) {
        toast("Invitacion enviada  exitosamente", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
            title: "text-[2rem]",
          },
          position: "top-center",
        });
      } else {
        toast("ya existe un usuario con el correo", {
          unstyled: true,
          classNames: {
            toast:
              "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
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

  const createPartners = async (data: any) => {
 

    try {
      const formData = {
        full_name: data.full_name,
        comercial_name: data.full_name,
        rfc: data.rfc,
        responsable_name: data.responsable_name,
        phone1: data.phone1,
        description: data.description,
        business_email: data.business_email,
        curp: data.curp,
        address: data.address,
        commission: parseInt(data.commission),
      };

      const perfilCreate = await createPartner(formData);

      setresponseId(perfilCreate.data.id);

      toast("Creado exitosamente", {
        unstyled: true,
        classNames: {
          toast:
            "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] ",
          title: "text-[2rem]",
        },
        position: "top-center",
      });
      resetEditingState();
      reset();
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    SecurityPrivileges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let type_user = null as any;
  if (typeof window !== "undefined") {
    const storedUserId = localStorage.getItem("fk_typeuser");
    type_user = storedUserId ? parseInt(storedUserId, 10) : null;
  }

  const pathname = router.pathname;

  const dataProps = {
    handleSubmit: handleSubmit,
    imageFile: imageFile,
    infoData: infoData,
    handleDrop: handleDrop,
    createPartners: createPartners,
    register: register,
    isEditing: isEditing,
    toggleEditing: toggleEditing,
    setValue: setValue,
    errors: errors,
    type_user: type_user,
    pathname: pathname,
    sendEmail: sendEmail,
  };

  

  return (
    <>
      <PerfilPartnerGeneral dataProps={dataProps} />
    </>
  );
}

export default Index;
