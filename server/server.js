require ("dotenv").config()
const express=require("express")
const cors=require("cors")
const mongoose = require('mongoose') 
const corsOptions=require("./config/corsOptions")
const connectDB = require("./config/dbConn")

const PORT=process.env.PORT||1234
const app=express()
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use('/api/user',require('./routers/Users'))
app.use('/api/post',require('./routers/Posts'))
app.use('/api/todo/',require('./routers/Todos'))
//app.use('/api/photo/',require('./routers/Photos'))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
    })
    mongoose.connection.on('error', err => {
    console.log(err)
    })
