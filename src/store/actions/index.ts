import * as CashActionCreators from './cashAction'
import * as CustomerActionCreators from './customerAction'
import * as CountActionCreators from './countAction'

export default {
    ...CashActionCreators,
    ...CustomerActionCreators,
    ...CountActionCreators
}