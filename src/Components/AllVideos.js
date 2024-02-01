import React from "react"

const VIDEOS = [
    {
      id:1,
      title:"How to learn CSS",
      url:"https://www.youtube.com/watch?v=n4R2E7O-Ngo",
      cover:"https://i.ytimg.com/vi_webp/OXGznpKZ_sA/hqdefault.webp"
    },
    {
      id:2,
      title:"How to learn React",
      url:"https://www.youtube.com/watch?v=SqcY0GlETPk",
      cover:"https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg" 
    }
  ]
const GetAllVideos= () =>{
    return(
        <>
        {VIDEOS.map(video =>{
      return <a href={video.url} target="_blank">
        <img src={video.cover}/>
        <h3>{video.title}</h3>
      </a>
    })}
        </>

    )
    }   
    export default GetAllVideos;    