import { combineReducers, configureStore } from "@reduxjs/toolkit";
import empReducer from "../redux/empSlice";

export const empStore = configureStore({
    reducer: {
        employeeState: empReducer
    }
})