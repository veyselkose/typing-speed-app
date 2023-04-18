import { configureStore } from "@reduxjs/toolkit";
import typingSlice from "./typingSlice";

const store = configureStore({
  reducer: typingSlice,
});

export default store;