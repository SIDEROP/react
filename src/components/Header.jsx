import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_container">
        <div className="logo">
            <h2>SIDEROP</h2>
        </div>
        <div className="navbar">
            <li><Link to="home">home</Link></li>
            <li><Link to="about">about</Link></li>
            <li><Link to="contact">contact</Link></li>
        </div>
    </div>
  )
}

export default Header