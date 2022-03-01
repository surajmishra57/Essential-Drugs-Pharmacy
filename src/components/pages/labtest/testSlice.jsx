import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: [],
};

export const testSlice = createSlice({
  name: "alltests",
  initialState,
  reducers: {
    addtest: (state, action) => {
      state.test = [...state.test, action.payload];
    },
    // removetest: (state, action) => {
    //   state.username = action.payload;
    // },
  },
});

export const { addtest } = testSlice.actions;
export default testSlice.reducer;
