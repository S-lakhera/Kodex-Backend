const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

let jwt_secret = process.env.JWT_SECRET || "dfhvhsavdcvnvuyhdcyhvzh"


let registerController = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        // Null check
        if (!name || !email || !password) return res.status(400).json({
            message: "All fields are required"
        })

        let ifExists = await UserModel.findOne({
            email: email,
        })

        if (ifExists) return res.status(409).json({
            message: "Email already exists."
        })

        // Password Hashing

        let hashedPass = await bcrypt.hash(password, 10)

        let newUser = new UserModel({
            email, name, password: hashedPass
        })

        await newUser.save()

        // Creating and setting token
        let token = jwt.sign({ id: newUser._id }, jwt_secret, { expiresIn: '1h' })
        res.cookie("token", token);

        return res.status(201).json({
            message: "User Created Successfully",
            user: newUser
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server Error"
        })
    }
}

let loginController = async (req, res) => {
    try {
        let { email, password } = req.body;

        // Null check or data validation
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        };

        // Finding User in database 
        let user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                message: "User not exist. Try register.."
            })
        }

        // Cheching password is correct or not ??
        let isPassCorrect = await bcrypt.compare(password, user.password)
        if (!isPassCorrect) {
            return res.status(401).json({
                message: "Wrong password"
            })
        }

        // JWT Token
        let token = jwt.sign({ id: user._id }, jwt_secret, { expiresIn: "1h" })
        res.cookie("token", token);

        //Response
        return res.status(200).json({
            message: "User Logged in successfully",
            user: user
        })

    } catch (error) {
        console.log(error); 
        return res.status(500).json({
            message: "Internal server Error"
        })
    }
}

module.exports = {
    registerController,
    loginController
}