import React, { useState } from 'react'
import { Card, Container } from '../../components'
import Button from '../../components/ButtonPrimary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsername } from '../../state/user/selector'
import userActionCreator from '../../state/user/action'


const Login = (props) => {

    const [nameInput, setNameInput] = useState('')

    return (
        <div>
           <Container>
                <Card width="15rem">
                    {props.name}
                    {/* <form> */}
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" onChange={(e) => setNameInput(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"></input>
                        </div>
                        <div onClick={() => props.setUser(nameInput)}>
                            <Button block="block">Login</Button>
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
        setUser: userActionCreator.setUser,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
