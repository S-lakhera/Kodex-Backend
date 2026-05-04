let mongoose = require('mongoose')

let connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected");
        
    } catch (e) {
        console.log("Error in connecting database:",e);
    }
}

module.exports = connectDb;