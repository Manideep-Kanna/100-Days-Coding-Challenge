const express = require("express");
const cors = require('cors')
const mainRouter = require("./routes/index")
const JWT_SECRET = require('./config')

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/v1", mainRouter)

app.get("/",(req,res) =>{
    res.send("Got the request in the main app")
})

app.listen(3000, () =>{
    console.log("The server is running on port 3000")
})




