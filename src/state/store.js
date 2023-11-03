import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./Reducers/themeSlice";
import taskReducer from "./Reducers/tasklistSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,

    tasks: taskReducer,
  },
});

export default store;
