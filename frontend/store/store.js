import { configureStore } from "@reduxjs/toolkit";
import programReducer from "./programSlice";

const store = configureStore({
  reducer: { program: programReducer },
});

export default store;
