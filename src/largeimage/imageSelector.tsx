import React from "react";
import './largeimage.css';
import { imageUrls } from "./getImageUrls";


export function ImageSelector (props){ 


return (

<div className="thumbnailGrid">
    {for (let link of props.urls){
    <img src= {link}/>
    }}
</div>
);
}