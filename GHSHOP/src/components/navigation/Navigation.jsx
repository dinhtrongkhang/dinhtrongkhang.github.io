import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const menu = [
    {
        path: "/",
        label: "Trang chủ",
    },
    {
        path: "/baby",
        label: "Trẻ Em",
    },
    {
        path: "/women",
        label: "Nữ",
    },
    {
        path: "/men",
        label: "Nam",
    },
    {
        path: "/news",
        label: "Tin Tức",
    },
];

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            {menu.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    children={item.label}
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                />
            ))}
        </nav>
    );
};

export default Navigation;