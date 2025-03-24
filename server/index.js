import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import path from 'path';
const app = express();
app.use(cors());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))

const server = http.createServer(app);

//PENDING CORS CONFIGURATION
// const io = new Server(server, {
//   cors: {
//     origin: 'REACT_APP_CORS_ORIGIN',
//   }
// });

const io = new Server(server);

io.on("connection", function (socket) {
    socket.on("send-location", function (data) {
        io.emit("receive-location", { id: socket.id, ...data })
    })

    socket.on("disconnect", function () {
        io.emit("user-disconnect", { id: socket.id })
    })
})


app.get("/", (req, res) => {
    res.render("index")
})

server.listen(3000);