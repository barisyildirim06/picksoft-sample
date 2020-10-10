import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/picksoftlogo.png'

function Navbar() {
    return (
        <div>
            <nav id="navbar">
                <div className="nav-center">
                    <Link to="/">
                        <img src={logo} className="nav-logo" alt="HUFFPOST" />
                    </Link>
                </div>
                <div className="nav-login">
                    <ul className="nav-sign">
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/companies">Companies</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
