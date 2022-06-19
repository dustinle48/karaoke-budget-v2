import React from 'react';
import RoomList from "./RoomList";
import { Box, Grid, Typography } from '@mui/material';

const styles = {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "50%",
    },
    text: {
      fontSize: 30,
      textAlign: "center",
    },
    box: {
      width: "80%",
      margin: "2rem 0",
    },
    button: {
      color: "#ffffff",
      backgroundColor: "#022140",
    }
}


export default function JoinRoom({rooms,connectToRoom}) {
  return (
    <>
    <Grid sx={styles.root}>
      <Typography sx={styles.text}>Join Room</Typography>
      <Box sx={styles.box}>
      { rooms.length > 0 ? ( 
        <RoomList rooms={rooms} connectToRoom={connectToRoom} />
      ) : (
        <Typography sx={styles.text}>No room</Typography>
      )
      }
      </Box>
    </Grid>
    </>
  )
}
