const mongoose = require("mongoose");
const { Schema } = require("zod");

mongoose.connect("mongodb+srv://kanna:kanna@learning.ju58i.mongodb.net/paytm").then(
    () =>{
        console.log("Connected Successfully")
    }
)
.catch(() =>{
    console.log("Got some issues")
})


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    balance: Number
})

const User = mongoose.model('User',userSchema)

const Account = mongoose.model('Account',accountSchema)

module.exports={
    User,
    Account
}