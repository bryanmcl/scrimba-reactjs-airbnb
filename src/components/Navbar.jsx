import React from "react";
import logo from "../assets/airbnb_logo.png"

function Navbar(){
    return(
        <nav className="bg-white drop-shadow-md p-5">
            <img src={logo} alt="Logo" />
        </nav>
    )
}

export default Navbar