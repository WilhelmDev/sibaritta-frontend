"use client";
import ModalSugesstions from "@/components/partner/modals/ModalSugesstions";
import { allSuggestionPartner } from "@/services/partner/partnerSugesstion.service";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Modal from "@/components/molecules/Modal";
import Image from "next/image";

interface ImageFromBackend {
  id: number;
  filename: string;
  mimetype: string;
  resolution: string;
  alt: string;
  description: string;
  path: string;
  fk_suggestion_id: number;
  fk_user_id: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Suggestion {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  alt: string;
}

interface SuggestionResponse {
  success: boolean;
  total: number;
  data: {
    id: number;
    name: string;
    description: string;
    regular_price: string;
    status: string;
    fk_partner_id: number;
    images: ImageFromBackend[];
  }[];
}

type CreateModalSuggestion = FormData & {
  name: string;
  description: string;
  price: number;
  img: Blob;
  partnerId: number;
};

// const mockedSuggestion: Suggestion = {
//   id: 1,
//   name: "Sugerencia 1",
//   description: "Descripcion de la sugerencia 1",
//   price: 100,
//   img: "/prueba.jpg",
// };

export default function Index() {
  const [suggestions, setSuggestions] = useState<any>();
  const [dataModal, setDataModal] = useState<any>();
  const [suggestionsAmount, setSuggestionsAmount] = useState<number>(3);
  const [viewSuggestionsModal, setViewSuggestionsModal] =
    useState<boolean>(false);
  const [showCreateSuggestionModal, setShowCreateSuggestionModal] =
    useState<boolean>(false);
  const [showViewAndEditSuggestionModal, setShowViewAndEditSuggestionModal] =
    useState<boolean>(false);
  const [chosenSuggestion, setChosenSuggestion] = useState<Suggestion | null>(
    null
  );
  const [newSuggestionFormData, setNewSuggestionFormData] =
    useState<CreateModalSuggestion | null>(null);
  const [nameDisabled, setNameDisabled] = useState<boolean>(true);
  const [descriptionDisabled, setDescriptionDisabled] = useState<boolean>(true);
  const [priceDisabled, setPriceDisabled] = useState<boolean>(true);

  const openViewAndEditSuggestionModal = () => {
    setShowViewAndEditSuggestionModal(true);
  };

  const closeViewAndEditSuggestionModal = () => {
    setShowViewAndEditSuggestionModal(false);
  };

  const openCreateSuggestionModal = () => {
    setShowCreateSuggestionModal(true);
  };

  const closeCreateSuggestionModal = () => {
    setShowCreateSuggestionModal(false);
  };

  const handleCreateSuggestionModalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { suggestionName, description, price, img } =
      Object.fromEntries(formData);

    const newSuggestionFormData = {
      ...formData,
      name: suggestionName as string,
      description: description as string,
      price: parseFloat(price as string),
      img: img as Blob,
      partnerId: parseInt(localStorage.getItem("fk_partner_id") as string, 10),
    };

    // console.log(newSuggestionFormData);

    setNewSuggestionFormData(newSuggestionFormData);
  };

  useEffect(() => {
    if (newSuggestionFormData) {
      const formData = new FormData();
      formData.append("name", newSuggestionFormData.name);
      formData.append("description", newSuggestionFormData.description);
      formData.append("regular_price", newSuggestionFormData.price.toString());
      formData.append("files", newSuggestionFormData.img);
      formData.append(
        "fk_partner_id",
        newSuggestionFormData.partnerId.toString()
      );
      formData.append("fk_user_id", "1");
      formData.append("alt", "alt text");

      // let key: keyof typeof newSuggestionFormData;
      // for (key in newSuggestionFormData) {
      //   const value = newSuggestionFormData[key];
      //   if (typeof value === "number") {
      //     if (key === "partnerId") {
      //       formData.append("fk_partner_id", value.toString());
      //       continue;
      //     }
      //     if (key === "price") {
      //       formData.append("regular_price", value.toString());
      //       continue;
      //     }
      //     formData.append(key, value.toString());
      //     continue;
      //   }
      //   if (value instanceof Blob) {
      //     formData.append("files", value);
      //     continue;
      //   }
      //   formData.append(key, value);
      // }

      console.log(Object.fromEntries(formData));

      fetch(`${process.env.NEXT_PUBLIC_URL}/v1/suggestion/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          getPartnerSuggestions();
          closeCreateSuggestionModal();
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    }
  }, [newSuggestionFormData]);

  const closeViewSuggestionsModal = () => {
    setViewSuggestionsModal(false);
  };

  const getPartnerSuggestions = async () => {
    let partnerId = null;
    if (typeof window !== "undefined") {
      const storedPartnerId = localStorage.getItem("fk_partner_id");
      partnerId = storedPartnerId ? parseInt(storedPartnerId, 10) : null;
    }
    try {
      const { data } = await allSuggestionPartner(
        partnerId,
        0,
        suggestionsAmount
      );
      setSuggestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPartnerSuggestion = async (
    suggestionId: number
  ): Promise<Suggestion | undefined> => {
    try {
      const storedPartnerId = localStorage.getItem("fk_partner_id");
      const partnerId = storedPartnerId ? parseInt(storedPartnerId, 10) : null;

      if (partnerId == null) {
        throw Error("No partner id found");
      }

      fetch(`http://localhost:8000/api/v1/suggestion_partner/${partnerId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((suggestionsResponseJson: SuggestionResponse) => {
          console.log(suggestionsResponseJson);
          const suggestionResponseJson = suggestionsResponseJson.data.find(
            (suggestion) => suggestion.id === suggestionId
          );

          if (suggestionResponseJson == null) {
            throw Error("No suggestion found with id:" + suggestionId);
          }

          const largeImage = suggestionResponseJson.images.find(
            (image) => image.resolution === "large"
          );

          let img = suggestionResponseJson.images[0].path;
          let alt = suggestionResponseJson.images[0].alt;

          if (largeImage) {
            img = largeImage.path;
            alt = largeImage.alt;
          }

          const suggestion: Suggestion = {
            id: suggestionResponseJson.id,
            name: suggestionResponseJson.name,
            description: suggestionResponseJson.description,
            price: parseFloat(suggestionResponseJson.regular_price),
            img,
            alt,
          };

          setChosenSuggestion(suggestion);
        });
    } catch (e) {
      console.log(e);
    }
    return;
  };

