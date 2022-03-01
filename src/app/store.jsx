import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/pages/base/loginSlice";
import testReducer from "../components/pages/labtest/testSlice";
import signupReducer from "../components/pages/base/signupSlice";
export const store = configureStore({
  reducer: {
    uname: loginReducer,
    alltests: testReducer,
    signup: signupReducer,
  },
});
