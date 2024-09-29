const express = require('express')
const userRouter = require("./user")
const accountRouter = require("./account")

const router = express.Router();

router.use("/user",userRouter)
router.use("/account",accountRouter)

router.get("/",(req,res) =>{
    res.send("This is the mainRouter plese use User or account Router")
})

module.exports= router