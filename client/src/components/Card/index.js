import React from 'react'

const Card = ({children,width}) => {
    return (
        <div className="card" style={{width:width}}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card
