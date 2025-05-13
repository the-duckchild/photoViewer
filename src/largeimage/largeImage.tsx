import React from "react";
import './largeimage.css';

export function PhotoViewer(props: {src: string}) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div >             
            <img src={props.src} id="largeImage"/> 
        </div>
        
    );
}