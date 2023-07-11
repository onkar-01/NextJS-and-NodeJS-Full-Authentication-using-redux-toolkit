import { createSlice } from "@reduxjs/toolkit";

try {
  if (window !== "undefined") {
    var userinfo = localStorage.getItem("userInfo");
    var userinfoJson = JSON.parse(userinfo);
  }
} catch (err) {
  console.log("err", err);
}

const initialState = {
  userInfo: userinfo ? userinfoJson : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
