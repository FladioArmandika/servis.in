import { ADD_USER, DELETE_USER } from "./types"
import apiAction from "./api"


export const DeleteUser = (payload) => ({
    type: DELETE_USER,
    payload
})

export const addUser = (data) => {
    return apiAction({
        url: "",    
        onFailure: ,
        onSuccess:,
        data: data,
        label:ADD_USER,
    })
}



