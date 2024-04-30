"use client";
import ModalSugesstions from "@/components/partner/modals/ModalSugesstions";
import { allSuggestionPartner } from "@/services/partner/partnerSugesstion.service";
import React, { FormEvent, useEffect, useState } from "react";
import Modal from "@/components/molecules/Modal";
import Image from "next/image";

interface Suggestion {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}

interface CreateModalSuggestion {
  name: string;
  description: string;
  price: number;
  img: string;
  fk_partner_id: number;
}

const mockedSuggestion: Suggestion = {
  id: 1,
  name: "Sugerencia 1",
  description: "Descripcion de la sugerencia 1",
  price: 100,
  img: "/prueba.jpg",
};

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
  const [newSuggestion, setNewSuggestion] =
    useState<CreateModalSuggestion | null>(null);

  const openCreateSuggestionModal = () => {
    setShowCreateSuggestionModal(true);
  };

  const closeCreateSuggestionModal = () => {
    setShowCreateSuggestionModal(false);
  };

  const handleCreateSuggestionModalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, price, img } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    const newSuggestion = {
      name: name as string,
      description: description as string,
      price: parseFloat(price as string),
      img: img as string,
      fk_partner_id: parseInt(
        localStorage.getItem("fk_partner_id") as string,
        10
      ),
    };

    setNewSuggestion(newSuggestion);
  };

  useEffect(() => {
    if (newSuggestion) {
      fetch(`${process.env.NEXT_PUBLIC_URL}/v1/suggestion/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newSuggestion),
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
  }, [newSuggestion]);

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
        <div>
          <Image
            src={mockedSuggestion.img}
            alt="alt text"
            width={300}
            height={400}
          />
          <div>
            <form
              style={{ fontSize: 16 }}
              onSubmit={(e) => handleCreateSuggestionModalSubmit(e)}
            >
              <label>
                Nombre
                <input
                  type="text"
                  name="name"
                  placeholder={mockedSuggestion.name}
                />
              </label>
              <label>
                Descripción
                <input
                  type="text"
                  name="description"
                  placeholder={mockedSuggestion.description}
                />
              </label>
              <label>
                Precio
                <input
                  type="text"
                  name="price"
                  placeholder={mockedSuggestion.price.toString()}
                />
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
          </div>
        </div>
      </Modal>
    </div>
  );
}
