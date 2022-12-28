import {CountActionTypes, CountState, CountAction} from "../../types/countTypes";

const initialState = {
    count: 0
}

export const countReducer = (state = initialState, action: CountAction): CountState => {
    console.log(action)
    switch (action.type) {
        case CountActionTypes.INCREMENT:
            return {...state, count: state.count + action.payload}
        case CountActionTypes.DECREMENT:
            return {...state, count: state.count - action.payload}
        default:
            return state;

    }
}