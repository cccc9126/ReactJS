import { useReducer } from "react";

const initialState = { counter: 0 };
type Action = { type: "Increase" } | { type: "Decrease" };

function hw3Reducer(state = initialState, action: Action) {
    switch (action.type) {
        case "Increase":
            return { counter: state.counter + 1 };
        case "Decrease":
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

export default hw3Reducer;
