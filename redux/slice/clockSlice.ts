import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: {
    startDate: "",
    startTime: "",
    idReservation: 0,
    order_code: "",
    order_number: "",
    timer: 0,
  },
  reducers: {
    updateDates: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateTimer: (state, action) => {
      return { ...state, timer: action.payload };
    }
  },
});

export const { updateDates } = timeSlice.actions;
export const { updateTimer } = timeSlice.actions;

export const selectRemainingTime = (state: any) => {
  return state.time.timer;
};

export default timeSlice.reducer;
