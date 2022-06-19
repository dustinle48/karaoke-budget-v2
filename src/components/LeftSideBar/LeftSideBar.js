import React from 'react'
import { Divider, Grid } from '@mui/material'

import { CreateRoom, JoinRoom, Room } from './index';

const styles = {
    root: {
        height: "100%",
        backgroundColor: "#ffffff",
        opacity: 0.6,
        padding: "3rem 1rem",
    }
}

export default function LeftSideBar(props) {
    const { rooms, playList, connectToRoom, connectedRoom, disconnectFromRoom } = props
    
    return (
        <Grid sx={styles.root}>
            { !connectedRoom ? (
                <>
                <CreateRoom connectToRoom={connectToRoom} />
                <Divider />
                <JoinRoom rooms={rooms} connectToRoom={connectToRoom} />
                </>
            ) : (
                <Room playList={playList} connectedRoom={connectedRoom} connectToRoom={connectToRoom} disconnectFromRoom={disconnectFromRoom}/>
            )
            }
        </Grid>
  )
}
