const express=require("express")
const dotenv=require("dotenv")
const connectDB = require("./config/db")
const userRoutes=require("./Routes/userRoutes")
const {notFound,errorHanlder}=require("./middleware/errorMiddleware")
dotenv.config()
connectDB()
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("welcome to this app request")
})
app.use("/api/user",userRoutes)
app.use(notFound)
app.use(errorHanlder)
const port=process.env.PORT

app.listen(3000,()=>{
    console.log(`the server is running in port 3000`)
})