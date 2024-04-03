import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  politice: "",
};

const policeSlice = createSlice({
  name: "police",
  initialState,
  reducers: {
    setPolitices: (state, action) => {
      state.politice = action.payload;
    },
  },
});

export const { setPolitices } = policeSlice.actions;

export default policeSlice.reducer;
