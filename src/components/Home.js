import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Grid } from '@mui/material';
import karaoke from "../assets/karaoke.jpg";
import axios from 'axios';
import { SocketContext } from "../context/socket";
import { LeftSideBar } from './LeftSideBar';
import { MainScreen } from './MainScreen';
import { RightSideBar } from './RightSideBar';

const styles = ({
    root: {
        height: "100vh",
        alignItems: "center",
        backgroundImage: `url(${karaoke})`,
        backgroundSize: "cover",
    },
    leftSideBar: {
        height: "100%",
    },
    center: {
    },
    rightSideBar: {
        height: "100%",
    }
});

export default function Home() {
    const socket = useContext(SocketContext);

    const [rooms, setRooms] = useState([]);
    const [connectedRoom, setConnectedRoom] = useState("");
    const [songList, setSongList] = useState([]);
    const [playList, setPlayList] = useState([]);

    const connectToRoom = (room) => {
        if (connectedRoom) {
            disconnectFromRoom();
        }
        
        socket.emit("connect-to-room", room);
        setConnectedRoom(room);
    };

    const disconnectFromRoom = () => {
        socket.emit("disconnect-from-room", connectedRoom);
        setConnectedRoom("");
    };

    const fetchRooms = async () => {
        try {
            const { data } = await axios.get(`/rooms`);
            setRooms(data);
        } catch(err) {
            console.error(err);
        }
    };

    const fetchSongList = async () => {
        try {
            const { data } = await axios.get(`/karaokes`);
            setSongList(data);
        } catch(err) {
            console.error(err);
        }
    };

    const newRoom = useCallback((data) => {
        setRooms(() => [...data]);
    },[setRooms]);

    const addSongToDatabase = useCallback((song) => {
        songList.push(song);
        setSongList(() => [...songList]);
    },[setSongList,songList]);

    const fetchPlayList = useCallback((data) => {
        setPlayList(() => [...data]);
    },[setPlayList]);

    const nextSong = useCallback(() => {
        playList.shift();
        setPlayList(() => [...playList]);
    },[setPlayList, playList]);

    const addSongToList = useCallback((song) => {
        playList.push(song);
        setPlayList(() => [...playList]);
    },[setPlayList,playList]);

    const addSongToTop = useCallback((song) => {
        playList.splice(1,0,song);
        setPlayList(() => [...playList]);
    },[setPlayList,playList]);

    const moveSongUp = useCallback((song,index) => {
        playList.splice(index,1);
        playList.splice(index-1,0,song);
        setPlayList(() => [...playList]);
    },[setPlayList,playList]);

    const topSongFromList = useCallback((song,index) => {
        playList.splice(index,1);
        playList.splice(1,0,song);
        setPlayList(() => [...playList]);
    },[setPlayList,playList]);

    const deleteSongFromList = useCallback((index) => {
        playList.splice(index,1);
        setPlayList(() => [...playList]);
    },[setPlayList,playList]);

    useEffect(() => {
        socket.on("new-room", newRoom);
        socket.on("add-song-to-database", addSongToDatabase);
        socket.on("play-list", fetchPlayList);
        socket.on("next-song", nextSong);
        socket.on("add-song-to-list", addSongToList);
        socket.on("add-song-to-top", addSongToTop);
        socket.on("move-song-up", moveSongUp);
        socket.on("top-song-from-list", topSongFromList)
        socket.on("delete-song-from-list", deleteSongFromList)

        return () => {
            socket.off("new-room", newRoom);
            socket.off("add-song-to-database", addSongToDatabase);
            socket.off("play-list", fetchPlayList);
            socket.off("next-song", nextSong);
            socket.off("add-song-to-list", addSongToList);
            socket.off("add-song-to-top", addSongToTop);
            socket.off("move-song-up", moveSongUp);
            socket.off("top-song-from-list", topSongFromList)
            socket.off("delete-song-from-list", deleteSongFromList)
        };
    }, [newRoom,addSongToDatabase,fetchPlayList,nextSong,addSongToList,addSongToTop,moveSongUp,topSongFromList,deleteSongFromList,socket]);

    useEffect(() => {
        fetchRooms();
        fetchSongList();
    },[]);

    return (
        <Grid container component="main" sx={styles.root}>
            <Grid item sx={styles.leftSideBar} xs={12} sm={5} md={3} lg={2}>
                <LeftSideBar rooms={rooms} playList={playList} connectToRoom={connectToRoom} disconnectFromRoom={disconnectFromRoom} connectedRoom={connectedRoom} />
            </Grid>
            <Grid item sx={styles.center} xs={0} sm={0} md={5} lg={6}>
                { window.innerWidth >= 1024 &&
                    <MainScreen playList={playList} connectedRoom={connectedRoom} />
                }
                </Grid>
            <Grid item sx={styles.rightSideBar} xs={12} sm={7} md={4} lg={4}>
                <RightSideBar songList={songList} connectedRoom={connectedRoom} />
            </Grid>
        </Grid>
    )
}
