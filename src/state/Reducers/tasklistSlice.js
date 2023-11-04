import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: JSON.parse(localStorage.getItem("tasks")) || [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        createdAt: new Date().toLocaleString(),
        completedAt: null,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
    },

    removeTask: (state, action) => {
      const updatedState = state.filter((task) => task.id !== action.payload.id);
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },

    toggleTask: (state, action) => {
      const taskToToggle = state.find((task) => task.id === action.payload.id);

      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;

        if (taskToToggle.completed) {
          taskToToggle.completedAt = new Date().toLocaleString();
        } else {
          taskToToggle.completedAt = null;
        }

        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
