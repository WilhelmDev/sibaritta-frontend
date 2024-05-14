import { useRef } from "react";
import Image from "next/image";
import {
  FileUpload,
  FileUploadHeaderTemplateOptions,
  FileUploadOptions,
  FileUploadSelectEvent,
} from "primereact/fileupload";

function ImageUploadAndPreview({
  onSelect,
  onClear,
  onValidationFail,
  initialImgURL,
}: {
  onSelect: (e: FileUploadSelectEvent) => void;
  onClear: () => void;
  onValidationFail: (e: File) => void;
  initialImgURL?: string;
}) {
  const fileUpload = useRef<FileUpload>(null);

  const chooseOptions: FileUploadOptions = {
    icon: "none",
    iconOnly: false,
    label: "Subir imagen",
    style: {
      fontWeight: "semibold",
    },
    className:
      "w-[45%] bg-[#F89C53] [&_span]:font-lato [&_span]:font-semibold flex justify-center items-center [&_span]:text-[#252127] rounded-[1rem] h-[3rem] [&_span]:text-[1.2rem] laptop:h-[calc(4.4rem_*_var(--scale))] laptop:[&_span]:text-[calc(1.5rem_*_var(--scale))]",
  };

  const cancelOptions: FileUploadOptions = {
    icon: "none",
    iconOnly: false,
    label: "Borrar imagen",
    className:
      "w-[45%] bg-[#252127] hover:bg-[#706872] transition-all [&_span]:font-lato [&_span]:font-semibold flex justify-center items-center [&_span]:text-[#F89C53] rounded-[1rem] h-[3rem] [&_span]:text-[1.2rem] laptop:h-[calc(4.4rem_*_var(--scale))] laptop:[&_span]:text-[calc(1.5rem_*_var(--scale))]",
  };

  // Attempting to set initial image so it can be previewed
  //   if (initialImgURL) {
  //     downloadInitialImage(initialImgURL).then((initialImg) => {
  //       initialImg.path = initialImgURL;
  //       fileUpload.current?.setFiles([initialImg]);
  //     });
  //   }
  //

  return (
    <FileUpload
      ref={fileUpload}
      accept="image/*"
      maxFileSize={1000000}
      itemTemplate={itemTemplate}
      emptyTemplate={emptyTemplate}
      onSelect={onSelect}
      onClear={onClear}
      onValidationFail={onValidationFail}
      className="bg-[#2F2A30]"
      headerTemplate={headerTemplate}
      contentStyle={{ backgroundColor: "transparent" }}
      chooseOptions={chooseOptions}
      cancelOptions={cancelOptions}
      progressBarTemplate={() => null}
    />
  );
}

export default ImageUploadAndPreview;

//This is how the preview of the image will look like
const itemTemplate = (file: object) => {
  const { objectURL, name } = file as { objectURL: string; name: string };

  return (
    <div className="relative w-[130px] max-w-[130px] mx-auto h-[150px] tablet:w-[330px] tablet:max-w-[330px] tablet:h-[350px] bg-[#2F2A30]">
      <Image
        src={objectURL}
        alt={name}
        fill={true}
        className="object-contain object-center"
      />
    </div>
  );
};

//This is how the preview of the image will look like when no image is uploaded
const emptyTemplate = () => {
  return (
    <div
      className="mx-auto flex items-center justify-center w-[130px] h-[150px] tablet:w-[330px] tablet:h-[350px]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23E1D4C4FF' stroke-width='6' stroke-dasharray='6%2c 18' stroke-dashoffset='4' stroke-linecap='square'/%3e%3c/svg%3e")`,
        borderRadius: "10px",
      }}
    >
      <p className="text-[#E1D4C4] text-center font-lato text-[1.2rem] tablet:text-[1.6rem] laptop:text-[calc(2.2rem_*_var(--scale))]">
        Arrastra y Suelta una Imagen aquí
      </p>
    </div>
  );
};

const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
  const { className, chooseButton, cancelButton } = options;

  return (
    <div className={`bg-[#2F2A30] mb-4 flex justify-between ${className}`}>
      {chooseButton}
      {cancelButton}
    </div>
  );
};

//This function was supposed to be used to download initial image so it could be selected as the first preview image
// const downloadInitialImage = async (initialImgURL: string): Promise<File> => {
//   const response = await fetch(initialImgURL);
//   const imageBlob = await response.blob();

//   return new File([imageBlob], "initial_image", {
//     lastModified: Date.now(),
//     type: imageBlob.type,
//   });
// };
