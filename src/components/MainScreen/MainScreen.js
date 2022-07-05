import React, { useState } from 'react';
import { Box, Grid, Switch, Typography } from '@mui/material';

import { YoutubePlayer } from "./index";

const styles = {
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: "30px",
    width: "200px",
    borderRadius: "30px",
    marginBottom: "20px",
    backgroundColor: "#ffffff",
    opacity: 0.9,
    padding: "3rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};

export default function MainScreen({playList, connectedRoom}) {
  const [player, setPlayer] = useState(false);

  const handleSwitch = () => {
    setPlayer(!player)
  }

  return (
    <Grid sx={styles.root}>
      <Box sx={styles.box}>
        <Switch color='warning' onChange={handleSwitch}/>
        <Typography>Show player</Typography>
      </Box>
      
      { player && <YoutubePlayer song={playList[0]} connectedRoom={connectedRoom} />
      }
    </Grid>
  )
}
