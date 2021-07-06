import React from "react";

const VideoDetail = ({video}) =>{
    if(!video){
        return<div>Loading...</div>
    }
    return (
    <div className="ui segment">
        <div className="ui embed">
            <iframe title="video player"src={`https://www.youtube.com/embed/${video.id.videoId}`}/>
        </div>
        <h4 className="hi header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
    </div>
    )
    
};

export default VideoDetail;