import image from "../logo.svg";
import htmll from "../image/html-5-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Card(prop) {
    return (
      <>
        <div className="h-full flex flex-wrap rounded-xl shadow-cla-blue border border-purple-950 scale-95 transition-all duration-300 hover:scale-100 overflow-hidden">
                <div  className=" items-center m-2">
                    <img
                        className="md:h-36 h-8 w-32 ml-auto mr-auto object-contain object-center"
                        src={prop.image} // Use skill.image or a default image
                        alt=""
                        height={100}
                        width={100}
                    />
                    <h1 className="text-white text-xl font-medium font-mono my-auto mx-4">
                        {prop.name}
                    </h1>
                </div>
                
        </div>
        
        
        
        </>
    );
}

export default Card;