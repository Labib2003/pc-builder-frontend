import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./buildSlice/buildSlice";
import { api } from "./api/apiSlice";
const store = configureStore({
  reducer: { builder: builderReducer, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
