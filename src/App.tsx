import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoViewer } from './largeimage/largeImage'
import { ImageSelector } from './largeimage/imageSelector'
import { imageUrls } from './largeimage/getImageUrls'


function App() {
    return (
        <div>
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={"https://picsum.photos/id/600/800/600.jpg"}/>

            <ImageSelector urls={imageUrls[0]}/>

        </div>
        
    )

  
}



export default App
