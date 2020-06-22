import React from "react"
import { Link } from "react-router-dom"
import "../styles/components/header.scss"

interface IUserHeader {
  position?: "fixed" | "relative"
}

const UserHeader: React.FC<IUserHeader> = ({ position = "fixed" }) => {
  return (
    <header id="usr-header" style={{ position }}>
      <nav>
        <Link to="" id="logo"></Link>
        <ul id="main-nav">
          <li>Stores</li>
          <li>Inbox</li>
          <li>Favourites</li>
          <li>
            <div id="usr-icon">
              <div id="usr-img"></div>
            </div>
            <ul id="usr-account"></ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default UserHeader
