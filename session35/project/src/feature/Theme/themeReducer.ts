import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = { value: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    },
  },
});

export const { toggle, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
