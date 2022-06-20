import React from 'react';
import ReactPlayer from 'react-player/youtube'
import { socket } from '../../context/socket';

const YoutubePlayer = ({song,connectedRoom}) => {
    const handleOnEnd = () => {
        socket.emit("next-song", connectedRoom)
    }
    
    return (
        <>
        { song &&
        <ReactPlayer
            url={`https://www.youtube.com/embed/${song.videoid}?autoplay=1`}
            controls={true}
            playing
            onEnded={handleOnEnd}
        />
        }
        </>
    )
};

export default YoutubePlayer;
