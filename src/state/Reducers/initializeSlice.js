import { createSlice } from "@reduxjs/toolkit";

const initializeSlice = createSlice({
  name: "initialize",
  initialState: "false",
  reducers: {
    toggleInitialize: (state) => {
      return state === "false" ? "true" : "false";
    },
  },
});

export const { toggleInitialize } = initializeSlice.actions;
export default initializeSlice.reducer;
