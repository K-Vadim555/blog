import React from 'react'
import "./Input.scss"

export default function Input({ onChange }) {
    return (
        <input className="input" type="text" onChange={(e) => onChange(e.target.value)} />
    )
}