  useEffect(() => {
    getPartnerSuggestions();
  }, [suggestionsAmount]);

  return (
    <div className="list_suggestions_box main-page">
      <div className="box_suggestion_list_box ">
        <div className="list_suggestion_title ">
          <h2 className=" ">Sugerencias Sibaritta</h2>
          <button
            className="list_suggestion_btn"
            onClick={openCreateSuggestionModal}
          >
            + Crear Sugerencia
          </button>
        </div>

        <div className="box_all_suggestion_and_dates">
          {suggestions?.map((sugges: any) => (
            <div key={sugges?.id} className="suggestion-asset_all main-page">
              <h2 className="h2-h2">{sugges?.name}</h2>
              <div className="suggestion-asset_all-price_btns">
                <div className="suggestion_asset-price">
                  <h2>Precio</h2>
                  <h3>${sugges?.regular_price}</h3>
                </div>

                <div className="suggestion-asset_btns_all">
                  <button
                    onClick={() => {
                      openViewAndEditSuggestionModal();
                      getPartnerSuggestion(sugges?.id);
                    }}
                  >
                    Ver
                  </button>
                  <div className="suggestion_activo ">
                    <p>{sugges?.status}</p>
                    <div className="w-[1rem] h-[1rem] rounded-full bg-[#07FD11] tablet:w-[1.5rem] tablet:h-[1.5rem]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="paginations_list_sugessstion ">
          <h3
            onClick={() => setSuggestionsAmount(suggestionsAmount + 3)}
            className=""
          >
            Ver más
          </h3>
        </div>
      </div>

      <ModalSugesstions
        suggestions={dataModal}
        visible={viewSuggestionsModal}
        closeModal={closeViewSuggestionsModal}
      />

      {/* CreateSuggestionModal */}
      <Modal
        visible={showCreateSuggestionModal}
        closeModal={closeCreateSuggestionModal}
      >
        <form
          encType="multipart/form-data"
          style={{ fontSize: 16 }}
          onSubmit={(e) => handleCreateSuggestionModalSubmit(e)}
        >
          <div>
            <label>
              Imagen
              <input type="file" name="img" />
            </label>
          </div>
          <label>
            Nombre
            <input type="text" name="suggestionName" placeholder={"Hola"} />
          </label>
          <label>
            Descripción
            <input type="text" name="description" placeholder={"Hola"} />
          </label>
          <label>
            Precio
            <input type="text" name="price" placeholder={"Hola"} />
          </label>
          <button>Guardar</button>
        </form>
        <button
          style={{ fontSize: 16 }}
          type="button"
          onClick={closeCreateSuggestionModal}
        >
          Cancelar
        </button>
      </Modal>

      {/* ViewAndEditSuggestionModal */}
      <Modal
        visible={showViewAndEditSuggestionModal}
        closeModal={closeViewAndEditSuggestionModal}
      >
        <form
          encType="multipart/form-data"
          style={{ fontSize: 16 }}
          onSubmit={(e) => alert("Actualizar sugerencia :D")}
        >
          <div>
            <Image
              src={chosenSuggestion?.img!}
              alt={chosenSuggestion?.alt!}
              width={300}
              height={300}
            />
            {/* <label>
              Imagen
              <input type="file" name="img" disabled />
            </label> */}
          </div>
          <label>
            Nombre
            <input
              type="text"
              name="suggestionName"
              placeholder={chosenSuggestion?.name}
              disabled={nameDisabled}
            />
            <button
              type="button"
              onClick={() => setNameDisabled((previous) => !previous)}
            >
              <Image
                src="/partners/lapiz.png"
                alt="Editar campo"
                width={20}
                height={20}
              />
            </button>
          </label>
          <label>
            Descripción
            <input
              type="text"
              name="description"
              placeholder={chosenSuggestion?.description}
              disabled={descriptionDisabled}
            />
            <button
              type="button"
              onClick={() => setDescriptionDisabled((previous) => !previous)}
            >
              <Image
                src="/partners/lapiz.png"
                alt="Editar campo"
                width={20}
                height={20}
              />
            </button>
          </label>
          <label>
            Precio
            <input
              type="text"
              name="price"
              placeholder={chosenSuggestion?.price.toString()}
              disabled={priceDisabled}
            />
            <button
              type="button"
              onClick={() => setPriceDisabled((previous) => !previous)}
            >
              <Image
                src="/partners/lapiz.png"
                alt="Editar campo"
                width={20}
                height={20}
              />
            </button>
          </label>
          {/* <button>Guardar</button> */}
        </form>
        <button
          style={{ fontSize: 16 }}
          type="button"
          onClick={closeViewAndEditSuggestionModal}
        >
          Cerrar
        </button>
      </Modal>
    </div>
  );
}
