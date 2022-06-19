import { Button, Grid, ListItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const styles = {
    root: {
        width: "100%",
    },
    box: {
        display: "flex",
        justifyContent: "stretch",
        border: "0.5px #000000 solid",
    },
    button: {
        backgroundColor: "#000000"
    }
}
export default function RoomList({rooms,connectToRoom}) {
    const handleJoin = (room) => {
        connectToRoom(room);
    };

    return (
        <Grid sx={styles.root}>
        { rooms.map((room,index) => (
            <Box key={index} sx={styles.box}>
                <ListItem key={room.name}>{room.name}</ListItem>
                <Button sx={styles.button} onClick={() => handleJoin(room.name)}>Join</Button>
            </Box>
        ))}
        </Grid>
    )
}
