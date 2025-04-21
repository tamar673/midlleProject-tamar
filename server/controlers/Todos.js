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
        res.json(alltodos)
    })

    const updateTodos= ('/',async (req, res) => {
       
        const {id,title,tags}= req.body
        if(!id){
            return res.status(400).json({messege:'insert _id'})}
        const todo = await Todos.findById(id).exec()
        if (!todo) {
        return res.status(400).json({ message: 'todo not found' })
        }
        if(title)
            todo.title=title
        if(tags)
            todo.tags=tags
        const saveTodo = await todo.save()
        res.json(saveTodo)
        })

        const deleteTodos=('/',async (req, res) => {
            const { id } = req.params
            if(!id){
                return res.status(400).json({messege:'insert _id'})}
            const todo = await Todos.findById(id).exec()
            if (!todo) {
            return res.status(400).json({ message: 'todo not found' })
            }
            const result = await Todos.deleteOne(todo)
            res.json('delited!')
            })
        
            const updateComplete = async (req, res) => {
                const { id } = req.params
                const todo = await Todos.findById(id).exec()
                if (!todo) {
                return res.status(400).json({ message: 'Todo not found' })
                }
                todo.completed = !todo.completed
                const updatedTodo = await todo.save()
                res.json(`'${updatedTodo.completed}' updated`)
            }

            module.exports = {
                updateComplete,
                creatTodos,
                getAllTodos,
                updateTodos,
                deleteTodos
                }