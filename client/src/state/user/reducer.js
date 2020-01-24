import { ADD_USER, SET_USER, SET_USER_SUCCESS } from "./type";

const initialState = {
    name: "fladio"
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_USER:
        return { ...state, ...payload }

    case SET_USER:
        return {
            ...state,
            name: payload
        }
    case SET_USER_SUCCESS:
        return {
            ...state,
            name: payload
        }
    default:
        return state
    }
}


export default userReducer;