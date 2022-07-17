import React from 'react';
import { Link } from 'react-router-dom';
import css from './navbar.module.css';
export default function Navbar() {
    const navItems = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Projects",
            link: "/projects"
        },
        {
            title: "Contact",
            link: "/contact"
        }
    ]
    return (
    <ul className={css.navbar}>
        {navItems.map((item) => (
        <li key={item.title}>
            <Link to={item.link}>{item.title}
            </Link>
        </li>
        ))}
    </ul>
  )
}






