import { ADD_USER, DELETE_USER } from "./types"
import apiAction from "./api"


export const AddUser = (payload) => ({
    type: ADD_USER,
    payload
})

export const DeleteUser = (payload) => ({
    type: DELETE_USER,
    payload
})



export const addUserApi = () => {
    return apiAction({
        // need to change
    })
}

