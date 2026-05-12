let jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
let jwt_secret = process.env.JWT_SECRET || "dfhvhsavdcvnvuyhdcyhvzh"

let authMiddleware = async (req, res, next) => {

    try {
        //Checking If token exists
        let token = req.cookies.token;
        if (!token) return res.status(404).json({
            message: "Please Login first, Token not found"
        })

        // Checking if token is un-tampered
        let verifiedUser = jwt.verify(token, jwt_secret)
        if (!verifiedUser) {
            return res.status(401).json({
                message: "UnAuthorized User..."
            })
        }

        let user = await UserModel.findById(verifiedUser.id);
        // console.log(user);
        if(!user){
            return res.status(401).json({
                message: "UnAuthorized User..."
            })
        }
        req.user = user;

        next();

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error",
            error
        })
    }

}

module.exports = authMiddleware;