import {CountActionTypes, CountAction} from "../../types/countTypes";

export const incrementCreator = (payload: number): CountAction => ({
    type: CountActionTypes.INCREMENT,
    payload:payload
})

export const decrementCreator = (payload: number): CountAction => ({
    type: CountActionTypes.DECREMENT,
    payload:payload
})

export const asyncDecrementCreator = (payload: number): CountAction => ({
    type: CountActionTypes.ASYNC_DECREMENT,
    payload:payload
})

export const asyncIncrementCreator = (payload: number): CountAction => ({
    type: CountActionTypes.ASYNC_INCREMENT,
    payload:payload
})