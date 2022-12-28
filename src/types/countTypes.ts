export enum CountActionTypes {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    ASYNC_INCREMENT = "ASYNC_INCREMENT",
    ASYNC_DECREMENT = "ASYNC_DECREMENT",
}

export interface CountState {
    count: number
}

interface incrementAction {
    type: CountActionTypes.INCREMENT,
    payload: number
}

interface decrementAction {
    type: CountActionTypes.DECREMENT,
    payload: number
}

interface asyncIncrementAction {
    type: CountActionTypes.ASYNC_INCREMENT,
    payload: number
}

interface asyncDecrementAction {
    type: CountActionTypes.ASYNC_DECREMENT,
    payload: number
}

export type CountAction = incrementAction | decrementAction | asyncIncrementAction | asyncDecrementAction