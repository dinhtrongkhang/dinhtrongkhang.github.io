import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>
                <div>Logo</div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/baby">Baby</NavLink>
                    <NavLink to="/women">Women</NavLink>
                    <NavLink to="/men">Men</NavLink>
                    <NavLink to="/news">New</NavLink>
                </nav>
            </header>

            <Outlet />

            <footer>
                Gia Huy Shop
            </footer>
        </div>
    );
};

export default Layout;