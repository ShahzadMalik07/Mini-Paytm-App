const JWT_SECRET = require("../config")
const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization
  

    try {

        const decoded = jwt.verify(token, JWT_SECRET)

        if (decoded.userId) {
           
            req.userId = decoded.userId
            next()

        } else {
            res.json({ msg: "not verified" })
        }

    } catch (error) {
        res.json({ msg: "not verified" })
    }

}

module.exports = authMiddleware