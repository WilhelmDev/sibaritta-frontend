"use client";
import ModalSugesstions from "@/components/partner/modals/ModalSugesstions";
import { allSuggestionPartner } from "@/services/partner/partnerSugesstion.service";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Modal from "@/components/molecules/Modal";
import Image from "next/image";

interface Suggestion {
  id: number;
  name: string;
  description: string;
  price: number;
  img: Blob;
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
  const [chosenSuggestion, setChosenSuggestion] = useState<Suggestion | null>(
    null
  );
  const [newSuggestionFormData, setNewSuggestionFormData] =
    useState<CreateModalSuggestion | null>(null);

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
                      setViewSuggestionsModal(true), setDataModal(sugges);
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
    </div>
  );
}
