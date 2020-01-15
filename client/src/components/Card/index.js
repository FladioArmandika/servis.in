import React from 'react'

import './card.css'

export const Card = ({content,width,padding}) => {
    return (
        <div className="card" style={{width:width,padding:padding}}>
            {content}
        </div> 
    )
}
