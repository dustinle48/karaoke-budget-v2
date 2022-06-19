import { io } from "socket.io-client";

import React from "react";

export const socket = io("https://karaoke-budget-backend.herokuapp.com");
socket.on("connection", () => {
    console.log("connected to server");
});
export const SocketContext = React.createContext();