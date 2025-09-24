import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/Counter/counterSlide"
import randomReducer from "../feature/RandomNumber/randomSlice"
import themeReducer from "../feature/Theme/themeReducer"
import renderReducer from "../feature/Render/renderReducer"
import menuReducer from "../feature/Menu/menuReducer";

 const store = configureStore({
    reducer: {
         counter: counterReducer,
         random: randomReducer,
         theme: themeReducer,
         render: renderReducer,
        menu:menuReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export default store