import { createSlice } from "@reduxjs/toolkit";

interface RandomType {
  random: number;
}
const initialState: RandomType[] = [];
const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    randomClick: (state) => {
      state.push({ random: Math.floor(Math.random() * 100) });
    },
  },
});
export const { randomClick } = randomSlice.actions;
export default randomSlice.reducer;
