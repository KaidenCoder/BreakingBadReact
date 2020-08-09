import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                {/* <Link className="brand-logo" to="/">Poke' Times</Link> */}
                <ul className="center">
                    <li><NavLink exact to="/"><h5>Characters</h5></NavLink></li>
                    <li><NavLink to='/quotes'><h5>Quotes</h5></NavLink></li>
                    {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar