import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
app.use(cors());

const server = http.createServer(app);

//PENDING CORS CONFIGURATION
// const io = new Server(server, {
//   cors: {
//     origin: 'REACT_APP_CORS_ORIGIN',
//   }
// });

const io = new Server(server);

app.get('/',(req,res)=>{
    res.send("test req");
    // console.table({req});
});


server.listen(3000);