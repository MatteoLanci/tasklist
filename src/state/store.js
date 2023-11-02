import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./Reducers/themeSlice";
import initializeReducer from "./Reducers/initializeSlice";
import taskReducer from "./Reducers/tasklistSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    initialize: initializeReducer,
    tasks: taskReducer,
  },
});

export default store;
