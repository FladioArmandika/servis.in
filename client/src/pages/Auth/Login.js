import React from 'react'
import { Card } from '../../components/Card'

export const Login = () => {
    return (
        <div>
            Login
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <Card content={
                            <div className="form-group">
                                <input type="text" className=""/>
                            </div>
                        }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
