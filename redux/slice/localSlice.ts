import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  local: null,
};

const localSlice = createSlice({
  name: "local",
  initialState,
  reducers: {
    setLocal: (state, action) => {
      state.local = action.payload;
    },
  },
});

export const { setLocal } = localSlice.actions;

export default localSlice.reducer;
