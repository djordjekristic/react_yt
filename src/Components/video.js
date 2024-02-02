import { useParams } from "react-router-dom";
import VIDEOS from "./../videos.json"



const Video = ()=>{

    const {id}= useParams();
    let videoFound = null;

    VIDEOS.forEach(video=>{
        if(video.id == id){
            videoFound = video;
        }
    })

    if(videoFound === null){
        return <h2>Video is not found</h2>
    }
    
    return(
       <>
       <h2>{videoFound.title}</h2>
       <p>{videoFound.url}</p>

       </> 
    )
}

export default Video;