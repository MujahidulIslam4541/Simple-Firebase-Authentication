import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>

            <NavLink style={{'marginRight':'20px'}} to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    )
}