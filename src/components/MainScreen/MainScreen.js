import React from 'react';
import { Grid } from '@mui/material';

import { YoutubePlayer } from "./index";

const styles = {
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  }
};

export default function MainScreen({playList, connectedRoom}) {
  return (
    <Grid sx={styles.root}>
      <YoutubePlayer song={playList[0]} connectedRoom={connectedRoom} />
    </Grid>
  )
}
