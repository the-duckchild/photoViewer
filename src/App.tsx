import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './largeimage/largeImage'
import { ImageSelector } from './largeimage/imageSelector'
import { imageUrls } from './largeimage/getImageUrls'


function App() {
    return (
        <div>
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={"https://picsum.photos/id/600/600/400.jpg"}/>
      
            <ImageSelector urls={imageUrls}/>
        </div>       
    )
  
}

export default App