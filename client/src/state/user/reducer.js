import { ADD_USER } from "./type";

const initialState = {
    name: "fladio"
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_USER:
        return { ...state, ...payload }

    default:
        return state
    }
}


export default userReducer;