const initialState = {

}

export default (state, {type,payload}) => {
    switch (type) {
        case "add user":
            return { ...state, ...payload }

        default:
            return state
    }
}

