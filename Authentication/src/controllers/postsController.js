

let fetchPostsController = (req, res) => {
    try {
        console.log(req.user)
        let name = req.user.name;
        return res.status(200).json({
            message: `Fetched all posts successfully for : ${name}`,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports = {
    fetchPostsController
}