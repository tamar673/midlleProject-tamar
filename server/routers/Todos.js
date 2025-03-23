const express = require("express")
const router = express.Router()
const todosControler=require("../controlers/Todos")

router.post("/",todosControler.creatTodos)
router.get("/",todosControler.getAllTodos)
router.put("/",todosControler.updateTodos)
router.delete("/",todosControler.deleteTodos)

module.exports=router
