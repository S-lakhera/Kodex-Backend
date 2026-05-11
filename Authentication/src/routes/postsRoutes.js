const express = require("express");
const { fetchPostsController } = require("../controllers/postsController");
const authMiddleware = require("../middlewares/authMiddleware");

let router = express.Router();

router.get("/",authMiddleware, fetchPostsController)

module.exports = router;