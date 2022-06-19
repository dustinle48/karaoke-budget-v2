import React from 'react';
import { Box, Grid, ListItem, Typography } from '@mui/material';

import { Controller } from './index';

const styles = {
    root: {
    },
    box: {
        display: "flex",
        flexDirection: "row",
    },
    text: {
        textAlign: "center",
    }
};

export default function PlayList({playList,connectedRoom}) {
    return (
        <Grid sx={styles.root}>
        { playList.length > 0 ? (
            playList.map((song,index) => (
                <Box key={index} sx={styles.box}>
                    <ListItem key={song.id}>{song.name}</ListItem>
                    <Controller song={song} index={index} connectedRoom={connectedRoom} />
                </Box>
            ))
        ) : (
            <Typography sx={styles.text}>No songs</Typography>
        )
        }
        </Grid>
    )
}
