import React from "react";
import './largeimage.css';

export function PhotoViewer(props) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div >             
            <img src={props.src} className="largeImage"/> 
        </div>
        
    );
}