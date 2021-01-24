import React from 'react'
import './Button.css'

export const Button = ({
    children,
    onClick,
}) => {

    return (
        <button className={`btn 'btn--primary' 'btn--medium'`} onClick={onClick}>
            {children}
        </button>
    )
}