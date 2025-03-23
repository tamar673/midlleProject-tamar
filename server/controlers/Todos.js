const Todos = require("../models/Todos")

const creatTodos=('/',async(req,res)=>{
    const{title,tags,completed}=req.body
       
        const todo = await Todos.create({title,tags,completed})
        if (!todo){  
            return res.status(400).json({ message: 'did not creat new todos!!'})}
        res.json(todo)
    })


    const getAllTodos =('/',async(req,res)=>{
        const alltodos=await Todos.find().lean()
        if (!alltodos?.length) {
            return res.status(400).json({message: 'No todos found'})
        }
        res.json(alltodos)
    })

    const updateTodos= ('/',async (req, res) => {
       
        const {_idid,title,tags,completed}= req.body
        if(!_id){
            return res.status(400).json({messege:'insert _id'})}
        const todo = await Todos.findById(_id).exec()
        if (!todo) {
        return res.status(400).json({ message: 'todo not found' })
        }
        todo.title=title
        todo.tags=tags
        todo.completed=completed
        const saveTodo = await todo.save()
        res.json(saveTodo)
        })

        const deleteTodos=('/',async (req, res) => {
            const { _id } = req.body
            if(!_id){
                return res.status(400).json({messege:'insert _id'})}
            const todo = await Todos.findById(_id).exec()
            if (!todo) {
            return res.status(400).json({ message: 'todo not found' })
            }
            const result = await Todos.deleteOne()
            res.json('delited!')
            })

            module.exports = {
                creatTodos,
                getAllTodos,
                updateTodos,
                deleteTodos
                }