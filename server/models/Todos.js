const mongoose=require("mongoose")
const TodosSchema=new mongoose.Schema(
{
    title:{
        type:String
    },
    tags:{
        type:String
    },
    completed:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
}
)
module.exports=mongoose.model('Todos',TodosSchema)