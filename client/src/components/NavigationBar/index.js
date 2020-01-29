import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ButtonPrimary'

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to='/' className="navbar-brand">servis.in</Link>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/service' className="nav-link" href="#">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/auth' className="nav-link">Masuk</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar
