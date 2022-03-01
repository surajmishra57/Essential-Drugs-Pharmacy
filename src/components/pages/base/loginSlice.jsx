import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "user",
};

export const loginSlice = createSlice({
  name: "uname",
  initialState,
  reducers: {
    unsetname: (state) => {
      state.username = "user";
    },
    setname: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { unsetname, setname } = loginSlice.actions;
export default loginSlice.reducer;
