import { save_message } from "../Controller/Controller.js";
import { verifyToken } from "../Controller/JsToken.js";
import io from "../Services/Socket.js";
var friends = [];

io.on("connection", (socket) => {
  socket.on("connect", () => {
    console.log("connect");
  });
  console.log(`connedted ${socket.id}`);
  const tokenString = socket.handshake.headers.cookie;
  if (tokenString) {
    const token = tokenString.split("=")[1];
    const data = verifyToken(token);
    friends.push({ id: socket.id, name: data.username, userid: data.id });
  }
  socket.on("client", (message) => {
    save_message(message);
    socket.to(message.id).emit("server", {from:message.fromid, text:message.text});
  });

  socket.on("disconnect", () => {
    friends = friends.filter((friend) => friend.id !== socket.id);
    io.emit("online", friends);
  });

  io.emit("online", friends);
  console.log(socket.id);
});
