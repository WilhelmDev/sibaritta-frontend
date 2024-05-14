import { useEffect, useState } from "react";
import { CreateModalSuggestion } from "@/interface/partner/createModalSuggestion.interface";

export const useCreateSuggestionModal = () => {
  const [showCreateSuggestionModal, setShowCreateSuggestionModal] =
    useState<boolean>(false);
  const [newSuggestion, setNewSuggestion] =
    useState<CreateModalSuggestion | null>(null);

  const openCreateSuggestionModal = () => {
    setShowCreateSuggestionModal(true);
  };

  const closeCreateSuggestionModal = () => {
    setShowCreateSuggestionModal(false);
    setNewSuggestion(null);
  };

  const handleCreateSuggestionModalSubmit = (
    newSuggestion: CreateModalSuggestion
  ) => {
    setNewSuggestion(newSuggestion);
  };

  useEffect(() => {
    if (newSuggestion == null) {
      return;
    }

    const formData = new FormData();
    formData.append("name", newSuggestion.name);
    formData.append("description", newSuggestion.description);
    formData.append("regular_price", newSuggestion.price.toString());
    formData.append("files", newSuggestion.img);
    formData.append("fk_partner_id", newSuggestion.partnerId.toString());
    formData.append("fk_user_id", "1");
    formData.append("alt", "alt text");

    fetch(`${process.env.NEXT_PUBLIC_URL}/v1/suggestion/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        closeCreateSuggestionModal();
      })
      .catch(() => {
        alert("Hubo un error durante la creación de la sugerencia.");
      });
  }, [newSuggestion]);

  return {
    showCreateSuggestionModal,
    openCreateSuggestionModal,
    closeCreateSuggestionModal,
    handleCreateSuggestionModalSubmit,
  };
};
