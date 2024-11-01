const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")
const { Account } = require("../db")




router.get("/balance", authMiddleware, async function (req, res) {
    const account = await Account.findOne({
        userId: req.userId

    })
    res.json({ balance: account.balance })
})




router.post("/transfer", authMiddleware, async function (req, res) {
    const { amount, to } = req.body

    const account = await Account.findOne({
        userId: req.userId
    })
    if (typeof amount !== 'number' || isNaN(amount)) {
        return res.status(400).send('Invalid amount');
      }

    if (account.balance < amount) {
        res.json({
            msg: "Insufficient Balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to

    })

    if (!toAccount) {
        res.json({
            msg: "Invalid Account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    }
    )
    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({msg:"Transfer Successfully"})







})
module.exports = router