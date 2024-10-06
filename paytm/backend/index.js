const express = require("express");
const cors = require('cors')
const mainRouter = require("./routes/index")
const JWT_SECRET = require('./config');
const { authMiddleware } = require("./middleware");

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/v1", mainRouter)

// app.get("/",authMiddleware,(req,res) =>{
//     res.status(200).json({message: "Authenticated Successfully",status: true})
// })

app.listen(3000, () =>{
    console.log("The server is running on port 3000")
})




