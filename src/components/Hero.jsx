import React from "react";
import groupfoto from "../assets/Groupfoto.png"

function Hero(){
    return(
        <div className="container px-20 w-full font-['Poppins', sans-serif]">
            <img className="mx-auto my-5" src={groupfoto} alt="" />
            <h1 className="text-5xl font-bold">Online Experiences</h1>
            <p className="mt-1 text-2xl max-w-[600px]">Join unique interactive activities led by one-of-a kind hosts-all without leaving home.</p>
        </div>
    )
}

export default Hero