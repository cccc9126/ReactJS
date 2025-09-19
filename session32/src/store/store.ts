import { createStore, combineReducers } from "redux";
import hw2Reducer from "./hw2Reducer";
import hw3Reducer from "./hw3Reducer";
import hw4Reducer from "./hw4Reducer";
import hw5Reducer from "./hw5Reducer";
import hw6Reducer from "./hw6Reducer";

const rootReducer = combineReducers({
  hw2: hw2Reducer,
  hw3: hw3Reducer,
  hw4: hw4Reducer,
  hw5: hw5Reducer,
  hw6: hw6Reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// tạo store
const store = createStore(rootReducer);

export default store;
