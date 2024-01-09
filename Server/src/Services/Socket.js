import { Server } from "socket.io";
import server from "./Express.js";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

export default io;
