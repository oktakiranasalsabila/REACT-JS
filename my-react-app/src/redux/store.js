import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";

const store = configureStore({
    reducer:{cart:cartReducer},
});
console.log("onCreate store : ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});


export default store;