import { useEffect, useState } from "react";
import { Suggestion } from "@/interface/suggestion.interface";
import { EditModalSuggestion } from "@/interface/partner/editModalSuggestion.interface";

export const useViewAndEditSuggestionModal = (chosenSuggestion: Suggestion) => {
  const [showViewAndEditSuggestionModal, setShowViewAndEditSuggestionModal] =
    useState<boolean>(false);
  const [editSuggestion, setEditSuggestion] =
    useState<EditModalSuggestion | null>(null);

  const openViewAndEditSuggestionModal = () => {
    setShowViewAndEditSuggestionModal(true);
  };

  const closeViewAndEditSuggestionModal = () => {
    setShowViewAndEditSuggestionModal(false);
    setEditSuggestion(null);
  };

  const handleEditSuggestionModalSubmit = (
    editSuggestion: EditModalSuggestion
  ) => {
    setEditSuggestion(editSuggestion);
  };

  useEffect(() => {
    if (editSuggestion == null) {
      return;
    }

    const formData = new FormData();

    if (!(editSuggestion.name == null)) {
      formData.append("name", editSuggestion.name);
    }

    if (!(editSuggestion.description == null)) {
      formData.append("description", editSuggestion.description);
    }

    if (!(editSuggestion.price == null)) {
      formData.append("regular_price", editSuggestion.price.toString());
    }

    if (!(editSuggestion.img == null)) {
      formData.append("files", editSuggestion.img);
      formData.append("alt", "altenativo");
    }

    fetch(`http://localhost:8000/api/v1/suggestion/${chosenSuggestion.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    }).then(() => {
      closeViewAndEditSuggestionModal();
    });
  }, [editSuggestion]);

  return {
    showViewAndEditSuggestionModal,
    openViewAndEditSuggestionModal,
    closeViewAndEditSuggestionModal,
    handleEditSuggestionModalSubmit,
  };
};
