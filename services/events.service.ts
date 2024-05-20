import { Events } from '@/interface/events';
import { baseApi } from '@/lib/baseApi';

export const getEventDataById = async (id: number) => {
  try {
    const response = await baseApi.get<Events>(`v1/event/${id}/free-seats`);
    return response.data;
  } catch (error) {
    throw error;
  }
};