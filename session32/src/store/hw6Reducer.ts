const savedTheme = localStorage.getItem("theme") || "light";

const initialState = { theme: savedTheme };

const hw6Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    default:
      return state;
  }
};

export default hw6Reducer;
