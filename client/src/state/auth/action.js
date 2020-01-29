import { LOGIN_SUCCESS } from "./type";
import { API_ROOT } from "../../constants";
import axios from 'axios'


const authActionCreator = {
    login: (username,password) => {
        console.log('login for username = ' + username)

        const data = {
            username,password
        }

        // fetch(API_ROOT + '/auth/login',{
        //         method:'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             username: username,
        //             password: password
        //         })
        //     })
        //     .then(res => console.log())
        //     .catch(e => console.log(e))

        axios.post(API_ROOT + '/auth/login',data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })

        return {
            type: LOGIN_SUCCESS,
            payload: data
        }
    }
}

export default authActionCreator;