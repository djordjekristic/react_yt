


const SearchBar = ({videos,onSearchVideo})=>{
    return(
        <form action="">
            <label>
                Search:
                <input type="text" name="search" onInput={e => SearchVideoByVideo(e.currentTarget.value,videos,onSearchVideo)} />
            </label>
        </form>
    )
}

const SearchVideoByVideo = (name,videos,onSearchVideo)=>{
    let foundVideos = [];
    videos.forEach(video =>{
        name = name.toLowerCase();
        video.title = video.title.toLowerCase();

        if(video.title.includes(name)){
            foundVideos.push(video);
        }
        }
        
    )
    onSearchVideo(foundVideos);
}

export default SearchBar;