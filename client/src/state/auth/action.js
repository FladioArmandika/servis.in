import { LOGIN_SUCCESS, LOGIN_FAILED } from "./type";
import { API_ROOT } from "../../constants";
import axios from 'axios'
import { history } from '../../helpers/history';

const authActionCreator = {
    login: (email,password) => (dispatch) => {
        console.log('login for username = ' + email)

        const data = {
            email,password
        }

        axios.post(API_ROOT + '/auth/login',data)
            .then(res => {
                if (res.data.status == 200) {
                    console.log(res)
                    history.push('/')
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: res
                    })
                } else {
                    console.log(res)
                    dispatch({
                        type: LOGIN_FAILED,
                    })
                }
                
            })
            .catch(err => {
                console.error(err); 
            })

        dispatch({
            type: LOGIN_SUCCESS,
        })
    },
    loginSuccess: {

    }
}

export default authActionCreator;