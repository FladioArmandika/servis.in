import React from 'react'
import { Card, Container } from '../../components'
import Button from '../../components/ButtonPrimary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsername } from '../../state/user/selector'

const Login = (props) => {
    return (
        <div>
           <Container>
                <Card width="15rem">
                    {props.name}
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"></input>
                        </div>
                        <Button block="block">Login</Button>
                    </form>
                </Card>
                or <Link to="/auth/register">register</Link>
           </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: getUsername(state)
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
