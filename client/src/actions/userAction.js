import { ADD_USER, DELETE_USER } from "./types"


export const AddUser = (payload) => ({
    type: ADD_USER,
    payload
})

export const DeleteUser = (payload) => ({
    type: DELETE_USER,
    payload
})


