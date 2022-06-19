import React, { useState } from 'react'
import { Box, Divider, Grid, TextField } from '@mui/material'

import { SongList, AddNewSong } from './index'

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#ffffff",
        opacity: 0.6,
        padding: "0 1rem",
    },
    input: {
        margin: "1rem 0",
    },
    box: {
        height: "60%",
        overflowY: "scroll",
    }
}

export default function RightSideBar({songList,connectedRoom}) {
    const [search, setSearch] = useState("");

    const songs = songList.filter((song) => (song.name.toLowerCase().indexOf(search.toLowerCase()) > -1) || (song.songid.indexOf(search.toLowerCase()) > -1));

    const songSorted = [...songList].sort((a,b) => a.songid - b.songid)
    
    const handleFilter = (event) => {
        setSearch(event.target.value);
    };

    return (
        <Grid sx={styles.root}>
            <TextField sx={styles.input} onChange={(event) => handleFilter(event)} placeholder="Search song ..." />
            <Box sx={styles.box}>
                <SongList songs={songs} connectedRoom={connectedRoom} />
            </Box>
            <Divider />
            <AddNewSong songSorted={songSorted} />
        </Grid>
    )
}
