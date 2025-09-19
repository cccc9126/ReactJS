const initialState = { counter: 0 };

const hw3Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export default hw3Reducer;
