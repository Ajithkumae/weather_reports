import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contriesData: null,
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    loadData: (state) => {
      state.contriesData;
    },
  },
});

export default dashboardSlice.reducer;
