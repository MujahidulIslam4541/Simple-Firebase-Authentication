import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Home/Home'

export default function Main() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}
