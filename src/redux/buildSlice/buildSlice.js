import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pcBuilder: {
    processor: null,
    motherboard: null,
    ram: null,
    "power-supply-unit": null,
    "storage-device": null,
    monitor: null,
  },
};

const builderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    setPCBuilder: (state, action) => {
      const { name, component } = action.payload;
      state.pcBuilder[name] = component;
    },
  },
});

export default builderSlice.reducer;
export const { setPCBuilder } = builderSlice.actions;
