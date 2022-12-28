import {combineReducers} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {countReducer} from "./countReducer";

export const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer,
    count: countReducer
});

export type RootState = ReturnType<typeof rootReducer>