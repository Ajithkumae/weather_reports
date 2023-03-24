import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./pages/Dashboard/dashboardSlice";

const makeStore = configureStore({
  reducer: {
    dashboardData: dashboardSlice,
  },
});

export default makeStore;
