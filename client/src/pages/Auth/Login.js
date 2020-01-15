import React from 'react'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'

export const Login = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div style={{marginTop:20+'vh'}} class="col-sm-9 col-md-7 col-lg-5 mx-auto d-flex flex-column align-items-center ">
                        <Card 
                        width="18rem"
                        padding='50px'
                        content={
                            <div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <Button type="submit" content="Login" addition="btn-block"/>
                            </div>
                        }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
