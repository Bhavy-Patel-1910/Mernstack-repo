import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
        <nav style={{background:"black", alignItems:"center",justifyContent:"space-between",color:"white",display:"flex"}}>
        
           <Link class="nav-link" to="/home">
            Home
           </Link>

            <Link class="nav-link" to="/favorites">
            Favorits
            </Link>

            <Link class="nav-link" to="/Aboutus">
            About-us
            </Link>

            <Link class="Contact" to="/contact">
            Contact
            </Link>
            <Link class="nav-link" to="/login">
            Login
            </Link>
        </nav>

    </div>
  )
}
