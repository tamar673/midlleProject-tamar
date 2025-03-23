const mongoose= require("mongoose")
const photosSchema=mongoose.Schema(
{
title:{
    type:String
},
imageUrl:{
    type:String
}
},
{
    timestamps:true
}
) 
module.exports=mongoose.model('Photos',photosSchema)