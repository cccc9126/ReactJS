const initialState = { company: "Rikkei Academy" };

const hw5Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_COMPANY":
      return { company: "RikkeiSoft" };
    default:
      return state;
  }
};

export default hw5Reducer;
