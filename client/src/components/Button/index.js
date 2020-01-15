import React from 'react'

export const Button = ({content,type,color,addition}) => {
    return (
        <button className={"btn btn-primary " + addition} >
            {content}
        </button>
    )
}
