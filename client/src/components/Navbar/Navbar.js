import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => (
    <nav className='navbar'>
        <span className='apptitle'>Notaker</span>
        <span className='homenav'><Link to='/'>Home</Link></span>
        <span className='dynav'><Link to='/signup'> Sign Up</Link></span>
        <span className='dynav'><Link to='/login'>Log In </Link></span>
    </nav>
)

export default Navbar;