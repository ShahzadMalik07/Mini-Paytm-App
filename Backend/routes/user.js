const express = require("express")
const router = express.Router()
const jwt = require('jsonwebtoken')
const zod = require("zod")
const { User, Account } = require("../db")
const JWT_SECRET = require("../config")
const authMiddleware = require("../middleware/authMiddleware")

const userZod = zod.object({
    firstname: zod.string().min(4),
    lastname: zod.string().min(4),
    username: zod.string().email(),
    password: zod.string().min(4)
})
const signinZod = zod.object({
    username: zod.string().email(),
    password: zod.string().min(4)
})

const updateZod = zod.object({
    firstname: zod.string().min(4),
    lastname: zod.string().min(4),
    password: zod.string().min(4)
})



router.post("/signup", async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname

    const validation = userZod.safeParse({ username, password, firstname, lastname })

    if (!validation.success) {
        res.json({ msg: "wrong inputs" })
    } else {
        let find = await User.findOne({
            username
        })
        if (find) {
            res.json({ msg: "Email Already Taken / Incorrect Inputs", })
        } else {
            const dbuser = await User.create({
                username,
                password,
                firstname,
                lastname

            })
            
            const userId = dbuser._id

            const account = Account.create({
                userId,
                balance: 1 + Math.random() * 10000

            })





            let token = jwt.sign({ userId: dbuser._id }, JWT_SECRET)
            res.json({
                msg: "User created Successfully",
                token: token,
                firstname:firstname
            })
        }

    }

})

router.post("/signin",  async function (req, res) {
    const username = req.body.username
    const password = req.body.password
  
  

    const validations = signinZod.safeParse({ username, password })
    if (!validations.success) {
        return res.json({ msg: "wrong inputs" })
    } else {
        const user = await User.findOne({
            username,
        })
        if (!user) {
            res.json({
                msg: "User does not exists"
            })
        }
        if (user.password !== password) {
            return res.json({
                msg: "Wrong Password"
            })
        }
        let token = jwt.sign({ userId: user._id }, JWT_SECRET)
        res.json({ token: token,
            user
         })
    }

    
})


router.put("/update", authMiddleware, async function (req, res) {
    const validations = updateZod.safeParse(req.body)
    if (!validations.success) {
        return res.json({ msg: "wrong inputs" })
    }
    let updated = await User.updateOne({ _id: req.userId }, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    })
    if (updated) {
        res.json({ msg: "updated" })

    } else { res.json({ msg: "not" }) }



})

router.get("/search", authMiddleware, async function (req, res) {
    const filter = req.query.filter
   

    const user = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            },

        }, {
            lastname: {
                "$regex": filter
            }
        }
        ]

    })

    res.json({
        user:user.map(user=>({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id


        }))
    })
})

module.exports = router
