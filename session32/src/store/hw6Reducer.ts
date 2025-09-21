const initialState = { theme: "light" };

const hw6Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { theme: newTheme };
    default:
      return state;
  }
};

export default hw6Reducer;
