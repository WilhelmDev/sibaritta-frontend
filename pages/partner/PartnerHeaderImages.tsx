import Dropzone from "react-dropzone";
import Image from "next/image";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { useState } from "react";

interface PartnerHeaderImages {
  dataPartnerHeader: any;
}

const PartnerHeaderImages = ({
  dataPartnerHeader,
  title,
  setTitle,
  description,
  setDescription,
  setImageFil1,
  setImageFile,
  imageFile1,
  imageFile,
  setImageFilearr,
  imageFilearr,
  setTitleError,
  setDescriptionError,
  titleError,
  descriptionError,
}: any) => {
  
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageUrl1, setImageUrl1] = useState<string>("");

  const handleInputChange = (event: any) => {
    const value = event.target.value;

    setTitle(value);
    if (!value) {
      setTitleError(() => "Este campo es requerido");
    } else {
      setTitleError(() => "");
    }
  };

  const handleInputText = (event: any) => {
    // Actualizar el estado con el valor actual del campo de entrada
    const value = event.target.value;
    setDescription(value);
    if (!value) {
      setDescriptionError(() => "Este campo es requerido");
    } else {
      setDescriptionError(() => "");
    }
  };

  const handleDrop = (acceptedFiles: any) => {
    setImageFile(acceptedFiles[0]);
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setImageUrl(imageUrl);
  };

  const handleDrop1 = (acceptedFiles: any) => {
    setImageFil1(acceptedFiles[0]);
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setImageUrl1(imageUrl);
  };

  const deleteImage = () => {
    setImageUrl("");
    setImageFile(null);
  };
  const deleteImage1 = () => {
    setImageUrl1("");
    setImageFil1(null);
  };

  const [imageUrls, setImageUrls] = useState<any[]>([]);

  // Función para manejar la caída de archivos
  const handleDrop2 = (acceptedFiles: any) => {
    // Limitar la cantidad de imágenes a 5
    if (imageUrls.length + acceptedFiles.length > 8) {
      alert("No se pueden subir más de 8 imágenes.");
      return;
    }

    // Crear una URL para cada imagen aceptada y almacenarlas en el estado
    const newImageUrls = acceptedFiles.map((file: any) =>
      URL.createObjectURL(file)
    );
    setImageUrls([...imageUrls, ...newImageUrls]);
    setImageFilearr([...imageFilearr, ...acceptedFiles]);
  };

  return (
    <div className="PartnerHeaderImages">
      <h3 className="experiencia-home_textb">Nueva experiencia</h3>
      <div className="content-imageb">
        <h5 className="content-image_titleb">Titulo de la experiencia</h5>
        <div className="image_title_datab-container">
          <div className="image_title_datab">
            <div className="title_data_inputb">
              <input type="text" value={title} onChange={handleInputChange} />
              {titleError !== "" && (
                <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  font-lato">
                  Este campo es requerido
                </span>
              )}
              <button
                className="title_data-btnb"
                onClick={() => dataPartnerHeader?.setAuxTitle(false)}
              >
                <PiPencilSimpleLineLight />
              </button>
            </div>
            <div className="title_data-aprobacionb">
              <div> pendiente de aprobacion</div>
              <div className="data-aprobacion_flagb"></div>
            </div>
          </div>
          <div className="content-image_bodya">
            <h4 className="content-image_bodya-text-top">Fotos para el Home</h4>
            <div className="content-image_bodya-main ">
              <div className="content-image_bodya-main-1">
                <h5>Foto vertical</h5>

                <div className="content-image_bodya-main-1-image-container content-image_bodya-main-1-image-1 border-dashed border-[1.5px]  overflow-hidden">
                  {imageFile ? (
                    <Image
                      alt=""
                      src={imageUrl ? imageUrl : ""}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover    "
                    />
                  ) : (
                    <div className="content-image_bodya-main-1-image-1">
                      <Dropzone onDrop={handleDrop}>
                        {({ getRootProps, getInputProps }) => (
                          <>
                            <input {...getInputProps()} />
                            <div
                              className="w-full h-[40rem] laptop:h-full  justify-center flex items-center"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="w-[2.3rem] h-[2.3rem] !text-white">
                                {" "}
                              </div>
                            </div>
                          </>
                        )}
                      </Dropzone>
                    </div>
                  )}
                </div>
              </div>
              <div className="content-image_bodya-main-2 ">
                <h5>Foto horizontal</h5>

                <div className="content-image_bodya-main-2-image-container       content-image_bodya-main-1-image-2  border-dashed border-[1.5px] overflow-hidden ">
                  {imageFile1 ? (
                    <Image
                      alt=""
                      src={imageUrl1 ? imageUrl1 : ""}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="content-image_bodya-main-1-image-2">
                      <Dropzone onDrop={handleDrop1}>
                        {({ getRootProps, getInputProps }) => (
                          <>
                            <input {...getInputProps()} />
                            <div
                              className="w-full  h-[40rem] laptop:h-full   justify-center flex items-center"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="w-[2.3rem] h-[2.3rem] !text-white"></div>
                            </div>
                          </>
                        )}
                      </Dropzone>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="content-image_bodyb">
            <h5>Fotos de Experiencia</h5>
            <div className="image_body-galeryb">
              <div className="body-galery_primaryb  laptop:!w-[60rem]  border-dashed border-[1.5px]  overflow-hidden">
                {imageUrls[0] && (
                  <Image
                    src={
                      imageUrls[0]
                        ? imageUrls[0]
                        : "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                    }
                    width={1000}
                    height={1000}
                    className={"w-full h-full rounded-t-[1rem] overflow-hidden"}
                    alt=""
                  />
                )}
              </div>
              <div className="content-aux_galeryb">
                <div className="body-galery_listb grid grid-cols-1  laptop:grid  laptop:grid-cols-4">
                  {imageUrls.slice(1).map((el: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="body-galery_secundaryb   border-dashed border-[1.5px] overflow-hidden "
                      >
                        <Image
                          src={el}
                          width={1000}
                          height={1000}
                          className={"galery_primary-imgb"}
                          alt=""
                        />
                      </div>
                    );
                  })}

                  <div className="body-galery_secundaryb body-galery_secundaryb-editar-galeria">
                    <div className="galery_secundaryb  border-dashed border-[1.5px]">
                      <Dropzone onDrop={handleDrop2}>
                        {({ getRootProps, getInputProps }) => (
                          <>
                            <div {...getRootProps()}>
                              <div className="galery_secundary-textb">
                                Agregar galeria &nbsp; &nbsp; <FaPen />
                              </div>

                              <input {...getInputProps()} />
                            </div>
                          </>
                        )}
                      </Dropzone>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image_body-descriptionb !gap-[1rem]  ">
              <div className="image_body-descriptionb_top">
                <span className="body_description_titleb">Descripción</span>
                <PiPencilSimpleLineLight className="w-[2.4rem] h-auto " />
              </div>
              <textarea
                className="body_description_textb !bg-[#25212740] rounded-sm !text-[#f89c53] p-[1rem]"
                value={description}
                onChange={handleInputText}
              />
              {descriptionError !== "" && (
                <span className=" text-[1rem] laptop:text-[1.2rem] text-red-600  font-lato">
                  Este campo es requerido
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHeaderImages;
