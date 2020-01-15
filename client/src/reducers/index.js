import { COUNTER_MINUS, COUNTER_PLUS } from "../actions/types"

const initialState = {
    counter: 0
}

export default (state = initialState, {type,payload}) => {
    switch (type) {
        case "add user":
            return { ...state, ...payload }
        case COUNTER_PLUS:
            return {
                counter: state.counter + 1
            }
        case COUNTER_MINUS:
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}

