import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../../../components/Button';
export const RegisterContainer = () => {
    return (
        <div>
            <div className="container">
                <h2>gabung sebagai </h2>
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            <Link to="/register/tukang">
                                <Button content="Tukang Servis" addition="btn-block"/>
                            </Link>
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <h2>
                            <Link to='/register/client'>
                                <Button content="Client" addition="btn-block"/>
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
