import {CustomerAction, CustomerActionTypes, CustomerState,} from "../../types/customerTypes";

const initialState: CustomerState = {
    customers: [],
};

export const customerReducer = (state = initialState, action: CustomerAction): CustomerState => {
    switch (action.type) {
        case CustomerActionTypes.ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]};
        case CustomerActionTypes.REMOVE_CUSTOMER:
            // @ts-ignore
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload.id)};
        case CustomerActionTypes.ADD_MANY_CUSTOMERS:
            // @ts-ignore
            return {...state, customers: [...state.customers, ...action.payload]}
        default:
            return state;
    }
};