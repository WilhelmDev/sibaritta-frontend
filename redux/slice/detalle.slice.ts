import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  personas: 1,
  tipoReserva: "",
  fecha: "",
  horario: "",
  fk_experience_id: 0,
  order_fk_event_id: 0,
  sugerencias: null,
  nameExperience: "",
  priceExperience: "",
  idReservation: 0,
  startDate: "",
  timeDate: "",
  addres: "",
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },

    setAddres: (state, action) => {
      state.addres = action.payload;
    },

    setTimeDate: (state, action) => {
      state.timeDate = action.payload;
    },

    setNameExperience: (state, action) => {
      state.nameExperience = action.payload;
    },
    setPriceExperience: (state, action) => {
      state.priceExperience = action.payload;
    },

    setPersonas: (state, action) => {
      state.personas = action.payload;
    },

    setIdReservation: (state, action) => {
      state.idReservation = action.payload;
    },
    setTipoReserva: (state, action) => {
      state.tipoReserva = action.payload;
    },
    setFecha: (state, action) => {
      state.fecha = action.payload;
    },
    setHorario: (state, action) => {
      state.horario = action.payload;
    },
    setExperiencieId: (state, action) => {
      state.fk_experience_id = action.payload;
    },
    setEventId: (state, action) => {
      state.order_fk_event_id = action.payload;
    },
    resetReservation: (state) => {
      return initialState;
    },
    addSugerencia: (state, action) => {
      state.sugerencias = action.payload;
      // const newSugerencia = action.payload;

      // // Buscar la sugerencia existente en la lista
      // const existingSugerencia = state.sugerencias.find(
      //   (s: any) => s.id === newSugerencia.id
      // );

      // if (existingSugerencia) {
      //   // Si la sugerencia ya existe, actualiza el contador
      //   existingSugerencia.count = newSugerencia.count;
      // } else {
      //   // Si la sugerencia no existe, agrégala a la lista
      //   state.sugerencias.push(newSugerencia);
      // }
    },
  },
});

export const {
  setPersonas,
  setTipoReserva,
  setFecha,
  setHorario,
  addSugerencia,
  setExperiencieId,
  setEventId,
  setNameExperience,
  setPriceExperience,
  resetReservation,
  setIdReservation,
  setStartDate,
  setTimeDate,
  setAddres,
} = reservationSlice.actions;

export default reservationSlice.reducer;
