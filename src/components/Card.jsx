import React from "react";

import star from "../assets/Star.png"

function Card(props){

    return(
        <div className="w-[250px] flex flex-col relative flex-shrink-0 flex-grow-0">
            <img className="w-full h-[300px] rounded-md" src= {props.data.coverImg} alt="katie" />
            {props.data.openSpots === 0 && <div className="max-w-[100px] bg-gray-100 absolute top-2 left-4 py-1 px-2 text-sm font-bold rounded-md">SOLD OUT</div>}
            <div className="rating flex items-center mt-2">
                <img src={star} alt="star" />
                <p className="">{props.data.stats.rating} <span className="text-gray-400">({props.data.stats.reviewCount}) • {props.data.location}</span></p>
            </div>
            <p className="font-sans mt-2">{props.data.title}</p>
            <p><span className="font-bold">From ${props.data.price}</span> / person</p>
        </div>
    )
}

export default Card