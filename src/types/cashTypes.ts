export interface CashState {
    cash: number;
}

export enum CashActionTypes {
    ADD_CASH = "ADD_CASH",
    GET_CASH = "GET_CASH",
}

interface AddCashAction {
    type: CashActionTypes.ADD_CASH;
    payload: number;
}

interface GetCashAction {
    type: CashActionTypes.GET_CASH;
    payload: number;
}

export type CashAction = AddCashAction | GetCashAction;