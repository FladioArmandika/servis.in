import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
export const Register = () => {
    return (
        <div>
            <div className="container">
                <h2>gabung sebagai </h2>
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            <Link>
                                <Button content="Tukang Servis" addition="btn-block"/>
                            </Link>
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <h2>
                            <Link>
                                <Button content="Client" addition="btn-block"/>
                            </Link>
                        </h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
