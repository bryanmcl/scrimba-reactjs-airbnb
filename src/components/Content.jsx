import React from "react";
import Card from "./Card";
import Data from "./Data"

const cardComponent  = Data.map(item =>{
    return <Card 
                key = {item.id}
                data = {item}
            />
})

function Content(){


    return(
        <div className="flex gap-5 px-20 mt-5 overflow-x-auto">
            {cardComponent}
        </div>
    )
}

export default Content