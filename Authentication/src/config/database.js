const { default: mongoose } = require("mongoose")

let connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected successfully");
        
    }catch(e){
        console.log(e);
    }
}

module.exports = connectDB;