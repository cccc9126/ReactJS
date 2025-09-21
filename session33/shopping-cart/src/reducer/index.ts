import { combineReducers, createStore } from "redux";
import renderReducer from "./renderReducer";
import cartReducer from "./addReducer";

const rootReducer = combineReducers({
    reducer1: renderReducer,
    reducer2:cartReducer
})
export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>
