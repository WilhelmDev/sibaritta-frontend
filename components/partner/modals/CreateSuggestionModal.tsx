import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { CreateModalSuggestion } from "@/interface/partner/createModalSuggestion.interface";
import ImageUploadAndPreview from "./ImageUploadAndPreview";

function CreateSuggestionModal({
  show,
  close,
  onSubmit,
}: {
  show: boolean;
  close: () => void;
  onSubmit: (suggestion: CreateModalSuggestion) => void;
}) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);

  useEffect(() => {
    if (show) return;

    setName("");
    setDescription("");
    setPrice("");
    setImg(null);
  }, [show]);

  return (
    <Dialog
      visible={show}
      onHide={close}
      //dismissableMask={true} // uncomment this if you want to make the dialog dismissable by clicking outside of it
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
          if (price == "") return;
          if (img == null) return;

          const suggestion: CreateModalSuggestion = {
            name,
            description,
            price: parseFloat(price),
            img,
            partnerId: parseInt(
              localStorage.getItem("fk_partner_id") as string,
              10
            ),
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
        />
        <div className="flex flex-col gap-10 tablet:w-[60%]">
          <label className="flex flex-wrap justify-between gap-1 text-[#F89C53] font-lato text-[1.2rem] tablet:text-[1.6rem] laptop:text-[calc(2.2rem_*_var(--scale))]">
            Nombre
            <input
              type="text"
              name="suggestionName"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder={"Nombre de la sugerencia"}
              className="w-[95%] p-1 text-[#E1D4C4] bg-[#706872] font-lato tablet:text-[1.2rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
              style={{ colorScheme: "dark" }}
            />
          </label>
          <label className="flex flex-wrap justify-between gap-1 text-[#F89C53] bg-[#2F2A30] font-lato text-[1.2rem] tablet:text-[1.6rem] laptop:text-[calc(2.2rem_*_var(--scale))]">
            Descripción
            <textarea
              name="description"
              value={description}
              rows={4}
              onChange={(e) => setDescription(e.currentTarget.value)}
              placeholder={"Descripción de la sugerencia"}
              className="w-[95%] p-1 text-[#E1D4C4] bg-[#706872] font-lato tablet:text-[1.2rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
              style={{ colorScheme: "dark" }}
            ></textarea>
          </label>
          <label className="flex flex-wrap justify-between gap-1 text-[#F89C53] bg-[#2F2A30] font-lato text-[1.2rem] tablet:text-[1.6rem] laptop:text-[calc(2.2rem_*_var(--scale))]">
            Precio
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.currentTarget.value)}
              placeholder={"Precio de la sugerencia"}
              className="w-[95%] p-1 text-[#E1D4C4] bg-[#706872] font-lato tablet:text-[1.2rem] laptop:text-[calc(2.2rem_*_var(--scale))]"
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
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </Dialog>
  );
}

export default CreateSuggestionModal;
