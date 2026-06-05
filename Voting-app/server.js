import app from "./src/app.js";
import http from "http"
import initSocket from "./src/socket/socket.server.js";

let httpServer = http.createServer(app)

initSocket(httpServer)

httpServer.listen(3000,() => {
    console.log("Server is listening at 3000");
})