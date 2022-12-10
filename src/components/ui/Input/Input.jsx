import React from 'react'
import "./Input.scss"

export default function Input({ onChange }) {
    return (
        <input style={{color:'black'}} className="input" type="text" onChange={(e) => onChange(e.target.value)} />
    )
}
