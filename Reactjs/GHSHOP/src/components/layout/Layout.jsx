import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

const Layout = () => {
    return (
        <div>
            <header>
                <div>Logo</div>

                <Navigation />
            </header>

            <Outlet />

            <footer>
                Gia Huy Shop
            </footer>
        </div>
    );
};

export default Layout;