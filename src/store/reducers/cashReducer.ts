import {CashAction, CashActionTypes, CashState} from "../../types/cashTypes";

const initialState: CashState = {
    cash: 10,
};

export const cashReducer = (state = initialState, action: CashAction): CashState => {
    switch (action.type) {
        case CashActionTypes.ADD_CASH:
            return { ...state, cash: state.cash + action.payload };
        case CashActionTypes.GET_CASH:
            return { ...state, cash: state.cash - action.payload };
        default:
            return state;
    }
};