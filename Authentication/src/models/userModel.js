const { default: mongoose } = require("mongoose");

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        trim: true,
        minLength: [6, "Password should have at least 6 characters"]
    }
}, {
    timestamps: true
}
)

let UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;