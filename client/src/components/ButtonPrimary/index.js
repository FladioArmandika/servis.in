import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const ButtonPrimary = ({children, block=""}) => {

    return (
        <button className={`btn btn-primary btn-${block}`}>
            {children}
        </button>
    )
}

export default ButtonPrimary
