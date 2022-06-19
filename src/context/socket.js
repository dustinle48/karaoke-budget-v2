import { io } from "socket.io-client";

import React from "react";

export const socket = io(window.location.origin);
socket.on("connection", () => {
    console.log("connected to server");
});
export const SocketContext = React.createContext();