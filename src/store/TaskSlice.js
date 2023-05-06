import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "Task",
  initialState: [],
  reducers: {
    addTask(state, { payload }) {
      state = [...state, payload];
      return state;
    },
    impTask(state, { payload }) {
      const findTaskIndex = state.findIndex((task) => task.id === payload.id);
      state.splice(findTaskIndex, 1, payload);
      return state;
    },
    deleteTask(state, { payload }) {
      for (let i of payload) {
        state = state.filter((task) => task.id !== i);
      }
      return state;
    },
    completeTask(state, { payload }) {
      for (let i of payload) {
        state = state.map((task) => {
          if (task.id === i) {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        });
      }
      return state;
    },
  },
});

export const taskActions = taskSlice.actions;
