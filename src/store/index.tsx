import { configureStore } from "@reduxjs/toolkit";
import petitionSlice from "./petitionSlice";

const store = configureStore({
  reducer: {
    petitions: petitionSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
