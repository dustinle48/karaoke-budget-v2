import React from 'react';
import YouTube from 'react-youtube';
import { socket } from '../../context/socket';

const YoutubePlayer = ({song,connectedRoom}) => {
    const opts = {
        playerVars: {
            autoplay: 1,
        }
    }

    const handleOnEnd = () => {
        socket.emit("next-song", connectedRoom)
    }
    
    return (
        <>
        { song &&
        <YouTube
            videoId={song.videoid}
            onEnd={handleOnEnd}
            opts={opts}
        />
        }
        </>
    )
};

export default YoutubePlayer;
