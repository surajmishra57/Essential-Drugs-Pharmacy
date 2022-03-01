import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  pin: "",
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setfirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setlastname: (state, action) => {
      state.lastname = action.payload;
    },
    setemail: (state, action) => {
      state.email = action.payload;
    },
    setpassword: (state, action) => {
      state.password = action.payload;
    },
    setphone: (state, action) => {
      state.phone = action.payload;
    },
    setaddress: (state, action) => {
      state.address = action.payload;
    },
    setpin: (state, action) => {
      state.pin = action.payload;
    },
  },
});

export const {
  setfiratname,
  setlastname,
  setemail,
  setpassword,
  setphone,
  setaddress,
  setpin,
} = signupSlice.actions;
export default signupSlice.reducer;
