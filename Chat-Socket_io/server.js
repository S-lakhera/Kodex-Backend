const app = require('./src/app')
const http = require('http')
const { Server } = require('socket.io')

let httpServer = http.createServer(app)
let io = new Server(httpServer)

io.on("connection", (socket) => {
    console.log(`User connected : ${socket.id}`);

    socket.on("tesla", (data) => {
        console.log(`${data.name} joined the room`);


        socket.emit("musk", {
            sender: data.name,
            message: data.message,
            timeStamp: Date.now()
        });
    })

    socket.on("disconnect", () => {
        console.log(`User disconnected : ${socket.id}`);
    })
})

httpServer.listen(3000, () => {
    console.log("server is listening on 3000");
})