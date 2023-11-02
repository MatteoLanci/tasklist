import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./Reducers/themeSlice";
import initializeReducer from "./Reducers/initializeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    initialize: initializeReducer,
  },
});

export default store;
