import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/baby">Baby</NavLink>
            <NavLink to="/women">Women</NavLink>
            <NavLink to="/men">Men</NavLink>
            <NavLink to="/news">New</NavLink>

            <main>
                Nội dung trên trang chủ
            </main>

            <footer>
                Gia Huy Shop
            </footer>
        </div>
    );
};

export default Home;