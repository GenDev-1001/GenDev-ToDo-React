import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <div className="navbar-brand ms-3">
                GenApp
            </div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/" exact>
                        Main
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/about">
                        Info
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
