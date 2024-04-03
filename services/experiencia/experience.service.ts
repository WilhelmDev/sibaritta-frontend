import { baseApi } from "@/lib/baseApi";

export const createExperience = async (data: any) => {
  try {
    const result = await baseApi.post("/v2/experience/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQ5LCJpYXQiOjE3MTAwMDI2OTYsImV4cCI6MTcxNTE4NjY5Nn0.3OhUkKE8zw3lgwf6exvKyGAjk59W9uUJkMsZSiYFEws`,
      },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};
