import React from "react";
import {v4 as uuidv4} from 'uuid';
import { NavLink } from 'react-router-dom'

const links = [
    {
        id: uuidv4(),
        path: "/",
        text: "Home"
    },
    {
        id: uuidv4(),
        path: "categories",
        text: "Categories"
    }
]

const Navbar = () => {
    return (
        <nav className="container flexs">
            <h2>BookStore </h2>
            <ul className="flex">
                {links.map(link => <li key={link.id}> <NavLink to={link.path}> {link.text} </NavLink> </li>)}
            </ul>
        </nav>
    )
}

export default Navbar;