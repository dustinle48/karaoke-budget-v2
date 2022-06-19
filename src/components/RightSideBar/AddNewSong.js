import React from 'react';
import { Box, Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { socket } from '../../context/socket';

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    box: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        margin: "0.5rem 0",
    },
    text: {
        textAlign: "center",
    },
    button: {
        backgroundColor: "#000000",
    }
};

export default function AddNewSong({songSorted}) {
    
    const space = songSorted.find((song,index) => parseInt(song.songid) !== index);
    const newSongId = space ? space.songid - 1 : songSorted.length;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements;
        const name = formElements.name.value;
        const songid = formElements.songid.value;
        const link = formElements.videoid.value.split("/");
        const videoid = link[link.length-1];
        const song = {
            name: name,
            songid: songid,
            videoid: videoid
        };
        try {
            await axios.post("/karaokes", {name,songid,videoid});
            socket.emit("add-song-to-database", song);
            alert("Success!");
            formElements.name.value = "";
            formElements.songid.value = newSongId.toString().padStart(5,"0");
            formElements.videoid.value = "";
        } catch(err) {
            alert("Error!")
            console.error(err)
        }
    };

    return (
        <Grid sx={styles.root}>
            <Typography sx={styles.text}>Add New Song</Typography>
            <form onSubmit={handleSubmit}>
            <Box sx={styles.box}>
                <FormControl required>
                    <TextField name="songid" sx={styles.input} disabled size='small' value={`${newSongId.toString().padStart(5,"0")}`}/>
                </FormControl>
                <FormControl required>
                    <TextField name="name" sx={styles.input} required size='small' placeholder='Song name'/>
                </FormControl>
                <FormControl required>
                    <TextField name="videoid" sx={styles.input} required size='small' placeholder='Song link'/>
                </FormControl>
                <Button sx={styles.button} type="submit">Add Song</Button>
            </Box>
            </form>
        </Grid>
    )
}
