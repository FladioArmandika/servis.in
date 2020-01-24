import { SET_USER, SET_USER_SUCCESS } from "./type"


const userActionCreator = {
    setUser: (name) => {
       console.log('action set user' + name)
       return {
           type: SET_USER_SUCCESS,
           payload: name
       }
    }
}


export default userActionCreator;