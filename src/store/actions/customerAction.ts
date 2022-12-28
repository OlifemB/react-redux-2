import {CustomerAction, CustomerActionTypes, CustomerUser} from "../../types/customerTypes";

export const addCustomer = (customer: CustomerUser): CustomerAction => (
    {type: CustomerActionTypes.ADD_CUSTOMER, payload: customer}
)

export const removeCustomer = (customer: CustomerUser): CustomerAction => (
    {type: CustomerActionTypes.REMOVE_CUSTOMER, payload: customer}
)

export const addManyCustomers = (customer: CustomerUser): CustomerAction => (
    {type: CustomerActionTypes.ADD_MANY_CUSTOMERS, payload: customer}
)

export const fetchUsers = () => ({type: CustomerActionTypes.FETCH_CUSTOMERS})

export const fetchCustomers = ():any => {
    return (dispatch:any )=> {
        try {
            fetch('https://jsonplaceholder.typicode.com//users?_limit=10')
                .then(response => response.json())
                .then(json => dispatch(addManyCustomers(json)))
        }
        catch (e){
            console.log(e)
        }
    }
}