import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link material-icons" to='/'>&#xe8b6;</Link>
      {/* <Link className="nav__link material-icons" to='/saved'>&#xe867;</Link> */}
      <Link className="nav__link material-icons" to='/about'>&#xe88e;</Link>
    </nav>
  )
}
