const Users=require("../models/Users")

const creatUsers=('/',async(req,res)=>{
    const{name, username, email, address, phone}=req.body
        if(!name||!username||!address||!phone){
            return res.status(400).json({ message: 'One detail is missing' })}
        const existingUser = await Users.findOne({ username})
        if (existingUser) {
        return res.status(400).json({ message: "Username is already taken" })
        }
        const user = await Users.create({name,username,email:email,address,phone})
        if (!user) {
            return res.status(400).json({ message: 'did not creat new user!!' })} 
        res.json(user)
    })

    const getAllUsers=('/',async (req, res) => {
        const allusers = await Users.find().lean()
        if (!allusers?.length) {
        return res.status(400).json({ message: 'No users found' })
        }
        res.json(allusers)
        })
        
const updateUser=('/',async(req,res)=>{
    const{_id,name, username, email, address, phone}=req.body
    if(!name|| !username|| !address|| !phone){
        return res.status(400).json({ message: 'One detail is missing' })}
    if (!_id){
        return res.status(400).json({ messege: 'insert _id' })}
    const user=await Users.findById(_id).exec()
    if(!user)
        return res.status(400).json({message:"User does not exist"})
    const existingUser = await Users.findOne({ username})
            if (existingUser && existingUser._id.toString() !== _id.toString()) {
                return res.status(400).json({ message: "Username is already taken" })}
    user.name=name
    user.username=username
    if(email)
        user.email=email
    user.address=address
    user.phone=phone

    const updatedUser = await user.save()
    res.json(`'${updatedUser.name}' updated`)
})


const deleteUser=('/',async(req,res)=>{
    console.log("req",req);
    const { id } = req.params
    const user=await Users.findById(id).exec()
    if(!id){
        return res.status(401).json({ message: 'insert id' })
    }
    if(!user){
        return res.status(400).json({message:"User does not exist"})}
    const result = await Users.deleteOne(user)
    res.json(`'${result.name}' deleted`)
})

module.exports={creatUsers,getAllUsers,updateUser,deleteUser}
      
    
    
