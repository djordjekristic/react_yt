import React, { useState } from "react";
import GetAllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import VIDEOS from "./../videos.json"





const HomePage = ()=>{

  let [videos,setVideos] = useState(VIDEOS);
  let [filteredVideos,setFilteredVideos] = useState(VIDEOS);
  const handleSearchVideo = (results) =>{
    setFilteredVideos(results);
  }
  
    return(
        <>
          <SearchBar videos={videos} onSearchVideo={handleSearchVideo}/>
          <GetAllVideos videos={filteredVideos}/>
        </>
    )
}

export default HomePage;