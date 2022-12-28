import {put, takeEvery, call} from 'redux-saga/effects'
import {addManyCustomers} from "../actions/customerAction";
import {CustomerActionTypes} from "../../types/customerTypes";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users')

function* fetchUserWorker():any {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(()=> new Promise(res => res(data.json())))
    yield put(addManyCustomers(json))
}

export function* userWatcher():any {
    yield takeEvery(CustomerActionTypes.ADD_MANY_CUSTOMERS, fetchUserWorker)
}