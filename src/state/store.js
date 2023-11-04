import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./Reducers/themeSlice";
import taskReducer from "./Reducers/tasklistSlice";

const initialState = {
  theme: "light", // Inizializza il tema predefinito
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Inizializza con i dati dal localStorage
};

const store = configureStore({
  reducer: {
    theme: themeReducer,

    tasks: taskReducer,
  },
  preloadedState: initialState, // Inizializza lo stato iniziale con i dati dal localStorage
});

export default store;
