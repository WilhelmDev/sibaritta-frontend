"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import { Suggestion } from "@/interface/suggestion.interface";
import { EditModalSuggestion } from "@/interface/partner/editModalSuggestion.interface";
import ImageUploadAndPreview from "./ImageUploadAndPreview";

function ViewAndEditSuggestionModal({
  show,
  close,
  onSubmit,
  chosenSuggestion,
}: {
  show: boolean;
  close: () => void;
  onSubmit: (suggestion: EditModalSuggestion) => void;
  chosenSuggestion: Suggestion | null;
}) {
  const [name, setName] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [price, setPrice] = useState<string | undefined>("");
  const [img, setImg] = useState<File | null | undefined>(null);
  const [imageDisabled, setImageDisabled] = useState<boolean>(true);
  const [nameDisabled, setNameDisabled] = useState<boolean>(true);
  const [descriptionDisabled, setDescriptionDisabled] = useState<boolean>(true);
  const [priceDisabled, setPriceDisabled] = useState<boolean>(true);

  const invertImageDisabledStatus = () => {
    setImageDisabled((previous) => !previous);
  };

  const invertNameDisabledStatus = () => {
    setNameDisabled((previous) => !previous);
  };

  const invertDescriptionDisabledStatus = () => {
    setDescriptionDisabled((previous) => !previous);
  };

  const invertPriceDisabledStatus = () => {
    setPriceDisabled((previous) => !previous);
  };

  useEffect(() => {
    if (show) return;

    setName("");
    setDescription("");
    setPrice("");
    setImg(null);
    setImageDisabled(true);
    setNameDisabled(true);
    setDescriptionDisabled(true);
    setPriceDisabled(true);
  }, [show]);

  useEffect(() => {
    setName(chosenSuggestion?.name);
    setDescription(chosenSuggestion?.description);
    setPrice(chosenSuggestion?.price.toString());
  }, [chosenSuggestion]);

  return (
    <Dialog
      visible={show}
      onHide={close}
      // dismissableMask={true} // uncomment this if you want to make the dialog dismissable by clicking outside of it
      closable={false}
      resizable={false}
      className="min-w-[20rem] max-w-screen-phone h-fit w-auto rounded-none bg-[#2F2A30] tablet:min-w-[704px] tablet:max-h-[500px] tablet:max-w-screen-tablet laptop:min-w-[1000px] laptop:max-w-screen-laptop desktop:max-w-screen-desktop"
    >
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();

          if (name == "") return;
          if (description == "") return;
          if (price == "" || price == null) return;

          const suggestion: EditModalSuggestion = {
            name,
            description,
            price: parseFloat(price),
            img: img == null ? undefined : img,
          };

          onSubmit(suggestion);
        }}
        className="flex flex-col gap-16 px-8 py-12 tablet:flex-row"
      >
        <ImageUploadAndPreview
          onSelect={(e) => {
            if (e.files.length === 0) return;
            setImg(e.files[0]);
          }}
          onClear={() => setImg(null)}
          onValidationFail={() => {
            setImg(null);
          }}
          initialImgURL={chosenSuggestion?.img}
        />
        <div className="flex flex-col gap-10 tablet:w-[60%]">
          <label
            htmlFor="edit_suggestion_name"
            className="flex flex-wrap justify-between gap-1 text-[#F89C53] font-lato text-[1.2rem] tablet:text-[1.6rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
          >
            Nombre
            <button type="button" onClick={invertNameDisabledStatus}>
              <Image
                src="/partners/lapiz-negro.png"
                alt="Editar campo"
                width={20}
                height={20}
                className={
                  nameDisabled
                    ? "text-[#E1D4C4] invert-[94%] sepia-[10%] saturate-[516%] hue-rotate-[335deg] brightness-[93%] contrast-[88%]"
                    : "text-[#fd9037] invert-[61%] sepia-[75%] saturate-[1062%] hue-rotate-[334deg] brightness-[102%] contrast-[98%]"
                }
              />
            </button>
            <div className="w-full"></div>
            <input
              id="edit_suggestion_name"
              type="text"
              name="suggestionName"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder={"Nombre de la sugerencia"}
              disabled={nameDisabled}
              className="w-[95%] p-1 text-[#E1D4C4] bg-[#706872] disabled:bg-transparent font-lato tablet:text-[1.2rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
              style={{ colorScheme: "dark" }}
            />
          </label>
          <label
            htmlFor="edit_suggestion_description"
            className="flex flex-wrap justify-between gap-1 text-[#F89C53] bg-[#2F2A30] font-lato text-[1.2rem] tablet:text-[1.6rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
          >
            Descripción
            <button type="button" onClick={invertDescriptionDisabledStatus}>
              <Image
                src="/partners/lapiz-negro.png"
                alt="Editar campo"
                width={20}
                height={20}
                className={
                  descriptionDisabled
                    ? "text-[#E1D4C4] invert-[94%] sepia-[10%] saturate-[516%] hue-rotate-[335deg] brightness-[93%] contrast-[88%]"
                    : "text-[#FD9037] invert-[61%] sepia-[75%] saturate-[1062%] hue-rotate-[334deg] brightness-[102%] contrast-[98%]"
                }
              />
            </button>
            <div className="w-full"></div>
            <textarea
              id="edit_suggestion_description"
              name="description"
              value={description}
              rows={4}
              onChange={(e) => setDescription(e.currentTarget.value)}
              placeholder={"Descripción de la sugerencia"}
              disabled={descriptionDisabled}
              className="w-[95%] p-1 text-[#E1D4C4] bg-[#706872] disabled:bg-transparent font-lato tablet:text-[1.2rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
              style={{ colorScheme: "dark" }}
            />
          </label>
          <label
            htmlFor="edit_suggestion_price"
            className="flex flex-wrap justify-between gap-1 text-[#F89C53] bg-[#2F2A30] font-lato text-[1.2rem] tablet:text-[1.6rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
          >
            Precio
            <button type="button" onClick={invertPriceDisabledStatus}>
              <Image
                src="/partners/lapiz-negro.png"
                alt="Editar campo"
                width={20}
                height={20}
                className={
                  priceDisabled
                    ? "text-[#E1D4C4] invert-[94%] sepia-[10%] saturate-[516%] hue-rotate-[335deg] brightness-[93%] contrast-[88%]"
                    : "text-[#FD9037] invert-[61%] sepia-[75%] saturate-[1062%] hue-rotate-[334deg] brightness-[102%] contrast-[98%]"
                }
              />
            </button>
            <div className="w-full"></div>
            <input
              id="edit_suggestion_price"
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.currentTarget.value)}
              placeholder={"Precio de la sugerencia"}
              disabled={priceDisabled}
              className="w-[95%] p-1 text-[#E1D4C4] bg-[#706872] disabled:bg-transparent font-lato tablet:text-[1.2rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
              style={{ colorScheme: "dark" }}
            />
          </label>
          <div className="mt-auto flex justify-between">
            <button className="w-[15rem] bg-[#F89C53] font-lato font-semibold flex justify-center items-center text-[#252127] rounded-[1rem] h-[3rem] text-[1.2rem] laptop:h-[calc(4.4rem_*_var(--scale))] laptop:text-[calc(1.5rem_*_var(--scale))] laptop:w-[calc(27rem_*_var(--scale))]">
              Guardar
            </button>
            <button
              className="w-[15rem] font-lato font-semibold flex justify-center items-center text-[#F89C53] hover:bg-[#706872] transition-all rounded-[1rem] h-[3rem] text-[1.2rem] laptop:h-[calc(4.4rem_*_var(--scale))] laptop:text-[calc(1.5rem_*_var(--scale))] laptop:w-[calc(27rem_*_var(--scale))]"
              type="button"
              onClick={close}
            >
              Cerrar
            </button>
          </div>
        </div>
      </form>
    </Dialog>
  );
}

export default ViewAndEditSuggestionModal;
