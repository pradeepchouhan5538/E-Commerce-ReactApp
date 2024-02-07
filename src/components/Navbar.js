import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const navigateHandle = (path) => {
        navigate(path);
    }
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul>
                    <li style={{ fontWeight: "600", fontSize: 25 }}>E-Commerce</li>
                    <li onClick={() => { navigateHandle("/") }}>Products</li>
                    <li onClick={() => { navigateHandle("/cart") }}>Cart</li>
                    <li onClick={() => { navigateHandle("/create") }}>Add a Product +</li>
                </ul>
            </div>
            <div className="navbar-right">
                <span>It's nice to see you, User</span>
                <img src="https://tse1.mm.bing.net/th?id=OIP.LG6UqvINZmEBMrUzrhADJAHaHa&pid=Api&P=0&h=180" alt="Profile" />
            </div>
        </nav>
    );
};

export default NavBar;
