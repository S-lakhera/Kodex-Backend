let mongoose = require('mongoose')
let mongoUrl = process.env.MONGODB_URL

let connectDb = async () => {
    try {
        await mongoose.connect(mongoUrl)
        console.log("MongoDB connected");
        
    } catch (e) {
        console.log("Error in connecting database:",e);
    }
}

module.exports = connectDb;