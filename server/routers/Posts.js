const express = require("express")
const router = express.Router()
const postsControler=require("../controlers/Posts")

router.post("/",postsControler.creatPost)
router.get("/",postsControler.getAllPosts)
router.put("/",postsControler.updatePost)
router.delete("/:id",postsControler.deletePost)

module.exports=router

