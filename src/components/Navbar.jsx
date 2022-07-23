import React from "react"
import {v4 as uuidv4} from 'uuid'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

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
        <nav className="container flex navbar__container">
            <div className="flex">
                <h2>BookStore CMS</h2>
                <ul className="flex">
                    {links.map(link => <li key={link.id}> <NavLink  style={({ isActive }) => {
              return {
                color: isActive ? "#000" : ""}
            }} to={link.path}> {link.text} </NavLink> </li>)}
                </ul>
            </div>
            {/* <div>
                profile pic
            </div> */}
        </nav>
    )
}

export default Navbar;