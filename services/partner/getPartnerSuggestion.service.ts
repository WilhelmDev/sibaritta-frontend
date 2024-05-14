import { generalBaseApi } from "@/lib/baseApi";
import getConfig from "@/utils/getConfig";
import { Suggestion } from "@/interface/suggestion.interface";

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
  createdAt: string;
  updatedAt: string;
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

export const getPartnerSuggestion = async (
  partnerId: number,
  suggestionId: number
): Promise<Suggestion | null> => {
  const getPartnerSuggestions = `v1/all_suggestion_partner/${partnerId}`;

  try {
    const response = await generalBaseApi.get(
      getPartnerSuggestions,
      getConfig()
    );

    const suggestionsResponseJson = response.data as SuggestionResponse;

    const suggestionResponseJson = suggestionsResponseJson.data.find(
      (suggestion) => suggestion.id === suggestionId
    );

    if (suggestionResponseJson == null) {
      throw Error("No suggestion found with id: " + suggestionId);
    }

    const sortedByMostRecentDateImages = suggestionResponseJson.images.toSorted(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );

    const largeImage = sortedByMostRecentDateImages.find(
      (image) => image.resolution === "large"
    );

    let img = sortedByMostRecentDateImages[0].path;
    let alt = sortedByMostRecentDateImages[0].alt;

    if (largeImage) {
      img = largeImage.path;
      alt = largeImage.alt;
    }

    return {
      id: suggestionResponseJson.id,
      name: suggestionResponseJson.name,
      description: suggestionResponseJson.description,
      price: parseFloat(suggestionResponseJson.regular_price),
      img,
      alt,
    };
  } catch {
    console.error("Error getting partner suggestion");
  }
  return null;
};
