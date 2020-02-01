import React, { useState } from 'react'
import { Card, Container, ButtonPrimary } from '../../components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsername } from '../../state/user/selector'
import userActionCreator from '../../state/user/action'
import authActionCreator from '../../state/auth/action'


const Login = (props) => {

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    return (
        <div>
           <Container>
                <Card width="15rem">
                    {props.name}
                    {/* <form> */}
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" onChange={(e) => setEmailInput(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" onChange={(e) => setPasswordInput(e.target.value)}></input>
                        </div>
                        <div onClick={() => props.login(emailInput,passwordInput)}>
                            <ButtonPrimary block="block">Login</ButtonPrimary>
                        </div>
                    {/* </form> */}
                </Card>
                or <Link to="/auth/register">register</Link>
           </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: getUsername(state),
    
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (email, password) => { 
            dispatch(authActionCreator.login(email,password))
            
        },
        setUser: (params) => dispatch(userActionCreator.setUser(params)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
