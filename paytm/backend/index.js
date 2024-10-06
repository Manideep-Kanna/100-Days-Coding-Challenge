const express = require("express");
const cors = require('cors')
const mainRouter = require("./routes/index")
const JWT_SECRET = require('./config');
const { authMiddleware } = require("./middleware");


const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

app.use("/api/v1", mainRouter)

app.get("/",(req,res) =>{
   res.send('<h1>Dont worry brother the URL is working fine</h1>')
})

app.listen(port, () =>{
    console.log(`The server is running on port ${port}`)
})




