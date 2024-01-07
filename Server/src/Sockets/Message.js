import { verifyToken } from "../Controller/JsToken.js";
import io from "../Services/Socket.js";
const friends = [];

io.on("connection", (socket) => {
  console.log(`connedted ${socket.id}`);
  friends.push({ id: socket.id, name: "random", userid: "idnumber" });

  socket.emit("online", friends);

  socket.on("disconnect", () => {
    friends.forEach((friend, index) => {
      if (friend.id === socket.id) {
        friends.splice(index, 1);
      }
    });
    console.log("disconnect");
    socket.emit("online", friends);
    console.log(friends);
  });

  socket.on("client", (message) => {
    console.log(message);
  });
});
