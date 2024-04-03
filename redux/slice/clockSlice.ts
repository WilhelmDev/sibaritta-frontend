import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: {
    startDate: "",
    startTime: "",
    idReservation: 0,
    order_code: "",
    order_number: "",
  },
  reducers: {
    updateDates: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateDates } = timeSlice.actions;
export const selectRemainingTime = (state: any) => {
  return state.time.remainingTime;
};
export default timeSlice.reducer;
