import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    toggleTask: (state, action) => {
      const taskToToggle = state.find((task) => task.id === action.payload.id);
      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
