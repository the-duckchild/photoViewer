import React from "react";
import './largeimage.css';
import { imageUrls } from "./getImageUrls";


export function ImageSelector (props: {urls: string[]}){ 


return (

<div className="thumbnailGrid">
    {props.urls.map((link, index) => (
    <img key={index} src={link}/>)
    )}
</div>
);
}