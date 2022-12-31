import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeIs: true,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.themeIs = !state.themeIs;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
