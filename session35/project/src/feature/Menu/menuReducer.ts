import { createSlice } from "@reduxjs/toolkit";

const initialState = { collapsed: false };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.collapsed = !state.collapsed;
    },
    openMenu: (state) => {
      state.collapsed = false;
    },
    closeMenu: (state) => {
      state.collapsed = true;
    },
  },
});

export const { toggleMenu, openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
