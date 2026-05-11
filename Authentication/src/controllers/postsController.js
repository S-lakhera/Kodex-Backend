

let fetchPostsController = (req, res) => {
    try {
        return res.status(200).json({
            message:"Fetched all posts successfully",
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