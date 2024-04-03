import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { CreateSuggestions } from "@/services/partnersSuggestion.service";
import { toast } from "sonner";
import Image from "next/image";

function Index() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [nombre, setNombre] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const suggestionCreate = async () => {
    try {
      const userLogin = localStorage.getItem("userid");
      const formData = new FormData();
      
      if (imageFile !== null) {
        formData.append("files", imageFile);
      }
      
      formData.append("name", nombre);
      formData.append("description", description);
      formData.append("regular_price", price);
      formData.append("fk_user_id", userLogin || "");
      formData.append("fk_partner_id", "2");
      formData.append("files", imageFile || "");
     
      const data = await CreateSuggestions(formData);
      
      if (data.success === true) {
        toast("creacion de sugerencia creada", {
          unstyled: true,
          classNames: {
            toast: "bg-[#252127]  w-full  h-[5rem] rounded-[1rem] flex items-center justify-center text-[#F89C53] shadow-[1px_1px_1px_#E1D4C4] font-lato",
            title: " text-[2rem]  ",
          },
          position: "top-center",
        });
        setNombre("");
        setDescription("");
        setPrice("");
        setImageFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deteleSuggestion = () => {
    setNombre("");
    setDescription("");
    setPrice("");
    setImageFile(null);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <section className="w-full h-full grid place-items-center mt-[23rem] laptop:mt-0 p-[2rem]">
      <article className="suggestion_box">
        <div className="suggestion-form">
          <div className="suggestion-form-file">
            <div className={`relative h-full w-full border-[#A99E92] border ${imageFile && "border-none"}`}>
              {imageFile && (
                <Image src={imageFile ? URL.createObjectURL(imageFile) : ""} alt="" className="w-full h-full object-cover " width={1000} height={1000}/>
              )}

              <div className="absolute top-[45%] left-[30%] tablet:left-[40%] cursor-pointer ">
                <Dropzone onDrop={handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div className="" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className={`${imageFile && "hidden"} text-[#ffffff] font-lato font-bold text-[2rem]  `}>
                        Subir Imagen
                      </p>
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>
          </div>

          <div className="suggestion-form-data">
            <div className="suggestion-form-data-nombre">
              <div className="flex justify-between items-center ">
                <h5>Nombre</h5>
              </div>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                placeholder="Tacos"
              />
            </div>

            <div className="suggestion-form-description">
              <div className="flex justify-between items-center ">
                <h5>Descripción</h5>
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="textarea"
                cols={5}
                rows={5}
                placeholder="description del producto"
              ></textarea>
            </div>

            <div className="suggestion-form-price">
              <div className="flex justify-between items-center ">
                <h5>Precio</h5>
              </div>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="$600"
              />
            </div>

            <div className="suggestion-form-btns">
              <button onClick={suggestionCreate}>Guardar</button>
              <h5 onClick={deteleSuggestion}>Eliminar</h5>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Index;
