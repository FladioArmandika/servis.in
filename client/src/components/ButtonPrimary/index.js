import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, block=""}) => {

    return (
        <button className={`btn btn-primary btn-${block}`}>
            {children}
        </button>
    )
}

export default Button
