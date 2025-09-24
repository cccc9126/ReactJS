import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Mode = "list" | "grid";

interface DisplayModeState {
  value: Mode;
}

const initialState: DisplayModeState = { value: "list" };

const displayModeSlice = createSlice({
  name: "displayMode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Mode>) => {
      state.value = action.payload;
    },
    toggleMode: (state) => {
      state.value = state.value === "list" ? "grid" : "list";
    },
  },
});

export const { setMode, toggleMode } = displayModeSlice.actions;
export default displayModeSlice.reducer;
