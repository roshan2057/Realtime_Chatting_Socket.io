import {Server} from 'socket.io';
import{createServer} from 'http';

const httpserver = createServer();
const io = new Server(httpserver,{cors:{origin:"http://localhost:5173",credentials:true}});
const PORT = process.env.SOCKET_PORT || 5000;
httpserver.listen(PORT,()=>{
    console.log(`Socket running in port ${PORT}`)
})



export default io;