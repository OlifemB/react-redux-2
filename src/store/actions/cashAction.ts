import {CashAction, CashActionTypes} from "../../types/cashTypes";

export const addCash = (cash: number):CashAction => (
     {type: CashActionTypes.ADD_CASH, payload: cash}
)

export const getCash = (cash: number):CashAction => (
        {type: CashActionTypes.GET_CASH, payload: cash}
)
