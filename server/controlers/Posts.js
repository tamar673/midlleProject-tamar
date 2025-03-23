const Posts = require("../models/Posts")


const creatPost=('/',async(req,res)=>{
    const {title,body}=req.body
    const post=await Posts.create({title,body})
    if (!Posts) {
                return res.status(400).json({ message: 'did not creat new post!!' })}
    res.json(post)
})


const getAllPosts= ('/',async(req,res)=>{
    const allposts=await Posts.find().lean()
    if(!allposts?.length){
        return res.status(400).json({message: 'No post found'})}
    res.json(allposts)
})


const updatePost=('/',async (req,res)=>{
    const {_id,title,body}=req.body
    if(!_id){ 
        return res.status(400).json({messege:'insert _id'})}
    const post=await Posts.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:"post does not exist"})}
    post.title=title
    post.body=body
    const savePost=await post.save()
    res.json(savePost)
})


const deletePost=('/',async(req,res)=>{
    const{_id}=req.body
    if(!_id){
        return res.status(400).json({messege:'insert _id'})}
    const post=await Posts.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:"post does not exist"})}
    const result=await Posts.deleteOne(post)
    res.json('delited!')
})

module.exports={creatPost,getAllPosts,updatePost,deletePost}