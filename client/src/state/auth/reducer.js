import { LOGIN_SUCCESS, LOGIN_FAILED } from "./type"

const initialState = {
    user: {}
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN_SUCCESS:
        return { 
            ...state, 
            user: payload
        }

    case LOGIN_FAILED:
        return {
            ...state,

        }

    default:
        return state
    }
}

export default authReducer;

