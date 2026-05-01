const { config } = require('dotenv');
const app = require('./src/app')
require('dotenv').config()
const port = process.env.port;
const connectDB = require('./src/config/db')

connectDB();

app.listen(port, (req, res) => {
    console.log(`app is listening at ${port}`);
})