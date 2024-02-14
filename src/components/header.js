import * as React from "react"
import "../styles/header.css"
import { Link } from "gatsby"

const Header = () => {
    return <header className="header">
    <Link to="/" className="title">CNB</Link>
    <div className="nav">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/archive">ARCHIVE</Link>
    </div>
    </header>
}

export default Header