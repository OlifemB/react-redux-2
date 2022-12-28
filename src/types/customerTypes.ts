export interface CustomerUser {
    id: number
    name: string
}

export interface CustomerState {
    customers: CustomerUser[]
}

export enum CustomerActionTypes{
    ADD_CUSTOMER = "ADD_CUSTOMER",
    REMOVE_CUSTOMER = "REMOVE_CUSTOMER",
    ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS",
    FETCH_CUSTOMERS = "FETCH_CUSTOMERS"
}

interface AddCustomerAction {
    type: CustomerActionTypes.ADD_CUSTOMER,
    payload: CustomerUser
}

interface GetCustomerAction {
    type: CustomerActionTypes.REMOVE_CUSTOMER,
    payload: CustomerUser
}

interface AddManyCustomersAction{
    type: CustomerActionTypes.ADD_MANY_CUSTOMERS,
    payload: CustomerUser
}

interface FetchCustomerAction{
    type: CustomerActionTypes.FETCH_CUSTOMERS,
    payload: CustomerUser
}

export type CustomerAction = GetCustomerAction | AddCustomerAction | AddManyCustomersAction | FetchCustomerAction