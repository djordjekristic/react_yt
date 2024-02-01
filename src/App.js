import React from "react";
import GetAllVideos from "./Components/AllVideos";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App =()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<GetAllVideos/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
