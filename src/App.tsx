import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCash, getCash} from "./store/actions/cashAction";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {addCustomer, fetchCustomers, fetchUsers, removeCustomer} from "./store/actions/customerAction";
import {CustomerUser} from "./types/customerTypes";
import {
    asyncIncrementCreator,
    asyncDecrementCreator,
    incrementCreator,
    decrementCreator
} from "./store/actions/countAction";

const App: React.FC = () => {
    const dispatch = useDispatch()
    const cashState = useTypedSelector((state) => state.cash)
    const customerState = useTypedSelector((state) => state.customer)
    const countState = useTypedSelector((state) => state.count)

    const addCashHandler = (cash: number) => {
        dispatch(addCash(cash))
    }

    const getCashHandler = (cash: number) => {
        dispatch(getCash(cash))
    }

    const addCustomerHandler = (customerName: string) => {
        const newCustomer = {
            id: Number(Date.now()),
            name: customerName
        }
        dispatch(addCustomer(newCustomer))
    }

    const removeCustomerHandler = (customer: CustomerUser) => {
        dispatch(removeCustomer(customer))
    }

    return (
        <div className="app">
            <section id="count" style={{display: "flex", flexDirection: "column"}}>
                <h3>Count</h3>
                <div>Count: {countState.count}</div>
                <button onClick={() => dispatch(incrementCreator(Number(prompt())))}>INCREMENT</button>
                <button onClick={() => dispatch(decrementCreator(Number(prompt())))}> DECREMENT</button>
                <button onClick={() => dispatch(asyncIncrementCreator(Number(prompt())))}> async INCREMENT</button>
                <button onClick={() => dispatch(asyncDecrementCreator(Number(prompt())))}> async DECREMENT</button>
            </section>

            <section id="cash" style={{display: "flex", flexDirection: "column"}}>
                <h3>Cash</h3>
                <div>Your cash is: {cashState.cash}</div>
                <button onClick={() => addCashHandler(Number(prompt()))}> Add cash</button>
                <button onClick={() => getCashHandler(Number(prompt()))}> Get cash</button>
            </section>

            <section id="customer" style={{display: "flex", flexDirection: "column"}}>
                <h3>Customers</h3>
                <button onClick={() => addCustomerHandler(String(prompt()))}> Add customer</button>
                <button onClick={() => dispatch(fetchCustomers())}> Get all customer</button>
                <button onClick={() => dispatch(fetchUsers())}> Get all customer SAGA</button>
                {customerState.customers.length > 0
                    ? <div>
                        {customerState.customers.map((customer) => (
                            <div onClick={() => removeCustomerHandler(customer)}
                                 key={`customerId${customer.id}`}>{customer.id}. {customer.name}</div>
                        ))}
                    </div>
                    : <div>No customers</div>
                }
            </section>
        </div>
    );
};

export default App;
