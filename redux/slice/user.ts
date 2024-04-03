import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: 1,
  email: "",
  name: "",
  status: "",
  avatar: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
