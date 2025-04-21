const express = require("express")
const router = express.Router()
const photosControler=require("../controlers/Photos")

router.post("/",photosControler.creatPhoto)
router.get("/",photosControler.getAllPhotos)
router.put("/",photosControler.updatePhoto)
router.delete("/:id",photosControler.deletePhoto)

module.exports=router
