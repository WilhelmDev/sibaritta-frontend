"use client";
import React, { useEffect, useRef, useState } from "react";
import { activeAndInactiveSuggestionPartner } from "@/services/partner/partnerSugesstion.service";
import { useCreateSuggestionModal } from "@/hook/partner/suggestions/useCreateSuggestionModal";
import { useViewAndEditSuggestionModal } from "@/hook/partner/suggestions/useViewAndEditSuggestionModal";
import { Suggestion } from "@/interface/suggestion.interface";
import { getPartnerSuggestion } from "@/services/partner/getPartnerSuggestion.service";
import ViewAndEditSuggestionModal from "@/components/partner/modals/ViewAndEditSuggestionModal";
import CreateSuggestionModal from "@/components/partner/modals/CreateSuggestionModal";

export default function Index() {
  const [suggestions, setSuggestions] = useState<any>();
  const [suggestionsAmount, setSuggestionsAmount] = useState<number>(3);
  const [chosenSuggestion, setChosenSuggestion] = useState<Suggestion | null>(
    null
  );
  const {
    showCreateSuggestionModal,
    openCreateSuggestionModal,
    closeCreateSuggestionModal,
    handleCreateSuggestionModalSubmit,
  } = useCreateSuggestionModal();
  const {
    showViewAndEditSuggestionModal,
    openViewAndEditSuggestionModal,
    closeViewAndEditSuggestionModal,
    handleEditSuggestionModalSubmit,
  } = useViewAndEditSuggestionModal(chosenSuggestion!);
  const isFirstRender = useRef(true);
  const showCreateModalPreviousValue = useRef(false);
  const showViewAndEditModalPreviousValue = useRef(false);

  async function getPartnerSuggestions() {
    let partnerId: number | null = null;
    if (typeof window !== "undefined") {
      const storedPartnerId = localStorage.getItem("fk_partner_id");
      partnerId = storedPartnerId ? parseInt(storedPartnerId, 10) : null;
    }
    try {
      const { data } = await activeAndInactiveSuggestionPartner(
        partnerId,
        0,
        suggestionsAmount
      );
      setSuggestions(data);
    } catch {
      alert(
        "Ha ocurrido un error durante la carga de las sugerencias de este partner."
      );
    }
  }

  const reverseSuggestionStatus = (
    suggestionId: number,
    status: "active" | "deleted"
  ) => {
    const formData = new FormData();
    formData.append("status", status === "active" ? "deleted" : "active");
    fetch(`${process.env.NEXT_PUBLIC_URL}/v1/suggestion/${suggestionId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    }).then(() => getPartnerSuggestions());
  };

  useEffect(() => {
    getPartnerSuggestions();
  }, [suggestionsAmount]);

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }

    showCreateModalPreviousValue.current = !showCreateSuggestionModal;

    if (showCreateModalPreviousValue.current && !showCreateSuggestionModal) {
      getPartnerSuggestions();
    }
  }, [showCreateSuggestionModal]);

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }

    showViewAndEditModalPreviousValue.current = !showViewAndEditSuggestionModal;

    if (
      showViewAndEditModalPreviousValue.current &&
      !showViewAndEditSuggestionModal
    ) {
      getPartnerSuggestions();
    }
  }, [showViewAndEditSuggestionModal]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, []);

  return (
    <div className="list_suggestions_box main-page">
      <div className="box_suggestion_list_box ">
        <div className="list_suggestion_title ">
          <h2 className=" ">Listado de Sugerencias Sibaritta</h2>
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
                    onClick={async () => {
                      const storedPartnerId =
                        localStorage.getItem("fk_partner_id");
                      const partnerId = storedPartnerId
                        ? parseInt(storedPartnerId, 10)
                        : null;

                      if (partnerId == null) {
                        throw Error("No partner id found");
                      }

                      const chosenSuggestion = await getPartnerSuggestion(
                        partnerId,
                        sugges?.id
                      );

                      setChosenSuggestion(chosenSuggestion);
                      openViewAndEditSuggestionModal();
                    }}
                  >
                    Ver
                  </button>
                  <button
                    className="suggestion_activo"
                    onClick={() => {
                      reverseSuggestionStatus(sugges?.id, sugges?.status);
                    }}
                  >
                    {sugges?.status}
                    {sugges?.status === "active" ? (
                      <div className="w-[1rem] h-[1rem] rounded-full bg-[#07FD11] tablet:w-[1.5rem] tablet:h-[1.5rem]"></div>
                    ) : (
                      <div className="w-[1rem] h-[1rem] rounded-full bg-[#FD1107] tablet:w-[1.5rem] tablet:h-[1.5rem]"></div>
                    )}
                  </button>
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

      <CreateSuggestionModal
        close={closeCreateSuggestionModal}
        show={showCreateSuggestionModal}
        onSubmit={handleCreateSuggestionModalSubmit}
      />

      <ViewAndEditSuggestionModal
        show={showViewAndEditSuggestionModal}
        close={closeViewAndEditSuggestionModal}
        onSubmit={handleEditSuggestionModalSubmit}
        chosenSuggestion={chosenSuggestion!}
      />
    </div>
  );
}
