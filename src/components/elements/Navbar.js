import React from 'react';
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Password Remember
                </Link>
            </div>
            <div>
                <Link to="/passwords/add" className="btn btn-light ml-auto">
                    Add Password
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
