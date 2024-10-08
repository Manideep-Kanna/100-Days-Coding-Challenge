const express = require('express');
const { authMiddleware } = require('../middleware');
const { User, Account } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance",authMiddleware,async(req,res) =>{
    const account = await Account.findOne({userId: req.headers.userId})
    console.log(account)
    res.json({balance: account.balance})
});

router.post("/transfer",authMiddleware,async(req,res) =>{
    const session = await mongoose.startSession();

    session.startTransaction();

    const {to,amount} = req.body;
    const userId = req.headers.userId

    const userAccount = await Account.findOne({userId: req.headers.userId}).session(session);
    const recieverAccount = await Account.findOne({userId: to}).session(session)

    if(amount > userAccount?.balance){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient Balance"
        })
    }

    if(!recieverAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({userId},{
        $inc:{
            balance: -amount
        }
    }).session(session)

    await Account.updateOne({userId:to},{
        $inc:{
            balance: amount
        }
    }).session(session)

    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    })

})

router.get("/getAllAccounts",async(req,res) =>{
    const transactions = await Account.find({});
    res.send(transactions)
})

async function transfer(req) {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);
    console.log(account)

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        console.log("Insufficient balance")
        return;
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        console.log("Invalid account")
        return;
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    console.log("done")
}




module.exports = router