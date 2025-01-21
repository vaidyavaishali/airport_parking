import React from 'react'
import NavSecond from './components/NavSecond'
import NavFirst from './components/NavFirst'
import './header.css'
const Header = () => {
    return (
        <div className='sticky z-50 top-0 left-0 right-0 w-screen'>
            <NavFirst />
            <NavSecond />
        </div>
    )
}

export default Header
