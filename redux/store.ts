import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import user from "@/redux/slice/user";
import reservation from "./slice/detalle.slice";
import timeReducer from "./slice/clockSlice";
import police from "./slice/policeSlice";
import partner from "./slice/partnerSlice";
import local from "./slice/localSlice";


export const store = configureStore({
  reducer: {
    user,
    reservation,
    time: timeReducer,
    police,
    partner,
    local,
  },
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
