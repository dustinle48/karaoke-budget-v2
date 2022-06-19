import React from 'react';
import { Box, ListItem } from '@mui/material';

import { Controller } from './index';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
  }
};

export default function SongList({songs,connectedRoom}) {
  return (
    <>
    { songs.map((song,index) => (
      <Box key={index} sx={styles.root}>
        <ListItem>{song.name}</ListItem>
        { connectedRoom &&
        <Controller song={song} connectedRoom={connectedRoom}></Controller>
        }
      </Box>
    ))}
    </>
  )
}
