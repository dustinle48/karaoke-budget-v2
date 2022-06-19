import React from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { socket } from '../../context/socket';

export default function Controller({song,connectedRoom}) {
  
  const handleAddSongToList = () => {
    socket.emit("add-song-to-list", connectedRoom, song)
  };

  const handleAddSongToTop = () => {
    socket.emit("add-song-to-top", connectedRoom, song)
  };

  return (
    <>
    <IconButton onClick={() => handleAddSongToList()}><AddIcon /></IconButton>
    <IconButton onClick={() => handleAddSongToTop()}><ArrowUpwardIcon /></IconButton>
    </>
  )
}
