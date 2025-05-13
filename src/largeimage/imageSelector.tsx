import React, {useState} from "react";
import './largeimage.css';

export function ImageSelector (props: {urls: string[], currentUrl: string, activeId: number, handleClick: (id: number, url: string) => void}){
    return (
        <div>
            <p>{props.currentUrl}</p>
            <div className="thumbnailGrid">
                {props.urls.map((link, index) => (
                  <img
                  src={link}
                  key={index}
                  onClick={() => props.handleClick(index, link)}
                  className={props.activeId === index ? "active" : ""}
                />
                ))}
            </div>
        </div>
    );
}