import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRouter.js"
import path from "path"
import userRouter from "./routes/userRouter.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRouter.js"
import orderRouter from "./routes/orderRouter.js"



foodRouter

//app configconst
const app = express()
const port = 4000

// middleware
app.use(express.json())  //using this middleware whenever we will get the request from the froont end to back end what will be parsed using this jason
app.use(cors())  // we can access the backend from any frontend



// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images", express.static(path.join(process.cwd(), "uploads"))); 
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working") //whener we will open this endpoint we will get the response API working
}) // http method  , using that we can request the data from the server 

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})//run the express server


