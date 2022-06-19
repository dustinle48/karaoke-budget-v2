import React from 'react';

import { socket } from '../../context/socket';

import { IconButton } from '@mui/material';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ClearIcon from '@mui/icons-material/Clear';

export default function Controller({song,index,connectedRoom}) {

    const moveSongUp = () => {
        socket.emit("move-song-up", connectedRoom, song, index)
    };

    const topSongFromList = () => {
        socket.emit("top-song-from-list", connectedRoom, song, index)
    };

    const deleteSongFromList = () => {
        socket.emit("delete-song-from-list", connectedRoom, index)
    };

    return (
        <>
        <IconButton onClick={() => moveSongUp()}><KeyboardControlKeyIcon /></IconButton>
        <IconButton onClick={() => topSongFromList()}><KeyboardDoubleArrowUpIcon /></IconButton>
        <IconButton onClick={() => deleteSongFromList()}><ClearIcon /></IconButton>
        </>
    )
}   
