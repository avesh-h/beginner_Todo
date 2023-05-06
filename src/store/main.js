import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./TaskSlice";

const taskStore = configureStore({
  reducer: { task: taskSlice.reducer },
});

export default taskStore;
