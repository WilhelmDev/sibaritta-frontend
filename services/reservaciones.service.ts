import { ReservationInformation } from '@/interface/reservacion';
import { baseApi } from '@/lib/baseApi';
import getConfig from '@/utils/getConfig';

const currentReservations = 'v2/reservation';
const currentReservationsAll = '/v1/reservation_socio';
const cancelConfirReserva = 'v1/reservation/cancel';
const getAllReservations = async () => {
  try {
    const result = await baseApi.get(currentReservations, getConfig());
    return result.data;
  } catch (error) {
    throw error;
  }
};

const createReservations = async (data: any) => {
  try {
    const result = await baseApi.post(  currentReservations + '/create',data,
 getConfig()
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

const createReservationsConfirm = async (data: any) => {
  try {
    const result = await baseApi.post(currentReservations + '/confirm',data, getConfig()
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

const cancelReservations = async (idReservation: number) => {
  try {
    const data = {
      reservation_id: idReservation,
    };
    const result = await baseApi.post(
      currentReservations + '/cancel',
      data,
      getConfig()
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getReservationAll = async (socioId: any) => {
  try {
    const socioIdd = {
      fk_socio_id: socioId,
    };
    const result = await baseApi.post(
      currentReservationsAll,
      socioIdd,
      getConfig()
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

const cancelReservationConfir = async (cancel: any) => {
  try {
    const cancelar = {
      reservation_id: cancel.reservation_id,
    };
    const result = await baseApi.post(
      cancelConfirReserva,
      cancelar,
      getConfig()
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

const getReservationInformation = async (code: string): Promise<ReservationInformation> => {
  try {
    const result = await baseApi.get(
      '/v1/reservation/order_code/' + code,
      getConfig()
    );
    return result.data.data;
  } catch (error) {
    throw error;
  }

}

export {
  getAllReservations,
  createReservations,
  createReservationsConfirm,
  cancelReservations,
  getReservationAll,
  cancelReservationConfir,
  getReservationInformation,
};
