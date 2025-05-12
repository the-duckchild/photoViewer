import React, {useState} from "react";
import './largeimage.css';

export function ImageSelector (props: {urls: string[]}){
    const [currentUrl, setUrl] = useState('');
    const [active, setActive] = useState(100);
    
    const Images = ({ id, url, isActive, onClick }) => {
        return (
          <img
            src={url}
            onClick={() => navigate(id, url)}
            className={isActive ? "active" : ""}
          />
        );
      };

      const navigate = (id, url) => {
        setActive(id);
        setUrl(url);
      };

    return (
        <div>
            <p>{currentUrl}</p>
            <div className="thumbnailGrid">
                {props.urls.map((link, index) => (
                   <Images key={index} id={index} url={link} isActive={active === index} onClick={navigate}/>
                ))}
            </div>
        </div>
    );
}