import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './largeimage/largeImage'
import { ImageSelector } from './largeimage/imageSelector'
import { imageUrls } from './largeimage/getImageUrls'


function App() {
    const [currentUrl, setUrl] = useState(imageUrls[0]);
    const [active, setActive] = useState(0);

  
    const selectImage = (id: number, url: string) => {
      setActive(id);
      setUrl(url);
    };

    return (
        <div>
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={currentUrl}/>
      
            <ImageSelector urls={imageUrls} currentUrl={currentUrl} activeId={active} handleClick={selectImage}/>
        </div>       
    )
  
}

export default App