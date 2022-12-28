import {put,takeEvery} from 'redux-saga/effects'
import {decrementCreator, incrementCreator} from "../actions/countAction";
import {CountAction, CountActionTypes} from "../../types/countTypes";
import {delay} from "../../utils";

function* incrementWorker(action: CountAction) {
    yield delay(1000)
    yield put(incrementCreator(action.payload))
}

function* decrementWorker(action:CountAction) {
    yield delay(1000)
    yield put(decrementCreator(action.payload))
}

export function* countWatcher() {
    // @ts-ignore
    yield  takeEvery(CountActionTypes.ASYNC_INCREMENT, incrementWorker)
    // @ts-ignore
    yield  takeEvery(CountActionTypes.ASYNC_DECREMENT, decrementWorker)
}