import { Server } from 'socket.io'

const voteCounts = {}

export default function initSocket(httpServer) {
    const io = new Server(httpServer)

    io.on("connection", (socket) => {
        console.log(`New User joined : ${socket.id}`);

        let room = socket.handshake.query.room
        socket.join(room)
        console.log(`User joined '${room}' room`)

        if(!voteCounts[room]){
            voteCounts[room] = {
                yes:0,
                no:0
            }
        }
        

        socket.on("vote_yes", () => {
            voteCounts[room].yes += 1;
            console.log(`yes increased by 1 : `,voteCounts);
            
            io.to(room).emit("vote_update",voteCounts[room])
        })
        
        socket.on("vote_no", () => {
            voteCounts[room].no += 1;
            console.log(`No increased by 1 : `, voteCounts);
            io.to(room).emit("vote_update",voteCounts[room])
        })

        socket.on("disconnect", () => {
            console.log(`User disconnected : ${socket.id}`);
        })
    })
}