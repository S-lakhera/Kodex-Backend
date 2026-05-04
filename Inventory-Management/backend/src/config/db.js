const { default: mongoose } = require("mongoose");

const url = process.env.MONGODB_URL;

async function connectDB(){
    try {
        await mongoose.connect(url)
        console.log("Connected to DB");
    } catch (e) {
        console.log("Error in connecting DB",e);
    }
}

module.exports = connectDB;