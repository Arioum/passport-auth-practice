import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ user }) => {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };

    return (
        <nav>
            <p>LOGO</p>
            <div className='user-info'>
                {user ? (
                    <>
                        <p>Amogh Rao</p>
                        <button onClick={logout}>Logout</button>
                    </>) : (
                    <Link to="register">Register</Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar