import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type PayLoadTypes = {
  username: string;
  email: string;
  profilePhoto: string;
  id: string;
};

const initialState = {
  isSuccess: false,
  isLoggedIn: false,
  user: {
    username: "",
    email: "",
    profilePhoto: "",
    id: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<PayLoadTypes>) {
      state.isSuccess = true;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    signUp(state, action: PayloadAction<PayLoadTypes>) {
      state.isSuccess = true;
      state.isLoggedIn = false;
      state.user = action.payload;
    },
    logout(state) {
      state.isSuccess = true;
      state.isLoggedIn = false;
      state.user = {
        username: "",
        email: "",
        profilePhoto: "",
        id: "",
      };
    },
    updateMe(state, action: PayloadAction<PayLoadTypes>) {
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.user = action.payload;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
