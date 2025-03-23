const Photos = require("../models/Photos")


const creatPhoto=('/',async(req,res)=>{
    const {title,imageUrl}=req.body
    const photo=await Photos.create({title,imageUrl})
    if (!photo) {
                return res.status(400).json({ message: 'did not creat new photo!!' })}
    res.json(photo)
})


const getAllPhotos= ('/',async(req,res)=>{
    const allphotos=await Photos.find().lean()
    if(!allphotos?.length){
        return res.status(400).json({message: 'No photos found'})}
    res.json(allphotos)
})


const updatePhoto=('/',async (req,res)=>{
    const {_id,title,imageUrl}=req.body
    if(!_id){ 
        return res.status(400).json({messege:'insert _id'})}
    const photo=await Photos.findById(_id).exec()
    if(!photo){
        return res.status(400).json({message:"photo does not exist"})}
    photo.title=title
    photo.imageUrl=imageUrl
    const savePhoto=await photo.save()
    res.json(savePhoto)
})


const deletePhoto=('/',async(req,res)=>{
    const{_id}=req.body
    if(!_id){
        return res.status(400).json({messege:'insert _id'})}
    const photo=await Photos.findById(_id).exec()
    if(!photo){
        return res.status(400).json({message:"photo does not exist"})}
    const result=await Photos.deleteOne(post)
    res.json('delited!')
})

module.exports={creatPhoto,getAllPhotos,updatePhoto,deletePhoto}