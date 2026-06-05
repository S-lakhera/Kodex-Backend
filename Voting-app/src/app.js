import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
let app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// console.log(__dirname);

app.use(express.static(path.join(__dirname, "..", "public")))

app.get("/", (req, res) => {
    res.send("Hi I am server")
})

export default app;