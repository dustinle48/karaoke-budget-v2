import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { socket } from '../../context/socket';

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        textAlign: "center",
    },
    input: {
        margin: "2rem 0",
    },
    button: {
        background: "#000000",
    }
}
export default function CreateRoom({connectToRoom}) {
    const [name, setName] = useState("");

    const handleCreate = async () => {
        try {
            const room = {
                name: name,
                password: "",
            };
            await axios.post("/rooms", room);
            socket.emit("new-room")
            connectToRoom(name);
        } catch(err) {
            console.error(err)
        }
    };

    return (
        <Grid sx={styles.root}>
            <Typography sx={styles.text}>Create Room</Typography>
            <TextField sx={styles.input} onChange={(event) => setName(event.target.value)} />
            <Button sx={styles.button} onClick={() => handleCreate()}>Create</Button>
        </Grid>
    )
}
