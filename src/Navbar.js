import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <h1>Lambda Eats</h1>
            <div className='links'>
            <Link to='/' className='home-button'>Home</Link>
            <Link to='/help' className='help-button'>Help</Link>
            </div>
        </nav>
    )
}

export default Navbar;