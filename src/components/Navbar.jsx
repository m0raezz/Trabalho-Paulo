import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <nav class = "menu">
        <ul>
            <li><Link to="/home" class = "a">Home</Link></li>
            <li><Link to="/contact" class = "a">Contato</Link></li>
            <li><Link to="/sobre"  class = "a">Sobre</Link></li>
            <li><Link to="/login"  class = "a">Login</Link></li>
        </ul>
    </nav>
  )
}
export default Navbar


