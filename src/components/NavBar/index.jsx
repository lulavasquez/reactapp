import React from "react";
import CartWidget from "../CartWidget";
import second from '../CartWidget';

const NavBar = () => {
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Erase una vez</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="" href="#"><CartWidget /></a>
                    </li>
                    </ul>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
            </div>
        </nav>
    );
}

export default NavBar;