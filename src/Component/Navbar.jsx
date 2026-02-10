import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <nav style={{background:"black", alignItems:"center",justifyContent:"space-between",color:"white",display:"flex"}}>
        
           <Link class="nav-link" to="/NetflixHome">
            Home
           </Link>

           <Link class="nav-link" to="/NetflixMovies">
            Movies
           </Link>

           <Link class="nav-link" to="/Netflixshows">
            Shows
           </Link>

            {/* <Link class="nav-link" to="/Home">
            Home
            </Link> */}

            {/* <Link class="nav-link" to="/Aboutus">
            About-us
            </Link> */}

            {/* <Link class="Contact" to="/contact">
            Contact
            </Link> */}

            <Link class="nav-link" to="/Team">
            Team
            </Link>

            <Link class="nav-link" to="/favorites">
            Favorits
            </Link>

            <Link class="nav-link" to="/UseStateDemo1">
            Demo1
            </Link>

            <Link class="nav-link" to="/UseStateDemo2">
            Demo2
            </Link>

            <Link class="nav-link" to="/UseStateDemo3">
            Demo3
            </Link>

            {/* <Link class="nav-link" to="/login">
            Login
            </Link> */}
            
            <Link class="nav-link" to="/functiondemo1">
            Function Demo
            </Link>

        </nav>

    </div>
  )
}
