let jwt = require("jsonwebtoken");
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
            return res.status(404).json({
                message: "UnAuthorized User..."
            })
        }

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