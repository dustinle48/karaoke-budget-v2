import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { PlayList } from './index';

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    text: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
    box: {  
        overflowY: "scroll",
    },
    button: {
        margin: "1rem 0",
        backgroundColor: "#000000",
    }
};

export default function Room(props) {
    const { playList, connectedRoom, connectToRoom, disconnectFromRoom } = props;

    const handleDisconnect = () => {
        disconnectFromRoom();
    };

    const handleReconnect = () => {
        connectToRoom(connectedRoom)
    };

    return (
        <Grid sx={styles.root}>
            <Typography sx={styles.text}>Connected to {connectedRoom}</Typography>
            <Button sx={styles.button} onClick={() => handleDisconnect()}>Leave Room</Button>
            <Button sx={styles.button} onClick={() => handleReconnect()}>Reconnect</Button>
            <Box sx={styles.box}>
                <PlayList playList={playList} connectedRoom={connectedRoom} />
            </Box>
        </Grid>
    )
}
