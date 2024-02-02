import React from "react";
import GetAllVideos from "./Components/AllVideos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Video from "./Components/video";






const App =()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<HomePage/>}/>
      <Route path="/video/:id" element={<Video/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
