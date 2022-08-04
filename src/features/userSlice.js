import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload; ////////
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { logout, login } = userSlice.actions;

//this is a selector it allows us to pull info.
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
