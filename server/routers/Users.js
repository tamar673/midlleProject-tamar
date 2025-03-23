const express=require("express")
const router=express.Router()
const UserControler=require("../controlers/Users")

router.get("/",UserControler.getAllUsers)
router.post("/",UserControler.creatUsers)
router.put("/",UserControler.updateUser)
router.delete("/",UserControler.deleteUser)

module.exports=router
