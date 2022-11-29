import React from 'react'
import "./Btn.scss"

export default function Btn({text, func}) {
    return (
        <button className="btn" onClick={func}>{text}</button>
    )
}