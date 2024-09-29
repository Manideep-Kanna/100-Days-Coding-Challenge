const express = require('express')
const userRouter = require("./user")

const router = express.Router();

router.use("/user",userRouter)

router.get("/",(req,res) =>{
    res.send("This is the mainRouter plese use User or account Router")
})

module.exports= router